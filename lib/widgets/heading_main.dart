import 'package:flutter/material.dart';

class HeadingMain extends StatefulWidget {
  const HeadingMain({
    Key key,
    this.screenSize,
    this.title1,
    this.title2,
    this.title3,
    this.onTap1,
  }) : super(key: key);

  final Size screenSize;
  final String title1;
  final String title2;
  final String title3;
  final Function onTap1;

  @override
  _HeadingMainState createState() => _HeadingMainState();
}

class _HeadingMainState extends State<HeadingMain> {
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
            widget.title1,
            style: TextStyle(
              fontSize: 40,
              fontFamily: 'Montserrat',
              fontWeight: FontWeight.bold,
            ),
          ),
          Row(
            children: [
              Text(
                widget.title2,
                textAlign: TextAlign.end,
                style: TextStyle(
                  fontSize: 17,
                ),
              ),
              InkWell(
                child: Text(
                  widget.title3,
                  textAlign: TextAlign.end,
                  style: TextStyle(
                    color: isHovering ? Colors.blue : Colors.black,
                    fontSize: 17,
                  ),
                ),
                onTap: widget.onTap1,
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
