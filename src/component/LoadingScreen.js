import React, { useState, useEffect } from 'react';
import { ImageBackground, Text } from 'react-native'
import { getDataFromStorage, loadDataFromS3AndPersist, removeDataFromStorage } from '../service/Api';



const LoadingScreen = (props) => {
    const [msg, setMsg] = useState('Loading Hadiths ....');
    let books = false;
    let categories = false;
    let hadiths = false;


    const loadData = async () => {
        try {
            // await removeDataFromStorage('books.json');
            // await removeDataFromStorage('categories.json');
            // await removeDataFromStorage('1-1.json');

            books = await getDataFromStorage('books.json');
            categories = await getDataFromStorage('categories.json');
            hadiths = await getDataFromStorage('1-1.json');

            if (!(books && categories) || !hadiths) {
                books = await loadDataFromS3AndPersist('books', 'books.json');
                categories = await loadDataFromS3AndPersist('categories', 'categories.json');
                hadiths = await loadDataFromS3AndPersist('hadiths', '1-1.json');
            }

            if (!books || !categories || !hadiths) {
                setMsg('Something went wrong! Please check your connectivity!');
            } else {
                // setMsg('Loading complete 👏');
                props.navigation.push('Home', { books });
            }
            
        } catch (err) {
            console.log(err);
            setMsg('Something went wrong!');
        }

    }
    useEffect(() => {
        loadData()
    }   )

    return (
        <ImageBackground
            source={require('../../assets/loading-screen.png')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>{msg}</Text>
        </ImageBackground>
    );
}


export default LoadingScreen;