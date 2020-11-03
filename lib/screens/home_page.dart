// import 'package:dynamic_theme/dynamic_theme.dart';
// import '../widgets/web_scrollbar.dart';
import '../widgets/explore_drawer.dart';
import '../widgets/featured_heading.dart';
import '../widgets/featured_tiles.dart';
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
      drawer: ExploreDrawer(),
      body: SingleChildScrollView(
        physics: ClampingScrollPhysics(),
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
                          FeaturedHeading(
                            screenSize: screenSize,
                          ),
                          SizedBox(
                            height: screenSize.height * 0.05,
                          ),
                          FeaturedTiles(screenSize: screenSize)
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
