import 'package:artif/screens/product_catalog.dart';
import 'package:artif/widgets/product_right.dart';

import '../widgets/my_button.dart';
import 'package:artif/widgets/time_formatter.dart';
import 'package:flutter/material.dart';
import '../widgets/top_bar_contents.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:intl/intl.dart';

class ProductPage extends StatefulWidget {
  final String productId;
  final String status;
  final int index;
  final dynamic snap;
  ProductPage(this.productId, this.status, this.snap, this.index);

  @override
  _ProductPageState createState() => _ProductPageState();
}

class _ProductPageState extends State<ProductPage> {
  @override
  void initState() {
    getTimeStatus();
    super.initState();
  }

  final currencyFormat = NumberFormat("#,##0.00", "en_US");
  var differenceS;
  var differenceE;
  getTimeStatus() {
    Timestamp s = widget.snap.data.docs[widget.index]['startDate'];
    Timestamp e = widget.snap.data.docs[widget.index]['endDate'];
    differenceS = s.toDate().difference(DateTime.now()).inSeconds;
    differenceE = e.toDate().difference(DateTime.now()).inSeconds;
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
            //var productDoc = snapshot.data;
            return Container(
              color: Color(0xFFf0f0f0),
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Row(
                  children: <Widget>[
                    Expanded(
                      flex: 1,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          decoration: BoxDecoration(
                              color: Color(0xFFfbfbfb),
                              borderRadius: BorderRadius.circular(20)),
                          child: Padding(
                            padding: const EdgeInsets.all(18.0),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                // Expanded(flex: 1, child: appBar()),
                                Expanded(
                                  flex: 5,
                                  child: ClipRRect(
                                    borderRadius: BorderRadius.circular(10),
                                    child: Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Container(
                                        decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(10),
                                          image: DecorationImage(
                                            image: NetworkImage(snapshot
                                                .data['productImageUrl']),
                                            fit: BoxFit.cover,
                                          ),
                                          boxShadow: [
                                            BoxShadow(
                                              color: Colors.grey,
                                              //offset: Offset(0.0, 1.0), //(x,y)
                                              blurRadius: 5.0,
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                Expanded(
                                    flex: 3,
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: <Widget>[
                                        Container(
                                          padding: EdgeInsets.only(
                                            // top: 25,
                                            left: 20,
                                            right: 20,
                                          ),
                                          child: Row(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            mainAxisAlignment:
                                                MainAxisAlignment.spaceBetween,
                                            children: <Widget>[
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: <Widget>[
                                                  Text(
                                                    widget.status ==
                                                            "will_start"
                                                        ? 'Current Bid'
                                                        : widget.status ==
                                                                'in_progress'
                                                            ? 'Current Bid'
                                                            : 'Sold for',
                                                    style: TextStyle(
                                                      fontSize: 15,
                                                      fontFamily: 'Montserrat',
                                                      // fontWeight: FontWeight.bold,
                                                      // color: Colors.white60,
                                                    ),
                                                  ),
                                                  Text(
                                                    widget.status ==
                                                            "will_start"
                                                        ? 'Starting Soon'
                                                        : widget.status ==
                                                                'in_progress'
                                                            ? 'INR ${currencyFormat.format(double.parse((snapshot.data["currentBid"])))}'
                                                            //: 'INR ${currencyFormat.format(double.parse((widget.snapshot.data.docs[widget.index]["finalPrice"])))}',
                                                            : 'INR 20,000.00',
                                                    style: TextStyle(
                                                      fontSize: 18,
                                                      fontFamily: 'Montserrat',
                                                      fontWeight:
                                                          FontWeight.bold,
                                                      // color: Colors.white,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: <Widget>[
                                                  Text(
                                                    widget.status ==
                                                            "will_start"
                                                        ? 'Starts in'
                                                        : widget.status ==
                                                                'in_progress'
                                                            ? 'Ends in'
                                                            : 'Ended',
                                                    style: TextStyle(
                                                      fontSize: 15,
                                                      fontFamily: 'Montserrat',
                                                      // fontWeight: FontWeight.bold,
                                                      // color: Colors.white60,
                                                    ),
                                                  ),
                                                  widget.status == 'ended'
                                                      ? Text(
                                                          '-',
                                                          style: TextStyle(
                                                            fontSize: 18,
                                                            fontFamily:
                                                                'Montserrat',
                                                            fontWeight:
                                                                FontWeight.bold,
                                                            // color: Colors.white,
                                                          ),
                                                        )
                                                      : CountDownTimer(
                                                          secondsRemaining: widget
                                                                      .status ==
                                                                  'will_start'
                                                              ? differenceS
                                                              : widget.status ==
                                                                      'in_progress'
                                                                  ? differenceE
                                                                  : 0,
                                                          whenTimeExpires:
                                                              () {},
                                                          countDownTimerStyle:
                                                              TextStyle(
                                                            fontSize: 18,
                                                            fontFamily:
                                                                'Montserrat',
                                                            fontWeight:
                                                                FontWeight.bold,
                                                            // color: Colors.white,
                                                          ),
                                                        ),
                                                ],
                                              ),
                                            ],
                                          ),
                                        ),
                                        SizedBox(
                                          height: 20,
                                        ),
                                        Column(
                                          children: [
                                            widget.status == 'will_start'
                                                ? MyButton(
                                                    name: ' Notify Me',
                                                    icon: Icons.notifications,
                                                    onPressed: () {
                                                      //notify
                                                    },
                                                  )
                                                : widget.status == 'in_progress'
                                                    ? MyButton(
                                                        name: 'Place Bid',
                                                        icon:
                                                            Icons.attach_money,
                                                        onPressed: () {
                                                          //open bid
                                                        },
                                                      )
                                                    : MyButton(
                                                        name: ' Go to Catalog',
                                                        icon:
                                                            Icons.shopping_cart,
                                                        onPressed: () {
                                                          Navigator.of(context)
                                                              .pushReplacement(
                                                            MaterialPageRoute(
                                                              builder: (context) =>
                                                                  ProductCatalog(),
                                                            ),
                                                          );
                                                        },
                                                      ),
                                            SizedBox(
                                              height: 15,
                                            ),
                                            MyButton(
                                              name: ' View in AR',
                                              icon: Icons
                                                  .play_circle_outline_outlined,
                                              onPressed: () {},
                                            ),
                                          ],
                                        ),
                                      ],
                                    ))
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                    Expanded(
                        flex: 2,
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Container(
                              decoration: BoxDecoration(
                                  color: Color(0xFFfbfbfb),
                                  borderRadius: BorderRadius.circular(20)),
                              child: ProductRight(
                                productId: widget.productId,
                              )),
                        ))
                  ],
                ),
              ),
            );
          }),
    );
  }
}
