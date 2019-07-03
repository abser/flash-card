import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Hadiths from './src/component/Hadiths';
import Header from './src/component/Header';
import LoadingScreen from './src/component/LoadingScreen'

function App() {
  return (
    <SafeAreaView  style={styles.container}>
      {/* <View style={styles.container}>
         <Header />
        <View style={styles.body}>
          <Hadiths />
       </View>
       </View> */}
      <LoadingScreen/>
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

export default App;