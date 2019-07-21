import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { config } from '../../config';

const BooksNav = (props) => {
    const { books } = props;
    const bookList = [];

    // console.log(books)
    const openHadith = (bookId, catId) => {
        console.log("onPressAction:bookid", bookId)
        props.navigation.closeDrawer();
        props.navigation.navigate('Hadiths', { bookId, catId });
    }

    if (books.data.length > 0) {
        books.data.forEach(book => {
            const _book = [];
            _book.push(
                <Text
                    key={`book_${book.id}`}
                    style={styles.bookName}
                >
                    <FontAwesome name='book' size={18} color='yellow'/>
                     {book[`bookname_${config.DEFAULT_LANG}`]}
                </Text>
                );
            book.categories.forEach(category => {
                _book.push(
                    <Text
                        key={`cat${category.id}`}
                        style={styles.catName}
                        onPress={() => openHadith(book.id, category.id)}
                    >
                        <MaterialIcons name='chevron-right' size={18} color='white'/>
                            {category[`name_${config.DEFAULT_LANG}`]}
                    </Text>
                    );
            })
            bookList.push(_book);
        });
    }

    return (
        <View style={styles.bookList}>
            {bookList}
        </View>
    )
}

const styles = StyleSheet.create({
    bookList: {
        paddingLeft: 40
    },
    bookName: {
        fontSize: 20,
        color: 'yellow'
    },
    catName: {
        fontSize: 18,
        color: '#ddf542',
        paddingLeft: 10
    }
});
export default withNavigation(BooksNav);