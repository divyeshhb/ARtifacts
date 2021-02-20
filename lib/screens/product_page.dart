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
    //getProductDetails(widget.productId);
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
            return Container(
              child: Text(productDoc['productName']),
            );
          }),
    );
  }
}
