import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native'
import Header from './Header';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { getDataFromStorage, setDataToStorage } from '../service/Api';
import { config } from '../../config';

const languages = [
    { label: 'Bangla', value: 'bn' },
    { label: 'English', value: 'en' }
];
const Language = () => {
    const [language, setLanguage] = useState();

    const currentLanguage = async () => {
        let _language = await getDataFromStorage(config.LANGUAGE_KEY);
        setLanguage(_language ? _language : config.DEFAULT_LANG)
    }

    useEffect(() => {
        currentLanguage();
    }, [])

    const saveLanguage = async (v) => {
        try {
            await setDataToStorage(config.LANGUAGE_KEY, v);
            setLanguage(v);
        } catch (err) {
            console.log(err);
        }

    }

    const radioButtons = () => {
        let buttons = []
        languages.forEach((obj, j) => {
            buttons.push(
            <RadioButton labelHorizontal={true} key={j}>
                <RadioButtonInput
                    obj={obj}
                    index={j}
                    isSelected={obj.value === language}
                    onPress={(value) => { saveLanguage(value) }}
                />
                <RadioButtonLabel
                    obj={obj}
                    index={j}
                    labelHorizontal={true}
                    onPress={(value) => { saveLanguage(value) }}
                />
            </RadioButton> 
            )

        })
        return(
            <RadioForm
                formHorizontal={true}
                animation={true}
            >
                {buttons} 
        </RadioForm>
        )
    }
    // console.log(language);
    return (
        <SafeAreaView >
            <View>
                <Header />
                {radioButtons()}
            </View>
        </SafeAreaView>
    );
}

export default Language;