import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import { getDataFromStorage } from '../service/Api';
import BooksNav from './BooksNav';
import { config } from '../../config'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const SideMenu = (props) => {
    const [books, setBooks] = useState(null)
    const [showBooks, setShowBooks] = useState(true)

    const loadBooks = async () => {
        try {
            const res = await getDataFromStorage(config.BOOKS_FILE);
            setBooks(JSON.parse(res));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadBooks();
    }, []);

    // console.log(books)
    const navigateTo = (routeName, data={}) => {
        props.navigation.closeDrawer();
        props.navigation.navigate(routeName, data);
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.leftNavContainer}>
                <View style={styles.navItem}>
                    <MaterialIcons name='language' size={32} color='green' />
                    <Text style={styles.navItemText} onPress={() => navigateTo('Language')}>Change Language</Text>
                </View>
                <View style={styles.navItem}>
                    <MaterialCommunityIcons name='home-outline' size={32} color='orange' />
                    <Text style={styles.navItemText} onPress={() => navigateTo('Home', { books })}>Home</Text>
                </View>
                <View style={styles.navItem}>
                    <MaterialCommunityIcons name='folder-outline' size={32} color='teal' />
                    <Text style={styles.navItemText} onPress={() => setShowBooks(!showBooks)}>Books</Text>
                </View>

                {books && showBooks ?
                    <BooksNav books={books} />
                    : null
                }
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    leftNavContainer: {
        paddingLeft: 20,
        paddingTop: 80
    },
    navItem: {
        flexDirection: 'row',
        height: 50
    },
    navItemText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Helvetica Neue',
        paddingLeft: 16,
        margin: 8
    },
    navIcon: {
        paddingRight: 60
    }
});

export default SideMenu;