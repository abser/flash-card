import React, {useReducer} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import {reducer} from '../reducer';

const initialState = {index: 0};

function Footer () {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
       <View style={styles.footer}>
           <Button
                onPress={() => dispatch({type: 'prev'})}
                title="<< Prev"
                color="#841584"
                style={styles.prevButton}
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => dispatch({type: 'next'})}
                title="Next >>"
                color="#841584"
                style={styles.nextButton}
                accessibilityLabel="Learn more about this purple button"
            />
       </View> 
    );
}


const styles = StyleSheet.create({
    footer: {
        // flex:1,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        justifyContent: 'space-between',
        marginBottom: 40
      },
    prevButton: {
        
    },
    nextButton: {
        
    }
})
export default Footer;