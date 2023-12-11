import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  View
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer, RouteProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import { colors } from './src/utils/colors';
import { screens } from './src/screens/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

function tabIconProvider(route: RouteProp<ParamListBase, string>, isFocused: boolean): any {
  let iconNode = require('./src/assets/tabs/home.png')
  switch (route.name) {
    case screens.Home: 
      iconNode = isFocused ? require('./src/assets/tabs/home_active.png') : require('./src/assets/tabs/home.png');
      break;

    case screens.Favorites:
      iconNode = isFocused ? require('./src/assets/tabs/favorites_active.png') : require('./src/assets/tabs/favorites.png');
      break;
    
    case screens.Profile:
      iconNode = isFocused ? require('./src/assets/tabs/profile_active.png') : require('./src/assets/tabs/profile.png');
      break;
  }

  return iconNode;
}

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGrey },
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={tabIconProvider(route, focused)} style={{width: size, height: size, tintColor: color}}/>
        )
      })}
    >
      <Tab.Screen name={screens.Home} component={Home} />
      <Tab.Screen name={screens.Favorites} component={Favorites} />
      <Tab.Screen name={screens.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

const isSignedIn = true;

function App(): JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  return (
    <SafeAreaProvider>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator>
            {isSignedIn ? (
              <>
                <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}} />
              </>
            ) : (
              
              <>
                <Stack.Screen name={screens.Splash} component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name={screens.SignIn} component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name={screens.SignUp} component={SignUp} options={{ headerShown: false }} />
              </>
              
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

export default App;
