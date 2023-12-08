import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Singup from './src/screens/auth/Signup';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Singup/>
      </View>
    </SafeAreaView>
  );
}

export default App;
