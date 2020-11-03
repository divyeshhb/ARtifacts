import 'package:artif/screens/home_page.dart';
import 'package:flutter/material.dart';

class AllHeading extends StatefulWidget {
  const AllHeading({
    Key key,
    this.screenSize,
  }) : super(key: key);

  final Size screenSize;

  @override
  _AllHeadingState createState() => _AllHeadingState();
}

class _AllHeadingState extends State<AllHeading> {
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
            'All Products',
            style: TextStyle(
              fontSize: 40,
              fontFamily: 'Montserrat',
              fontWeight: FontWeight.bold,
            ),
          ),
          Row(
            children: [
              Text(
                'Check Out Every Product We Have To Offer | ',
                textAlign: TextAlign.end,
                style: TextStyle(
                  fontSize: 17,
                ),
              ),
              InkWell(
                child: Text(
                  'Featured Products',
                  textAlign: TextAlign.end,
                  style: TextStyle(
                    color: isHovering ? Colors.blue : Colors.black,
                    fontSize: 17,
                  ),
                ),
                onTap: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(
                      builder: (context) => HomePage(),
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
