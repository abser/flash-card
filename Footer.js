import React, {Component} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

class Footer extends Component {
    
    prevButtonPressed() {

    }

    nextButtonPressed() {
        
    }
    render() {
    return (
       <View>
           <Button
                onPress={this.prevButtonPressed.bind(this)}
                title="<< Prev"
                color="#841584"
                style={styles.prevButton}
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={this.nextButtonPressed.bind(this)}
                title="Next >>"
                color="#841584"
                style={styles.nexButton}
                accessibilityLabel="Learn more about this purple button"
            />
       </View> 
    );
}
}


const styles = StyleSheet.create({
    prevButton: {
        
    }
})
export default Footer;