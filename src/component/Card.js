import React, {useState, useEffect, useReducer} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {getHadith} from '../service/Api'
import {config} from '../../config';


function Card () {
    const [hadiths, setHadiths] = useState(null);
    const [hadith, setHadith] = useState(null);
    const [index, setIndex] = useState(null);
    const [message, setMessage] = useState(null);


    useEffect(() => {
        getHadith().then(res => {
        if(res.length > 0) {
            // setHadiths(res);
            // setHadith(res[0][`hadith_${config.DEFAULT_LANG}`]);
            // setIndex(0); 
        } else {
            setMessage("No data found!")
        }
        
        })
    }, [])
    

    return (
       <ScrollView>
           <Text style={styles.card}>
               {hadith}
               {message}
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