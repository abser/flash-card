import React from 'react';
import { StyleSheet} from 'react-native';
import LoadingScreen from './src/component/LoadingScreen';
import Home from './src/component/Home';
import Hadiths from './src/component/Hadiths';
import SideMenu from './src/component/SideMenu'
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createDrawerNavigator({
  LoadingScreen: {screen: LoadingScreen},
  Home: {screen: Home},
  Hadiths: {screen: Hadiths}
},
{
  contentComponent:SideMenu,
  drawerBackgroundColor: '#82D1F3'
});

const App = createAppContainer(MainNavigator);

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