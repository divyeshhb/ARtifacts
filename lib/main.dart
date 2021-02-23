import './utils/authentication.dart';
import 'package:flutter/material.dart';

import 'screens/home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Future getUserInfo() async {
    await getUser();
    setState(() {});
    print(uid);
  }

  @override
  void initState() {
    getUserInfo();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ARtifacts',
      theme: ThemeData(
        primarySwatch: Colors.blueGrey,
        backgroundColor: Colors.white,
        cardColor: Colors.blueGrey[50],
        primaryTextTheme: TextTheme(
          button: TextStyle(
            color: Colors.blueGrey,
            decorationColor: Colors.blueGrey[300],
          ),
          subtitle2: TextStyle(
            color: Colors.blueGrey[900],
          ),
          subtitle1: TextStyle(
            color: Colors.black,
          ),
          headline1: TextStyle(color: Colors.blueGrey[800]),
        ),
        bottomAppBarColor: Colors.blueGrey[900],
        iconTheme: IconThemeData(color: Colors.blueGrey),
        //brightness: brightness,
      ),
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}
