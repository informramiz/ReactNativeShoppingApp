import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  dark: false,
  colors: {
    primary: colors.blue,
    background: colors.white,
    card: colors.white,
    text: colors.blue,
    border: colors.grey,
    notification: colors.blue
  }
}

function App(): JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  return (
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Signin' component={SignIn} />
          <Stack.Screen name='Signup' component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
