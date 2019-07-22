import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { getDataFromStorage } from '../service/Api'
import CardNav from './CardNav';
import Header from './Header';
import {config} from '../../config';

function Hadiths(props) {
    const bookId = props.navigation.getParam('bookId', 1);
    const catId = props.navigation.getParam('catId', 1);
    const key = `${bookId}-${catId}.json`;
    console.log(bookId,catId)

    const [hadiths, setHadiths] = useState(null);
    const [language, setLanguage] = useState('bn');

    const loadHadiths = () => {
        getDataFromStorage(key).then(_hadiths => {
            let defaultHadiths = JSON.parse(_hadiths);
            (defaultHadiths.data && defaultHadiths.data.length > 0) ? setHadiths(defaultHadiths.data) : setHadiths(null);
        }).catch(err => {
            console.log(err);
        })
    }

    const currentLanguage = async() => {
        try {
            let _language = await getDataFromStorage(config.LANGUAGE_KEY);
            console.log(_language)
            setLanguage(_language ? _language : config.DEFAULT_LANG)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        currentLanguage()
    })

    useEffect( () => {
        loadHadiths()
    }, [bookId, catId]);

    return (
        <SafeAreaView style={styles.hadithPageContainer}>
            <Header />
            {hadiths !== null ?
                <CardNav hadiths={hadiths} language={language} />
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