import React, { useState, useEffect } from 'react';
import { ImageBackground, Text } from 'react-native'
import { getDataFromStorage, removeDataFromStorage, relaodAllData } from '../service/Api';



const LoadingScreen = (props) => {
    const [msg, setMsg] = useState('Loading Hadiths ....');
    let books = false;
    let hadiths = false;
    const loadData = async () => {
        try {
            books = await getDataFromStorage('books.json');
            hadiths = await getDataFromStorage('1-1.json');
            
            if (!books || !hadiths) {
                const data = await relaodAllData();
                books = data.books;
                hadiths =data.hadiths;
            }

            if (!books && !hadiths) {
                setMsg('Something went wrong! Please check your connectivity!');
            } else {
                // setMsg('Loading complete 👏');
                books = JSON.parse(books);
                props.navigation.navigate('Home', { books });
                // props.navigation.navigate('Hadiths');
            }

        } catch (err) {
            console.log(err);
            setMsg('Something went wrong!');
        }

    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <ImageBackground
            source={require('../../assets/loading-screen.png')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>{msg}</Text>
        </ImageBackground>
    );
}


export default LoadingScreen;