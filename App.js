import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/component/Card';
import Footer from './src/component/Footer';
import Header from './src/component/Header';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Card />
        </View>
        <View >
          <Footer />
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
