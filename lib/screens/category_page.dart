import 'package:artif/widgets/floating_quick_access_bar.dart';
import 'package:artif/widgets/heading_main.dart';
import 'package:artif/widgets/tile_card.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import '../widgets/top_bar_contents.dart';
import 'package:flutter/material.dart';

import 'home_page.dart';

class CategoryCatalog extends StatefulWidget {
  final String category;
  final String categoryName;
  CategoryCatalog({
    this.category,
    this.categoryName,
  });

  @override
  _CategoryCatalogState createState() => _CategoryCatalogState();
}

class _CategoryCatalogState extends State<CategoryCatalog> {
  double _opacity = 0;

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    _opacity = 1;

    return Scaffold(
      backgroundColor: Theme.of(context).backgroundColor,
      extendBodyBehindAppBar: false,
      appBar: PreferredSize(
        preferredSize: Size(screenSize.width, 1000),
        child: TopBarContents(_opacity),
      ),
      body: SingleChildScrollView(
        //physics: ClampingScrollPhysics(),
        child: Column(
          children: [
            Stack(
              children: [
                Container(
                  child: SizedBox(
                    height: screenSize.height * 0.45,
                    width: screenSize.width,
                    child: Image.asset(
                      'assets/collectible.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Column(
                  children: [
                    FloatingQuickAccessBar(screenSize: screenSize),
                    Container(
                      child: Column(
                        children: [
                          HeadingMain(
                              screenSize: screenSize,
                              title1: widget.categoryName,
                              title2: 'Collection of Curated Artifacts |',
                              title3: ' Featured',
                              onTap1: () {
                                Navigator.of(context).pushReplacement(
                                  MaterialPageRoute(
                                    builder: (context) => HomePage(),
                                  ),
                                );
                              }),
                          SizedBox(
                            height: screenSize.height * 0.05,
                          ),
                          StreamBuilder(
                            stream: FirebaseFirestore.instance
                                .collection('Product')
                                .where('tags', arrayContains: widget.category)
                                .snapshots(),
                            builder: (BuildContext context,
                                AsyncSnapshot<QuerySnapshot> snapshot) {
                              if (!snapshot.hasData) {
                                return Center(
                                  child: CircularProgressIndicator(),
                                );
                              }
                              return Padding(
                                padding: EdgeInsets.only(
                                  top: 0,
                                  left: screenSize.width / 22,
                                  right: screenSize.width / 22,
                                ),
                                child: GridView.builder(
                                  physics: NeverScrollableScrollPhysics(),
                                  shrinkWrap: true,
                                  itemCount: snapshot.data.docs.length,
                                  gridDelegate:
                                      SliverGridDelegateWithFixedCrossAxisCount(
                                          crossAxisCount: 3,
                                          childAspectRatio: 3 / 3.5),
                                  itemBuilder: (context, index) {
                                    return TileCard(
                                        snapshot, screenSize, index);
                                  },
                                ),
                              );
                            },
                          ),
                        ],
                      ),
                    ),
                  ],
                )
              ],
            ),
            // SizedBox(height: screenSize.height / 8),
            SizedBox(height: screenSize.height / 10),
            // BottomBar(),
          ],
        ),
      ),
    );
  }
}
