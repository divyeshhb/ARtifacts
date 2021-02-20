import 'package:artif/widgets/tile_card.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class TilesMain extends StatefulWidget {
  TilesMain({Key key, @required this.screenSize, @required this.isFeatured})
      : super(key: key);

  final Size screenSize;
  final bool isFeatured;

  @override
  _TilesMainState createState() => _TilesMainState();
}

class _TilesMainState extends State<TilesMain> {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: widget.isFeatured
            ? FirebaseFirestore.instance
                .collection('Product')
                .where('featured', isEqualTo: true)
                .snapshots()
            : FirebaseFirestore.instance.collection('Product').snapshots(),
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
                  crossAxisCount: 3, childAspectRatio: 3 / 3.5),
              itemBuilder: (context, index) {
                return TileCard(snapshot, widget.screenSize, index);
              },
            ),
          );
        });
  }
}
