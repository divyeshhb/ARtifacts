import 'package:artif/widgets/top_bar_contents.dart';
import 'package:flutter/material.dart';

class ContactUs extends StatefulWidget {
  @override
  _ContactUsState createState() => _ContactUsState();
}

class _ContactUsState extends State<ContactUs> {
  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: Color(0xFFf0f0f0),
      extendBodyBehindAppBar: false,
      appBar: PreferredSize(
        preferredSize: Size(screenSize.width, 1000),
        child: TopBarContents(1),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Container(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Container(
                width: screenSize.width * 0.35,
                decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20)),
                child: Padding(
                  padding: const EdgeInsets.all(18.0),
                  child: Column(
                    children: [
                      SizedBox(
                        height: 50,
                      ),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          CircleAvatar(
                            radius: 100,
                            backgroundImage: AssetImage('assets/cover.jpg'),
                          ),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'ARtifacts',
                                style: TextStyle(
                                  color: Colors.black,
                                  fontSize: 20,
                                  fontFamily: 'Montserrat',
                                  fontWeight: FontWeight.w400,
                                  letterSpacing: 3,
                                ),
                              ),
                              Container(
                                width: screenSize.width * 0.1,
                                child: Text('Try before you Buy'),
                              ),
                            ],
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 50,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(10),
                        child: Container(
                          // decoration: BoxDecoration(
                          //   borderRadius: BorderRadius.circular(10),
                          // ),
                          width: screenSize.width * 0.30,
                          child: ListTile(
                            leading: Column(
                              children: [
                                SizedBox(
                                  height: 12.5,
                                ),
                                Icon(
                                  Icons.email,
                                  color: Colors.white,
                                ),
                              ],
                            ),
                            title: Text(
                              'Email',
                              style: TextStyle(
                                  fontFamily: 'Montserrat',
                                  fontSize: 15,
                                  color: Colors.white),
                            ),
                            subtitle: Text(
                              'admin@artifacts.com',
                              style: TextStyle(
                                  fontFamily: 'Montserrat',
                                  fontSize: 12,
                                  color: Colors.white),
                            ),
                            tileColor: Colors.black87,
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(10),
                        child: Container(
                          // decoration: BoxDecoration(
                          //   borderRadius: BorderRadius.circular(10),
                          // ),
                          width: screenSize.width * 0.30,
                          child: ListTile(
                            leading: Column(
                              children: [
                                SizedBox(
                                  height: 12.5,
                                ),
                                Icon(
                                  Icons.phone,
                                  color: Colors.white,
                                ),
                              ],
                            ),
                            title: Text(
                              'Phone',
                              style: TextStyle(
                                  fontFamily: 'Montserrat',
                                  fontSize: 15,
                                  color: Colors.white),
                            ),
                            subtitle: Text(
                              '+91-9123456789',
                              style: TextStyle(
                                  fontFamily: 'Montserrat',
                                  fontSize: 12,
                                  color: Colors.white),
                            ),
                            tileColor: Colors.black87,
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(10),
                        child: Container(
                          // decoration: BoxDecoration(
                          //   borderRadius: BorderRadius.circular(10),
                          // ),
                          width: screenSize.width * 0.30,
                          child: ListTile(
                            leading: Column(
                              children: [
                                SizedBox(
                                  height: 12.5,
                                ),
                                Icon(
                                  Icons.home,
                                  color: Colors.white,
                                ),
                              ],
                            ),
                            title: Text(
                              'Address',
                              style: TextStyle(
                                  fontFamily: 'Montserrat',
                                  fontSize: 15,
                                  color: Colors.white),
                            ),
                            subtitle: Text(
                              'MPSTME, Vile Parle West, Mumbai - 400056, India.',
                              style: TextStyle(
                                  fontFamily: 'Montserrat',
                                  fontSize: 12,
                                  color: Colors.white),
                            ),
                            tileColor: Colors.black87,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
