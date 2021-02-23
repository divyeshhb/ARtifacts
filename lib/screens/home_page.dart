// import 'package:dynamic_theme/dynamic_theme.dart';
// import '../widgets/web_scrollbar.dart';
import 'package:artif/screens/product_catalog.dart';
import 'package:artif/widgets/heading_main.dart';
import 'package:artif/widgets/tiles_main.dart';

import '../widgets/floating_quick_access_bar.dart';

import '../widgets/top_bar_contents.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  static const String route = '/';

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
                      'assets/cover.jpg',
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
                              title1: 'Featured',
                              title2: 'Collection of Curated Artifacts |',
                              title3: ' All Products',
                              onTap1: () {
                                Navigator.of(context).pushReplacement(
                                  MaterialPageRoute(
                                    builder: (context) => ProductCatalog(),
                                  ),
                                );
                              }),
                          SizedBox(
                            height: screenSize.height * 0.05,
                          ),
                          TilesMain(screenSize: screenSize, isFeatured: true)
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
