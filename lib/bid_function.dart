import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/services.dart';
import 'package:flutter_masked_text/flutter_masked_text.dart';
import 'package:intl/intl.dart';

final currencyFormat = NumberFormat("#,##0.00", "en_US");

placeBid(String productId, snapshot, String uid, double bidAmt, context) async {
  if (bidAmt > double.parse(snapshot.data['currentBid'])) {
    var docs = await FirebaseFirestore.instance
        .collection('Product')
        .doc(productId)
        .get();
    if (!docs.data().containsKey('bids')) {
      FirebaseFirestore.instance.collection('Product').doc(productId).update({
        'bids': [
          {
            uid: bidAmt,
          },
        ],
        'currentBid': bidAmt.toString(),
      });
    } else {
      FirebaseFirestore.instance.collection('Product').doc(productId).update({
        'bids': FieldValue.arrayUnion([
          {
            uid: bidAmt,
          }
        ]),
        'currentBid': bidAmt.toString(),
      });
    }
    Navigator.of(context).pop();
  }
}

openBidDialog(productId, context, uid) {
  showDialog(
      context: context,
      builder: (context) {
        return StreamBuilder(
            stream: FirebaseFirestore.instance
                .collection('Product')
                .doc(productId)
                .snapshots(),
            builder: (context, snapshot) {
              if (!snapshot.hasData) {
                return Center(
                  child: CircularProgressIndicator(),
                );
              }
              var textEditingController = MoneyMaskedTextController(
                decimalSeparator: '.',
                leftSymbol: '₹ ',
                thousandSeparator: ',',
                precision: 2,
                initialValue: double.parse(snapshot.data['currentBid']),
              );
              return AlertDialog(
                title: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      'Place Bid',
                      style: TextStyle(
                        fontSize: 24,
                        fontFamily: 'Montserrat',
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    IconButton(
                      icon: Icon(Icons.close_outlined, size: 30),
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                      color: Colors.black54,
                      focusColor: Color.fromRGBO(1, 1, 1, 0),
                      hoverColor: Color.fromRGBO(1, 1, 1, 0),
                      highlightColor: Color.fromRGBO(1, 1, 1, 0),
                    ),
                  ],
                ),
                content: Container(
                  width: 400,
                  height: 200,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                          'Current Bid: INR ${currencyFormat.format(double.parse((snapshot.data["currentBid"])))}'),
                      Row(
                        children: [
                          Expanded(
                            flex: 8,
                            child: TextField(
                              enabled: false,
                              inputFormatters: <TextInputFormatter>[
                                FilteringTextInputFormatter.allow(
                                    RegExp(r'[0-9]')),
                              ],
                              controller: textEditingController,
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: TextButton(
                              onPressed: () {
                                textEditingController.updateValue(double.parse(
                                    (snapshot.data["currentBid"])));
                              },
                              child: Text(
                                'clear',
                                style: TextStyle(
                                  color: Colors.redAccent,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          addMoney(10, textEditingController),
                          SizedBox(
                            width: 10,
                          ),
                          addMoney(100, textEditingController),
                          SizedBox(
                            width: 10,
                          ),
                          addMoney(1000, textEditingController),
                          SizedBox(
                            width: 10,
                          ),
                          addMoney(10000, textEditingController),
                        ],
                      ),
                      MaterialButton(
                        color: Colors.black87,
                        hoverColor: Colors.black,
                        highlightColor: Colors.blueGrey[800],
                        onPressed: () async {
                          await placeBid(productId, snapshot, uid,
                              textEditingController.numberValue, context);
                        },
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5),
                        ),
                        child: Container(
                          height: 40,
                          width: 80,
                          padding: EdgeInsets.only(
                            top: 8.0,
                            bottom: 8.0,
                          ),
                          child: Center(
                            child: Text(
                              'Place Bid',
                              style: TextStyle(
                                fontFamily: 'Montserrat',
                                fontSize: 14,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30),
                ),
              );
            });
      });
}

makeBidList() {}

Widget addMoney(double money, textEditingController) {
  return MaterialButton(
    color: Colors.black54,
    hoverColor: Colors.black,
    highlightColor: Colors.blueGrey[800],
    onPressed: () {
      textEditingController
          .updateValue(textEditingController.numberValue + money);
    },
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(5),
    ),
    child: Container(
      // height: 40,
      // width: 30,
      child: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              '+ $money',
              style: TextStyle(
                fontFamily: 'Montserrat',
                //fontSize: 14,
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    ),
  );
}
