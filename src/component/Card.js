import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {getHadith} from '../service/Api'
import {config} from '../../config';


function Card (props) {
    const {hadith} = props;
    return (
       <ScrollView>
           <Text style={styles.card}>
             Hadith:  {hadith}
           </Text>
       </ScrollView> 
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 2,
        fontSize: 16
      }
})
export default Card;