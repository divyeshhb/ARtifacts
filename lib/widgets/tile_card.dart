import 'package:artif/screens/product_page.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

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
  bool _isHovering = false;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 15,
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
                builder: (context) =>
                    ProductPage(widget.snapshot.data.docs[widget.index].id),
              ),
            );
          },
          child: AnimatedContainer(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey,
                    offset: Offset(0.0, 1.0), //(x,y)
                    blurRadius: 6.0,
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
                          topLeft: Radius.circular(20),
                          topRight: Radius.circular(20)),
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
                        bottomLeft: Radius.circular(20),
                        bottomRight: Radius.circular(20)),
                    child: Container(
                      padding: EdgeInsets.only(
                        top: 7,
                        left: 9,
                        bottom: 7,
                      ),
                      color: Colors.black,
                      height: widget.screenSize.width / 20,
                      width: widget.screenSize.width / 4.4,
                      child: Row(
                        children: <Widget>[
                          Column(
                            children: <Widget>[
                              Text(
                                'Current Bid',
                                style: TextStyle(
                                    fontSize: 16,
                                    fontFamily: 'Montserrat',
                                    fontWeight: FontWeight.bold,
                                    color: Colors.white),
                              ),
                              // Text(),
                            ],
                          ),
                          Column(
                            children: <Widget>[],
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
