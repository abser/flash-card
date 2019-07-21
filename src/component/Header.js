import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import {relaodAllData } from '../service/Api';

const Header = (props) => {
  const toggeleMenu = () => {
    console.log('Here');
    props.navigation.toggleDrawer()
  }

  const reloadData = () => {
    console.log("Reloading ...");
    relaodAllData();
  }
  return (
    <View style={styles.header}>
      <MaterialIcons.Button
        name='menu'
        size={32}
        color="green"
        style={styles.menuBar}
        onPress={() => toggeleMenu() }
      />
      
      <MaterialCommunityIcons
        name='reload'
        size={32}
        color="red"
        style={styles.reload}
        onPress={() => reloadData() }
      />
    </View>
  );
}


const styles = StyleSheet.create({

  header: {
    height:40,
    backgroundColor: 'lightblue',
    color: 'red',
    flexDirection: 'row',
    // alignItems:'stretch',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center'
  },
  menuBar: {
    // alignSelf: 'flex-start'
    backgroundColor: 'lightblue',
    // width: 32
  },
  reload: {
    
  }
});
export default withNavigation(Header);