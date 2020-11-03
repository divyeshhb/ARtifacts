// import 'package:dynamic_theme/dynamic_theme.dart';
// import '../widgets/web_scrollbar.dart';
import '../widgets/explore_drawer.dart';
import '../widgets/all_heading.dart';
import '../widgets/all_tiles.dart';

import '../widgets/top_bar_contents.dart';
import 'package:flutter/material.dart';

class ProductCatalog extends StatefulWidget {
  static const String route = '/';

  @override
  _ProductCatalogState createState() => _ProductCatalogState();
}

class _ProductCatalogState extends State<ProductCatalog> {
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
      drawer: ExploreDrawer(),
      body: SingleChildScrollView(
        physics: ClampingScrollPhysics(),
        child: Column(
          children: [
            Column(
              children: [
                Container(
                  child: SizedBox(
                    height: screenSize.height * 0.45,
                    width: screenSize.width,
                    child: Image.asset(
                      'assets/products.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Container(
                  child: Column(
                    children: [
                      AllHeading(
                        screenSize: screenSize,
                      ),
                      SizedBox(
                        height: screenSize.height * 0.05,
                      ),
                      AllTiles(screenSize: screenSize)
                    ],
                  ),
                ),
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
