import React, {useState, useEffect, useReducer} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getHadith} from '../service/Api'
import CardNav from './CardNav';

function Hadiths () {
    const [hadiths, setHadiths] = useState(null);
    const [index, setIndex] = useState(null);
    const [message, setMessage] = useState(null);


    useEffect(() => {
        getHadith().then(res => {
        if(res.length > 0) {
            setHadiths(res);
            setIndex(0); 
        } else {
            setMessage("No data found!")
        }
        
        })
    }, [])
    

    return (
      <View>
          <CardNav hadiths={hadiths? hadiths : null}/>
          {/* <Text>{hadiths? hadiths[0]['hadith_bn'] : null}</Text> */}
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