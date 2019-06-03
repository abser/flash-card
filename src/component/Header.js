import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Header(){
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Flash Card </Text>
            </View>
        );
    }


const styles = StyleSheet.create({
    
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
    }
  });
export default Header;