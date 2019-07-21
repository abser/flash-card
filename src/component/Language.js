import React, { useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native'
import Header from './Header';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { getDataFromStorage, setDataToStorage} from '../service/Api';
import { config } from '../../config';

const radio_props = [
    {label: 'Bangla', value: 'bn' },
    {label: 'English', value: 'en' }
  ];
const Language = () => {
    const [language, setLanguage] = useState();
    
    const currentLanguage = async() => {
        let _language = await getDataFromStorage(config.LANGUAGE_KEY);
        setLanguage(_language ? _language : config.DEFAULT_LANG)
    }

    useEffect(() => {
        currentLanguage();
    },[])

    const saveLanguage =  async(v) => {
        try{
            await setDataToStorage(config.LANGUAGE_KEY, v);
            setLanguage(v);
        } catch(err) {
            console.log(err);
        }
        
    }
    console.log(language);
    return (
        <SafeAreaView >
            <View>
              <Header/>
              <RadioForm
                radio_props={radio_props}
                initial={language}
                animation={true}
                onPress={(value) => { saveLanguage(value)}}
                />
           </View>
        </SafeAreaView>  
      );
}

export default Language;