import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { getDataFromStorage } from '../service/Api'
import CardNav from './CardNav';
import Header from './Header';

function Hadiths(props) {
    const bookId = props.navigation.getParam('bookId');
    const catId = props.navigation.getParam('catId', 1);
    const [hadiths, setHadiths] = useState(null);
    const key = `${bookId}-${catId}.json`;

    useEffect(() => {
        getDataFromStorage(key).then(defaultHadiths => {
            (defaultHadiths.data && defaultHadiths.data.length > 0) ? setHadiths(defaultHadiths.data) : setHadiths(null);
        }).catch(err => {
            console.log(err);
        })
    }, [key]);

    return (
        <SafeAreaView>
            <Header />
            {hadiths !== null ?
                <CardNav hadiths={hadiths} />
                : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 2,
        fontSize: 16
    }
})
export default Hadiths;