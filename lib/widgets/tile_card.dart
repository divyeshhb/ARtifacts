import 'package:artif/screens/product_page.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:intl/intl.dart';
import 'time_formatter.dart';

class TileCard extends StatefulWidget {
  final AsyncSnapshot<QuerySnapshot> snapshot;
  final Size screenSize;
  final int index;
  TileCard([
    this.snapshot,
    this.screenSize,
    this.index,
  ]);

  @override
  _TileCardState createState() => _TileCardState();
}

class _TileCardState extends State<TileCard> {
  final nonHoverTransform = Matrix4.identity()..translate(0, 0, 0);
  final hoverTransform = Matrix4.identity()..translate(0, -10, 0);
  final hoverTrans = Matrix4.identity()..scale(1.02);
  final currencyFormat = NumberFormat("#,##0.00", "en_US");
  bool _isHovering = false;

  var differenceS;
  var differenceE;
  String status;

  getTimeStatus() {
    Timestamp s = widget.snapshot.data.docs[widget.index]['startDate'];
    Timestamp e = widget.snapshot.data.docs[widget.index]['endDate'];
    differenceS = s.toDate().difference(DateTime.now()).inSeconds;
    differenceE = e.toDate().difference(DateTime.now()).inSeconds;
    if (s.toDate().isAfter(DateTime.now())) {
      status = 'will_start';
    } else if (s.toDate().isBefore(DateTime.now()) &&
        e.toDate().isAfter(DateTime.now())) {
      status = 'in_progress';
    } else if (e.toDate().isBefore(DateTime.now())) {
      status = 'ended';
    }
  }

  @override
  void initState() {
    getTimeStatus();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 20,
        ),
        InkWell(
          onHover: (value) {
            setState(() {
              value ? _isHovering = true : _isHovering = false;
            });
          },
          hoverColor: Color.fromRGBO(256, 256, 256, 0),
          onTap: () {
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(
                builder: (context) => ProductPage(
                    widget.snapshot.data.docs[widget.index].id,
                    status,
                    widget.snapshot,
                    widget.index),
              ),
            );
          },
          child: AnimatedContainer(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey,
                    //offset: Offset(0.0, 1.0), //(x,y)
                    blurRadius: _isHovering ? 10.0 : 5.0,
                  ),
                ],
              ),
              duration: const Duration(milliseconds: 100),
              transform: _isHovering ? hoverTransform : nonHoverTransform,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  SizedBox(
                    height: widget.screenSize.width / 6,
                    width: widget.screenSize.width / 4.4,
                    child: ClipRRect(
                      borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(10),
                          topRight: Radius.circular(10)),
                      child: Image.network(
                        widget.snapshot.data.docs[widget.index]
                            ['productImageUrl'],
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                  Container(
                    height: widget.screenSize.width / 12,
                    padding: EdgeInsets.only(
                      top: 14,
                      left: 18,
                      right: 18,
                      bottom: 14,
                    ),
                    width: widget.screenSize.width / 4.4,
                    color: Colors.white,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          widget.snapshot.data.docs[widget.index]
                              ['productName'],
                          style: TextStyle(
                            fontSize: 22,
                            fontFamily: 'Montserrat',
                            fontWeight: FontWeight.bold,
                            color: Theme.of(context)
                                .primaryTextTheme
                                .subtitle1
                                .color,
                          ),
                        ),
                        SizedBox(
                          height: 2,
                        ),
                        Text(
                          widget.snapshot.data.docs[widget.index]['shortDesc'],
                          style: TextStyle(
                            fontSize: 13,
                            fontFamily: 'Montserrat',
                            // color:,
                          ),
                        ),
                      ],
                    ),
                  ),
                  ClipRRect(
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(10),
                        bottomRight: Radius.circular(10)),
                    child: Container(
                      padding: EdgeInsets.only(
                        top: 14,
                        left: 18,
                        right: 18,
                        bottom: 14,
                      ),
                      color: Theme.of(context).bottomAppBarColor,
                      height: widget.screenSize.width / 20,
                      width: widget.screenSize.width / 4.4,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Text(
                                status == "will_start"
                                    ? 'Base Price'
                                    : status == 'in_progress'
                                        ? 'Current Bid'
                                        : 'Sold for',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontFamily: 'Montserrat',
                                  // fontWeight: FontWeight.bold,
                                  color: Colors.white60,
                                ),
                              ),
                              Text(
                                status == "will_start"
                                    ? 'INR ${currencyFormat.format(double.parse((widget.snapshot.data.docs[widget.index]["basePrice"])))}'
                                    : status == 'in_progress'
                                        ? 'INR ${currencyFormat.format(double.parse((widget.snapshot.data.docs[widget.index]["currentBid"])))}'
                                        //: 'INR ${currencyFormat.format(double.parse((widget.snapshot.data.docs[widget.index]["finalPrice"])))}',
                                        : 'INR 20,000.00',
                                style: TextStyle(
                                  fontSize: 18,
                                  fontFamily: 'Montserrat',
                                  // fontWeight: FontWeight.bold,
                                  color: Colors.white,
                                ),
                              ),
                            ],
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Text(
                                status == "will_start"
                                    ? 'Starts in'
                                    : status == 'in_progress'
                                        ? 'Ends in'
                                        : 'Ended',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontFamily: 'Montserrat',
                                  // fontWeight: FontWeight.bold,
                                  color: Colors.white60,
                                ),
                              ),
                              status == 'ended'
                                  ? Text(
                                      '-',
                                      style: TextStyle(
                                        fontSize: 18,
                                        fontFamily: 'Montserrat',
                                        // fontWeight: FontWeight.bold,
                                        color: Colors.white,
                                      ),
                                    )
                                  : CountDownTimer(
                                      secondsRemaining: status == 'will_start'
                                          ? differenceS
                                          : status == 'in_progress'
                                              ? differenceE
                                              : 0,
                                      whenTimeExpires: () {},
                                      countDownTimerStyle: TextStyle(
                                        fontSize: 18,
                                        fontFamily: 'Montserrat',
                                        // fontWeight: FontWeight.bold,
                                        color: Colors.white,
                                      ),
                                    ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  )
                ],
              )),
        ),
      ],
    );
  }
}
