import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Chair } from './Chair';
import { Table } from './Table';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Chair/>
        <Table/>
      </View>
    </SafeAreaView>
  );
}

export default App;
