import React , { useState, useEffect }from 'react';
import { View, Text } from 'react-native'
import {SafeAreaView} from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { getDataFromStorage } from '../service/Api';
import Books from './Books';
import {config} from '../../config'

const SideMenu = (props) => {
    
    const [books, setBooks] = useState(null)
    const [showBooks, setShowBooks] = useState(true)

    const getBooks = () => {
        getDataFromStorage(config.BOOKS_FILE)
            .then(res => {
                console.log(res);
                return res;
            }).catch(err => {
                console.log(err);
            }) 
        }
    useEffect(() => {
        setBooks(getBooks());
    });


    return(
        <ScrollView>
            <SafeAreaView > 
                <Text
                    onPress={setShowBooks(!showBooks)}
                >Books</Text>  
                {books && showBooks ? 
                <Books books={books}/>
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