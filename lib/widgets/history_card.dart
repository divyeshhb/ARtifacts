import 'package:artif/bid_function.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class HistoryCard extends StatefulWidget {
  final String userId;
  final amount;

  HistoryCard({
    this.userId,
    this.amount,
  });

  @override
  _HistoryCardState createState() => _HistoryCardState();
}

class _HistoryCardState extends State<HistoryCard> {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: FirebaseFirestore.instance
            .collection('User')
            .doc(widget.userId)
            .snapshots(),
        builder: (context, snapshotUser) {
          if (!snapshotUser.hasData) {
            return Center(
              child: CircularProgressIndicator(),
            );
          }
          return Card(
            //shape: RoundedRectangleBorder(borderRadius: 15),
            color: Colors.black87,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    SizedBox(width: 15),
                    CircleAvatar(
                      radius: 30,
                      backgroundImage:
                          snapshotUser.data['profilePicUrl'] != null
                              ? NetworkImage(snapshotUser.data['profilePicUrl'])
                              : null,
                      child: snapshotUser.data['profilePicUrl'] == null
                          ? Icon(
                              Icons.account_circle,
                              size: 30,
                            )
                          : Container(),
                    ),
                    SizedBox(width: 15),
                    Text(
                      snapshotUser.data['name'],
                      style: TextStyle(
                        color: Colors.white,
                        fontFamily: 'Montserrat',
                      ),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    right: 15,
                  ),
                  child: Text(
                    'INR ${currencyFormat.format(double.parse(widget.amount.toString()))}',
                    style: TextStyle(
                      color: Colors.white,
                      fontFamily: 'Montserrat',
                    ),
                  ),
                ),
              ],
            ),
          );
        });
  }
}
