import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hadiths from './src/component/Hadiths';
import Header from './src/component/Header';

function App() {
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Hadiths />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    flex: 4
  }
});

export default App;