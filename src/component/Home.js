import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Books from './Books';
import Header from './Header';

function Home(props) {
  const {navigation} = props;
  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.body}>
          <Header/>
          <Books {...props} books={navigation.getParam('books', {})}/>
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