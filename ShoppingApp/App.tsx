import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Chair } from './Chair';
import { Table } from './Table';

function App(): JSX.Element {
  const [theme, setTheme] = useState('light');
  return (
    <SafeAreaView>
      <View>
        <Text style={{margin: 16, fontSize: 16}} onPress={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>Toggle Theme</Text>
        <Chair theme={theme}/>
        <Table/>
      </View>
    </SafeAreaView>
  );
}

export default App;
