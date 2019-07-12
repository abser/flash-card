import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';

const BooksNav = (props) => {
    const { books } = props;
    const bookList = [];
   
    const openHadith = (bookid) => {
        console.log("onPressAction:bookid", bookid)
        props.navigation.closeDrawer();
        props.navigation.navigate('Hadiths', {bookid});
    }

    if (books.data.length > 0) {
        // Create the book UI
        books.data.forEach(book => {
            bookList.push(<Button
                key={book.id}
                style={styles.bookBtn}
                title={book.bookname}
                onPress={() => openHadith(book.id)}
            />);
        });
    }

    return (
        <View>
            {bookList}
        </View>
    )
}

const styles = StyleSheet.create({
    bookBtn: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'space-between'
    }
});
export default withNavigation(BooksNav);