import React, { useState, useEffect } from 'react';
import { ImageBackground, Text } from 'react-native'
import { getDataFromStorage, removeDataFromStorage, relaodAllData } from '../service/Api';



const LoadingScreen = (props) => {
    const [msg, setMsg] = useState('Loading Hadiths ....');
    let books = false;
    let hadiths = false;


    const loadData = async () => {
        try {
            // await removeDataFromStorage('books.json');
            // await removeDataFromStorage('categories.json');
            // await removeDataFromStorage('1-1.json');

            books = await getDataFromStorage('books.json');
            hadiths = await getDataFromStorage('1-1.json');

            if (!(books && hadiths)) {
                const { books, hadiths } = await relaodAllData();
            }

            if (!books || !hadiths) {
                setMsg('Something went wrong! Please check your connectivity!');
            } else {
                // setMsg('Loading complete 👏');
                props.navigation.navigate('Home', { books });
            }

        } catch (err) {
            console.log(err);
            setMsg('Something went wrong!');
        }

    }
    useEffect(() => {
        loadData()
    })

    return (
        <ImageBackground
            source={require('../../assets/loading-screen.png')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>{msg}</Text>
        </ImageBackground>
    );
}


export default LoadingScreen;