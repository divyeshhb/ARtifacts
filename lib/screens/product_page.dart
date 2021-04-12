import 'package:artif/screens/product_catalog.dart';
import 'package:artif/utils/authentication.dart';
import 'package:artif/widgets/auth_dialog.dart';
import 'package:artif/widgets/product_right.dart';
import 'package:qr_flutter/qr_flutter.dart';
// import 'package:firebase_dynamic_links/firebase_dynamic_links.dart';
import '../bid_function.dart';
import '../widgets/my_button.dart';
import 'package:artif/widgets/time_formatter.dart';
import 'package:flutter/material.dart';
import '../widgets/top_bar_contents.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:intl/intl.dart';
// import 'dart:async';

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
  //var arUrl;
  @override
  void initState() {
    getTimeStatus();
    getUserInfo();
    //arUrl = await createDynamicLink(widget.productId);
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
    print(differenceE / 60 / 60 / 24);
    print(differenceS);
  }

  openQrCode(var snapshot) {
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text(
              'View This Artifact in AR',
              style: TextStyle(
                fontSize: 24,
                fontFamily: 'Montserrat',
                fontWeight: FontWeight.bold,
              ),
            ),
            actions: <Widget>[
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('Close'),
              ),
            ],
            actionsPadding: EdgeInsets.symmetric(horizontal: 8.0),
            content: Container(
              width: 400,
              height: 450,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Card(
                        color: Colors.white70,
                        elevation: 6.0,
                        child: QrImage(
                          data: '${snapshot.data.id}',
                          // data: 'asd',
                          version: QrVersions.auto,
                          size: 300.0,
                        ),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 15,
                  ),
                  Text(
                    '1. Download the ARtifacts app from Playstore / Appstore.\n2. Scan this QR code inside the app.\n3. Place the product in the AR view.',
                    style: TextStyle(
                      fontSize: 16,
                      fontFamily: 'Montserrat',
                      fontWeight: FontWeight.bold,
                      height: 1.5,
                    ),
                  ),
                ],
              ),
            ),
          );
        });
  }

  Future getUserInfo() async {
    await getUser();
    setState(() {});
    print(uid);
  }

  placeBid() async {
    if (uid != null) {
      openBidDialog(widget.productId, context, uid);
    } else {
      showDialog(
        context: context,
        builder: (context) => AuthDialog(),
      );
    }
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
                                                            : 'INR ${currencyFormat.format(double.parse((snapshot.data["currentBid"])))}',
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
                                                          placeBid();
                                                        },
                                                      )
                                                    : MyButton(
                                                        name: ' Go to Catalog',
                                                        icon:
                                                            Icons.shopping_cart,
                                                        onPressed: () async {
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
                                              onPressed: () {
                                                openQrCode(snapshot);
                                              },
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
