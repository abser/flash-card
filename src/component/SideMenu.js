import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { getDataFromStorage } from '../service/Api';
import BooksNav from './BooksNav';
import { config } from '../../config'

const SideMenu = (props) => {
    const [books, setBooks] = useState(null)
    const [showBooks, setShowBooks] = useState(true)

    const loadBooks = async () => {
        try {
            const res = await getDataFromStorage(config.BOOKS_FILE);
            setBooks(res);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadBooks();
    },[]);

    // console.log(books)

    return (
        <ScrollView>
            <SafeAreaView >
                <Text
                    onPress={() => setShowBooks(!showBooks)}
                    >Books
                </Text>
                {books ?
                    <BooksNav books={books} />
                    : null
                }
            </SafeAreaView>
        </ScrollView>
    )
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//   });

export default SideMenu;