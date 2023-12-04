import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Chair } from './Chair';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Chair/>
      </View>
    </SafeAreaView>
  );
}

export default App;
