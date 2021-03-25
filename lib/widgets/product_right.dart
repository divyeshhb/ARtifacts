import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:intl/intl.dart';

class ProductRight extends StatefulWidget {
  final dynamic productId;
  ProductRight({this.productId});
  @override
  _ProductRightState createState() => _ProductRightState();
}

class _ProductRightState extends State<ProductRight> {
  final currencyFormat = NumberFormat("#,##0.00", "en_US");
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
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
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              // SizedBox(
              //   height: 20,
              // ),
              Expanded(
                flex: 5,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Padding(
                      padding: const EdgeInsets.only(
                        left: 30.0,
                        right: 30,
                        top: 25.0,
                        bottom: 5,
                      ),
                      child: Text(
                        snapshot.data['productName'],
                        style: TextStyle(
                          fontSize: 34,
                          color: Color(0xFF333333),
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    Container(
                      height: 40,
                      padding: EdgeInsets.only(
                        left: 30.0,
                        bottom: 15,
                      ),
                      child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          shrinkWrap: true,
                          itemCount: snapshot.data['tags'].length,
                          itemBuilder: (context, index) {
                            return Padding(
                              padding: const EdgeInsets.only(right: 8.0),
                              child: MaterialButton(
                                onPressed: () {},
                                color: Colors.blueGrey,
                                hoverColor: Colors.blueGrey[700],
                                highlightColor: Colors.blueGrey[800],
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(15),
                                ),
                                child: Container(
                                  child: Center(
                                    child: Row(
                                      children: [
                                        ImageIcon(
                                          AssetImage('assets/tag.png'),
                                          size: 15,
                                          color: Colors.white,
                                        ),
                                        SizedBox(
                                          width: 5,
                                        ),
                                        Text(
                                          '${snapshot.data['tags'][index]}',
                                          style: TextStyle(
                                            fontFamily: 'Montserrat',
                                            fontSize: 12,
                                            color: Colors.white,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            );
                          }),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(
                        left: 30.0,
                        right: 30,
                        top: 0,
                        bottom: 15,
                      ),
                      child: Text(
                        'INR ${currencyFormat.format(double.parse((snapshot.data["basePrice"])))}',
                        style: TextStyle(
                          fontSize: 24,
                          color: Color(0xFF333333),
                          fontFamily: "Montserrat",
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    Container(
                      width: 700,
                      padding: const EdgeInsets.only(left: 30.0, top: 0),
                      child: Container(
                        child: Text(
                          '${snapshot.data['shortDesc']} \n\nDetails-\n${snapshot.data['longDesc']}',
                          style: TextStyle(
                            fontSize: 15,
                            color: Color(0xFF333333),
                            fontFamily: "Montserrat",
                            // fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                    ),
                    // SizedBox(
                    //   height: 30,
                    // ),
                  ],
                ),
              ),
            ],
          );
        });
  }
}
