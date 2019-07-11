import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getDataFromStorage } from '../service/Api'
import CardNav from './CardNav';
import SideMenu from './SideMenu';

function Hadiths(props) {
    const bookid = props.navigation.getParam('bookid',1);
    const catid = props.navigation.getParam('catid',1);
    const [hadiths, setHadiths] = useState(null);
    const [key, setKey] = useState(`${bookid}-${catid}.json`);

    useEffect(() => {
        getDataFromStorage(key).then(defaultHadiths => {
            (defaultHadiths.data && defaultHadiths.data.length > 0) ? setHadiths(defaultHadiths.data) : null;
        }).catch(err => {
            console.log(err);
        })
    }, [key]);


    return (
        <View>
            <SideMenu/>
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