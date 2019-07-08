import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';
const Books = (props) => {
    const { books } = props;
    const bookList = [];
    let bookUI = null;
    
    const onPressAction = () => {
        props.navigation.push('Hadiths');
    }

    if (books.data.length > 0) {
        // Create the book UI
        books.data.forEach(book => {
            bookList.push(<Button
                key={book.id}
                style={styles.bookBtn}
                title={book.bookname}
                onPress={onPressAction}
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
export default withNavigation(Books);