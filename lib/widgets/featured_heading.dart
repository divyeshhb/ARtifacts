import 'package:artif/screens/product_catalog.dart';
import 'package:flutter/material.dart';

class FeaturedHeading extends StatefulWidget {
  const FeaturedHeading({
    Key key,
    this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  _FeaturedHeadingState createState() => _FeaturedHeadingState();
}

class _FeaturedHeadingState extends State<FeaturedHeading> {
  bool isHovering = false;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        top: widget.screenSize.height * 0.06,
        left: widget.screenSize.width / 15,
        right: widget.screenSize.width / 15,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            'Featured',
            style: TextStyle(
              fontSize: 40,
              fontFamily: 'Montserrat',
              fontWeight: FontWeight.bold,
            ),
          ),
          Row(
            children: [
              Text(
                'Collection of Curated Artifacts | ',
                textAlign: TextAlign.end,
                style: TextStyle(
                  fontSize: 17,
                ),
              ),
              InkWell(
                child: Text(
                  'All Products',
                  textAlign: TextAlign.end,
                  style: TextStyle(
                    color: isHovering ? Colors.blue : Colors.black,
                    fontSize: 17,
                  ),
                ),
                onTap: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(
                      builder: (context) => ProductCatalog(),
                    ),
                  );
                },
                onHover: (value) {
                  setState(() {
                    value ? isHovering = true : isHovering = false;
                  });
                },
                highlightColor: Color.fromRGBO(1, 1, 1, 0),
                hoverColor: Color.fromRGBO(1, 1, 1, 0),
              )
            ],
          ),
        ],
      ),
    );
  }
}
