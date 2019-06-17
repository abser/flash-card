import React, {useState, useEffect, useReducer} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getHadith} from '../service/Api'
import Card from './Card';


function Hadiths () {
    const [hadiths, setHadiths] = useState(null);
    const [index, setIndex] = useState(null);
    const [message, setMessage] = useState(null);


    useEffect(() => {
        getHadith().then(res => {
        if(res.length > 0) {
            setHadiths(res);
            setIndex(0); 
            console.log(res)
        } else {
            setMessage("No data found!")
        }
        
        })
    }, [])
    

    return (
      <View>
          <Card />
          <Text>{message}</Text>
      </View> 
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 2,
        fontSize: 16
      }
})
export default Hadiths;