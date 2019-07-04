import React, { useState, useEffect} from 'react';
import {View, Image, ImageBackground, Text} from 'react-native'
import {getHadithByBookCategory} from '../service/Api';
import Home from './Home';

const LoadingScreen = (props) => {
    const [msg, setMsg] = useState('Loading Hadiths ....');
    useEffect(() => {
       const success = getHadithByBookCategory(1,1, true); 
       if(success) 
        {
           setMsg('Loading complete 👏');
           props.navigation.push('Home');
        }
    })
    console.log(props);
    return (
        <ImageBackground 
            source = {require('../../assets/loading-screen.png')} 
            style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>{msg}</Text>
        </ImageBackground>
      );
}


export default LoadingScreen;