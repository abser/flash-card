import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { getDataFromStorage } from '../service/Api'
import CardNav from './CardNav';
import Header from './Header';

function Hadiths(props) {
    const bookId = props.navigation.getParam('bookId', 1);
    const catId = props.navigation.getParam('catId', 1);
    const [hadiths, setHadiths] = useState(null);
    const key = `${bookId}-${catId}.json`;

    const loadHadiths = () => {
        getDataFromStorage(key).then(_hadiths => {
            let defaultHadiths = JSON.parse(_hadiths);
            (defaultHadiths.data && defaultHadiths.data.length > 0) ? setHadiths(defaultHadiths.data) : setHadiths(null);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect( () => {
        loadHadiths()
    }, []);

    return (
        <SafeAreaView style={styles.hadithPageContainer}>
            <Header />
            {hadiths !== null ?
                <CardNav hadiths={hadiths} />
                : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    hadithPageContainer: { 
        flex:1,
        // flexDirection:'column',
        // justifyContent: 'space-between',
    },
    card: {
        padding: 2,
        fontSize: 16
    }
})
export default Hadiths;