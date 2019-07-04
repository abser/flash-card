import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoadingScreen from './src/component/LoadingScreen';
import Home from './src/component/Home';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  LoadingScreen: {screen: LoadingScreen},
  Home: {screen: Home}
});
const App = createAppContainer(MainNavigator);

// function App() {
//   return (
//     <SafeAreaView  style={styles.container}>
//       <LoadingScreen/>
//     </SafeAreaView>  
//   );
// }

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