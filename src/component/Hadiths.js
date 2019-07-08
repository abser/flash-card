import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getDataFromStorage } from '../service/Api'
import CardNav from './CardNav';

function Hadiths(props) {
    // console.log(props);
    const [hadiths, setHadiths] = useState(null);
    // const [message, setMessage] = useState(null);
    const [key, setKey] = useState('1-1.json');

    useEffect(() => {
        getDataFromStorage(key).then(defaultHadiths => {
            defaultHadiths.data.length > 0 ? setHadiths(defaultHadiths.data) : null;
        }).catch(err => {
            console.log(err);
        })
    }, [key]);


    return (
        <View>
            <CardNav hadiths={hadiths ? hadiths : null} />
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