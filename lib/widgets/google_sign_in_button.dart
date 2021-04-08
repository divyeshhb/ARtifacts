import 'package:google_sign_in/google_sign_in.dart';
import '../screens/home_page.dart';
import '../utils/authentication.dart';
import 'package:flutter/material.dart';
import 'package:flutter_auth_buttons/flutter_auth_buttons.dart';

class GoogleButton extends StatefulWidget {
  @override
  _GoogleButtonState createState() => _GoogleButtonState();
}

class _GoogleButtonState extends State<GoogleButton> {
  bool _isProcessing = false;

  @override
  Widget build(BuildContext context) {
    return _isProcessing
        ? CircularProgressIndicator()
        : GoogleSignInButton(
            borderRadius: 10,
            //darkMode: true,
            onPressed: () async {
              setState(() {
                _isProcessing = true;
              });
              await signInWithGoogle().then((result) {
                print(result);
                if (result != null) {
                  Navigator.of(context).pop();
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(
                      fullscreenDialog: true,
                      builder: (context) => HomePage(),
                    ),
                  );
                }
              }).catchError((error) {
                print('Registration Error: $error');
              });
              setState(() {
                _isProcessing = false;
              });
            },
          );
  }
}
