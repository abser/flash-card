import React, {useState, useEffect, useReducer} from 'react';
import { ImageBackground, StyleSheet, View,ScrollView, Text, Button, SafeAreaView} from 'react-native';
import {reducer} from '../reducer';
import {config} from '../../config';
import  AccecibilityMenu from './AccecibilityMenu';
import { getDataFromStorage } from '../service/Api'

const initialState = {index: 0};

function CardNav (props) {
    const {hadiths} = props;
    const [language, setLanguage] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);


    const currentLanguage = async() => {
        let _language = await getDataFromStorage(config.LANGUAGE_KEY);
        setLanguage(_language ? _language : config.DEFAULT_LANG)
    }

    useEffect(() => {
        currentLanguage()
    },[])
    const cardNavigator = () => {    
           return(
           <View style={styles.cardNav}>
               <Button
                    onPress={() => dispatch({type: 'prev', totalCount: hadiths.length})}
                    title="<< Prev"
                    color="#841584"
                    style={styles.prevButton}
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => dispatch({type: 'next', totalCount: hadiths.length})}
                    title="Next >>"
                    color="#841584"
                    style={styles.nextButton}
                    accessibilityLabel="Learn more about this purple button"
                />
           </View> );
    }

    return (
          <ImageBackground
            source={require('../../assets/backgrounds/nature-2.png')}
            style={styles.cardBackGround}>
                <AccecibilityMenu/>
                <ScrollView 
                centerContent={true}
                >
                    <Text style={styles.cardText}>
                    {hadiths? hadiths[state.index][`hadith_ar`] : 'More hadith coming soon!'}
                    </Text>
                    <Text style={styles.cardText}>
                    {hadiths? hadiths[state.index][`hadith_${language}`] : 'More hadith coming soon!'}
                    </Text>
                </ScrollView>
                {cardNavigator()}
           
        </ImageBackground>        
    );
}




const styles = StyleSheet.create({
    cardBackGround: {
        width: '100%', 
        height: '100%', 
    },
    cardScrollView: {
        justifyContent:'center'
    },
    cardText: {
        backgroundColor:'#000',
        opacity:0.8,
        paddingLeft: 10,
        paddingRight: 5,
        paddingTop:20,
        paddingBottom:20,
        justifyContent:'center',
        fontSize: 18,
        color:'white'
      },
    cardNav: {
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        justifyContent:'space-between',
        marginBottom:40
      },
    prevButton: {
        
    },
    nextButton: {
        
    }
})
export default CardNav;