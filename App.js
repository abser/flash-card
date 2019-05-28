import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card  from './Card';
import Footer from './Footer';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Flash Card </Text>
        </View>
        <View style={styles.body}>
          <Card/>
        </View>
        <View style={styles.footer}>
          <Footer/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height:60,
    backgroundColor: 'lightblue',
    alignItems: 'flex-start',
    color: 'red',
    marginTop: 40
  },
  headerText: {
    fontSize:18,
    color: 'black',
    fontWeight: 'bold'
  },
  body: {
    flex:4
  },
  footer: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    marginBottom: 40
  }

});
