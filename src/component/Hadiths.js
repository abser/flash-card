import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getDataFromStorage } from '../service/Api'
import CardNav from './CardNav';

function Hadiths(props) {
    const bookid = props.navigation.getParam('bookid',1);
    const catid = props.navigation.getParam('catid',1);
    const [hadiths, setHadiths] = useState(null);
    const [key, setKey] = useState(`${bookid}-${catid}.json`);

    useEffect(() => {
        getDataFromStorage(key).then(defaultHadiths => {
            console.log(defaultHadiths.data.length)
            defaultHadiths.data.length > 0 ? setHadiths(defaultHadiths.data) : null;
        }).catch(err => {
            console.log(err);
        })
    }, [key]);


    return (
        <View>
            { hadiths ?
            <CardNav hadiths={hadiths } />
            : null }
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