// import 'package:dynamic_theme/dynamic_theme.dart';
// import '../widgets/web_scrollbar.dart';
import 'package:artif/widgets/bottom_bar.dart';
import 'package:artif/widgets/heading_main.dart';
import 'package:artif/widgets/tiles_main.dart';

import '../widgets/top_bar_contents.dart';
import 'package:flutter/material.dart';

import 'home_page.dart';

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
                      HeadingMain(
                          screenSize: screenSize,
                          title1: 'All Products',
                          title2: 'Check Out Every Product We Have To Offer |',
                          title3: ' Featured Products',
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
                      TilesMain(screenSize: screenSize, isFeatured: false)
                    ],
                  ),
                ),
              ],
            ),
            // SizedBox(height: screenSize.height / 8),
            SizedBox(height: screenSize.height / 10),
            BottomBar(),
          ],
        ),
      ),
    );
  }
}
