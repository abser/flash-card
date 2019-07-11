import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Books from './Books';

Home.navigationOptions = {
    title: 'Home',
    headerLeft: null
  };

function Home(props) {
  const {navigation} = props;
  navigation.toggleDrawer();
  return (
    <SafeAreaView  style={styles.container}>
        <View style={styles.body}>
          <Books books={navigation.getParam('books', {})}/>
          <Text> My Saved</Text>
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