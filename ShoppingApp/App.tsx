import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
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
        <Text style={styles.themeHeader} onPress={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>Toggle Theme</Text>
        <Chair theme={theme}/>
        <Table/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    themeHeader: {margin: 16, fontSize: 16, backgroundColor: 'yellow'}
  }
);

export default App;
