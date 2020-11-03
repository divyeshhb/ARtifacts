import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class AllTiles extends StatefulWidget {
  AllTiles({
    Key key,
    @required this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  _AllTilesState createState() => _AllTilesState();
}

class _AllTilesState extends State<AllTiles> {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: FirebaseFirestore.instance.collection('Product').snapshots(),
        builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
          if (!snapshot.hasData) {
            return Center(
              child: CircularProgressIndicator(),
            );
          }
          return Padding(
            padding: EdgeInsets.only(
              top: 0,
              left: widget.screenSize.width / 22,
              right: widget.screenSize.width / 22,
            ),
            child: GridView.builder(
              physics: NeverScrollableScrollPhysics(),
              shrinkWrap: true,
              itemCount: snapshot.data.docs.length,
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3, childAspectRatio: 3 / 2.5),
              itemBuilder: (context, index) {
                return Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    SizedBox(
                      height: widget.screenSize.width / 6,
                      width: widget.screenSize.width / 3.8,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(5.0),
                        child: Image.network(
                          snapshot.data.docs[index]['productImageUrl'],
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.only(
                        top: widget.screenSize.height / 70,
                      ),
                      child: Text(
                        snapshot.data.docs[index]['productName'],
                        style: TextStyle(
                          fontSize: 16,
                          fontFamily: 'Montserrat',
                          fontWeight: FontWeight.w500,
                          color: Theme.of(context)
                              .primaryTextTheme
                              .subtitle1
                              .color,
                        ),
                      ),
                    ),
                  ],
                );
              },
            ),
          );
        });
    // child: Row(
    //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
    //   children: [
    //     ...Iterable<int>.generate(assets.length).map(
    //       (int pageIndex) => Column(
    //         children: [
    //           SizedBox(
    //             height: screenSize.width / 6,
    //             width: screenSize.width / 3.8,
    //             child: ClipRRect(
    //               borderRadius: BorderRadius.circular(5.0),
    //               child: Image.asset(
    //                 assets[pageIndex],
    //                 fit: BoxFit.cover,
    //               ),
    //             ),
    //           ),
    //           Padding(
    //             padding: EdgeInsets.only(
    //               top: screenSize.height / 70,
    //             ),
    //             child: Text(
    //               title[pageIndex],
    //               style: TextStyle(
    //                 fontSize: 16,
    //                 fontFamily: 'Montserrat',
    //                 fontWeight: FontWeight.w500,
    //                 color: Theme.of(context).primaryTextTheme.subtitle1.color,
    //               ),
    //             ),
    //           ),
    //         ],
    //       ),
    //     ),
    //   ],
    // ),
  }
}
