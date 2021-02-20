import 'package:flutter/material.dart';
import '../widgets/top_bar_contents.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class ProductPage extends StatefulWidget {
  final String productId;
  ProductPage(
    this.productId,
  );

  @override
  _ProductPageState createState() => _ProductPageState();
}

class _ProductPageState extends State<ProductPage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Theme.of(context).backgroundColor,
      extendBodyBehindAppBar: false,
      appBar: PreferredSize(
        preferredSize: Size(screenSize.width, 1000),
        child: TopBarContents(1),
      ),
      body: StreamBuilder(
          stream: FirebaseFirestore.instance
              .collection('Product')
              .doc(widget.productId)
              .snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }
            var productDoc = snapshot.data;
            return Column(
              children: <Widget>[
                Row(
                  // mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Column(
                      children: [
                        Container(
                          color: Theme.of(context)
                              .bottomAppBarColor
                              .withOpacity(0.5),
                          height: screenSize.width * 0.38,
                          padding: EdgeInsets.only(
                            top: 0,
                            left: 0,
                          ),
                          width: screenSize.width * 0.38,
                          child: Center(
                            child: Container(
                              height: screenSize.width * 0.35,
                              // padding: EdgeInsets.only(
                              //   top: screenSize.width * 0.02,
                              //   left: screenSize.width * 0.02,
                              //   bottom: screenSize.width * 0.02,
                              //   right: screenSize.width * 0.02,
                              // ),
                              width: screenSize.width * 0.35,
                              child: Image.network(
                                snapshot.data['productImageUrl'],
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                    SizedBox(
                      width: 30,
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(top: 20),
                          child: Text(
                            snapshot.data['productName'],
                            style: TextStyle(
                              fontSize: 36,
                              fontFamily: 'Montserrat',
                              fontWeight: FontWeight.bold,
                              color: Theme.of(context)
                                  .primaryTextTheme
                                  .subtitle1
                                  .color,
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        Text(
                          'INR ${snapshot.data['basePrice']} ',
                          style: TextStyle(
                            fontSize: 26,
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.bold,
                            color: Theme.of(context)
                                .primaryTextTheme
                                .subtitle1
                                .color,
                          ),
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        Container(
                          width: screenSize.width * 0.5,
                          child: Text(
                            snapshot.data['shortDesc'],
                            style: TextStyle(
                              fontSize: 18,
                              fontFamily: 'Montserrat',
                              // fontWeight: FontWeight.bold,
                              color: Theme.of(context)
                                  .primaryTextTheme
                                  .subtitle1
                                  .color,
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        Container(
                          width: screenSize.width * 0.5,
                          child: Text(
                            'Details: \n${snapshot.data['longDesc']}',
                            style: TextStyle(
                              fontSize: 18,
                              fontFamily: 'Montserrat',
                              // fontWeight: FontWeight.bold,
                              color: Theme.of(context)
                                  .primaryTextTheme
                                  .subtitle1
                                  .color,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            );
          }),
    );
  }
}
