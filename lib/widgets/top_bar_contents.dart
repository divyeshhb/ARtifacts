import 'package:artif/screens/product_catalog.dart';
import '../screens/home_page.dart';
import '../utils/authentication.dart';
import '../widgets/auth_dialog.dart';
import 'package:flutter/material.dart';

class TopBarContents extends StatefulWidget {
  final double opacity;

  TopBarContents(this.opacity);

  @override
  _TopBarContentsState createState() => _TopBarContentsState();
}

class _TopBarContentsState extends State<TopBarContents> {
  final List _isHovering = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];

  bool _isProcessing = false;

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;

    return PreferredSize(
      preferredSize: Size(screenSize.width, 1000),
      child: Container(
        color: Theme.of(context).bottomAppBarColor.withOpacity(widget.opacity),
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              MaterialButton(
                child: Text(
                  'ARtifacts',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                    fontFamily: 'Montserrat',
                    fontWeight: FontWeight.w400,
                    letterSpacing: 3,
                  ),
                ),
                onPressed: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(
                      builder: (context) => HomePage(),
                    ),
                  );
                },
              ),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    SizedBox(width: screenSize.width / 20),
                    InkWell(
                      onHover: (value) {
                        setState(() {
                          value
                              ? _isHovering[0] = true
                              : _isHovering[0] = false;
                        });
                      },
                      onTap: () {
                        Navigator.of(context).pushReplacement(
                          MaterialPageRoute(
                            builder: (context) => HomePage(),
                          ),
                        );
                      },
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            'Discover',
                            style: TextStyle(
                              fontFamily: 'Montserrat',
                              color: _isHovering[0]
                                  ? Colors.blue[200]
                                  : Colors.white,
                            ),
                          ),
                          // SizedBox(height: 5),
                        ],
                      ),
                    ),
                    SizedBox(width: screenSize.width / 20),
                    InkWell(
                      onHover: (value) {
                        setState(() {
                          value
                              ? _isHovering[1] = true
                              : _isHovering[1] = false;
                        });
                      },
                      onTap: () {
                        Navigator.of(context).pushReplacement(
                          MaterialPageRoute(
                            builder: (context) => ProductCatalog(),
                          ),
                        );
                      },
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            'Catalog',
                            style: TextStyle(
                              fontFamily: 'Montserrat',
                              color: _isHovering[1]
                                  ? Colors.blue[200]
                                  : Colors.white,
                            ),
                          ),
                          // SizedBox(height: 5),
                        ],
                      ),
                    ),
                    SizedBox(width: screenSize.width / 20),
                    InkWell(
                      onHover: (value) {
                        setState(() {
                          value
                              ? _isHovering[2] = true
                              : _isHovering[2] = false;
                        });
                      },
                      onTap: () {},
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            'Contact Us',
                            style: TextStyle(
                              fontFamily: 'Montserrat',
                              color: _isHovering[2]
                                  ? Colors.blue[200]
                                  : Colors.white,
                            ),
                          ),
                          //SizedBox(height: 5),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              // IconButton(
              //   icon: Icon(Theme.of(context).brightness == Brightness.dark
              //       ? Icons.brightness_7
              //       : Icons.brightness_3),
              //   color: Colors.white,
              //   onPressed: () {
              //     DynamicTheme.of(context).setBrightness(
              //         Theme.of(context).brightness == Brightness.dark
              //             ? Brightness.light
              //             : Brightness.dark);
              //   },
              // ),
              SizedBox(
                width: screenSize.width / 50,
              ),
              InkWell(
                onHover: (value) {
                  setState(() {
                    value ? _isHovering[3] = true : _isHovering[3] = false;
                  });
                },
                onTap: userEmail == null
                    ? () {
                        showDialog(
                          context: context,
                          builder: (context) => AuthDialog(),
                        );
                      }
                    : null,
                child: userEmail == null
                    ? Text(
                        'Sign in',
                        style: TextStyle(
                          color:
                              _isHovering[3] ? Colors.blue[200] : Colors.white,
                        ),
                      )
                    : Row(
                        children: [
                          CircleAvatar(
                            radius: 15,
                            backgroundImage: imageUrl != null
                                ? NetworkImage(imageUrl)
                                : null,
                            child: imageUrl == null
                                ? Icon(
                                    Icons.account_circle,
                                    size: 30,
                                  )
                                : Container(),
                          ),
                          SizedBox(width: 5),
                          Text(
                            name ?? userEmail,
                            style: TextStyle(
                              fontFamily: 'Montserrat',
                              color: _isHovering[3]
                                  ? Colors.white
                                  : Colors.white70,
                            ),
                          ),
                          SizedBox(width: 10),
                          MaterialButton(
                            color: Colors.blueGrey,
                            hoverColor: Colors.blueGrey[700],
                            highlightColor: Colors.blueGrey[800],
                            onPressed: _isProcessing
                                ? null
                                : () async {
                                    setState(() {
                                      _isProcessing = true;
                                    });
                                    await signOut().then((result) {
                                      print(result);
                                      Navigator.of(context).pushReplacement(
                                        MaterialPageRoute(
                                          fullscreenDialog: true,
                                          builder: (context) => HomePage(),
                                        ),
                                      );
                                    }).catchError((error) {
                                      print('Sign Out Error: $error');
                                    });
                                    setState(() {
                                      _isProcessing = false;
                                    });
                                  },
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Padding(
                              padding: EdgeInsets.only(
                                top: 8.0,
                                bottom: 8.0,
                              ),
                              child: _isProcessing
                                  ? CircularProgressIndicator()
                                  : Text(
                                      'Sign out',
                                      style: TextStyle(
                                        fontFamily: 'Montserrat',
                                        fontSize: 14,
                                        color: Colors.white,
                                      ),
                                    ),
                            ),
                          )
                        ],
                      ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
