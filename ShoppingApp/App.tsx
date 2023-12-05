import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Splash from './src/screens/auth/Splash';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Splash/>
      </View>
    </SafeAreaView>
  );
}

export default App;
