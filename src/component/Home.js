import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Hadiths from './Hadiths';
import Header from './Header';
Home.navigationOptions = {
    title: 'Home',
    headerLeft: null
  };
function Home() {
    return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.body}>
          <Hadiths />
       </View>
    </SafeAreaView>  
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

export default Home;