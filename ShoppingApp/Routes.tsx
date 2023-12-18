import React, { useContext } from 'react';
import {
  Image,
} from 'react-native';
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer, RouteProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import { colors } from './src/utils/colors';
import { screens } from './src/screens/screens';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';
import { UserContext } from './App';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function tabIconProvider(route: RouteProp<ParamListBase, string>, isFocused: boolean): any {
  let iconNode = require('./src/assets/tabs/home.png')
  switch (route.name) {
    case screens.Home: 
      iconNode = isFocused ? require('./src/assets/tabs/home_active.png') : require('./src/assets/tabs/home.png');
      break;

    case screens.Favorites:
      iconNode = isFocused ? require('./src/assets/tabs/favorites_active.png') : require('./src/assets/tabs/favorites.png');
      break;
    
    case screens.ProfileStack:
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
      <Tab.Screen name={screens.ProfileStack} component={ProfileStack} />
    </Tab.Navigator>
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.Profile} component={Profile} options={{ headerShown: false}} />
      <Stack.Screen name={screens.Settings} component={Settings} options={{ headerShown: false}} />
      <Stack.Screen name={screens.CreateListing} component={CreateListing} options={{ headerShown: false }} />
      <Stack.Screen name={screens.MyListings} component={MyListings} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function Routes(): JSX.Element {
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

  const {user, setUser} = useContext(UserContext);
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        {user?.token ? (
          <>
            <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}} />
            <Stack.Screen name={screens.ProductDetails} component={ProductDetails} options={{ headerShown: false}} />
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
  );
}

export default Routes;
