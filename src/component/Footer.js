import React, {useState} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

function Footer () {
    const [index, setIndex] = useState();
    return (
       <View style={styles.footer}>
           <Button
                onPress={() => {}}
                title="<< Prev"
                color="#841584"
                style={styles.prevButton}
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => setIndex(index+1)}
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