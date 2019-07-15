import React, {useReducer} from 'react';
import { ScrollView,ImageBackground, StyleSheet, View, Text, Button} from 'react-native';
import {reducer} from '../reducer';
import {config} from '../../config';

const initialState = {index: 0};

function CardNav (props) {
    const {hadiths} = props;
    // const [index, setIndex] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    function navigator () {    
        return (
           <View style={styles.cardNav}>
               <Button
                    onPress={() => dispatch({type: 'prev', totalCount: hadiths.length})}
                    title="<< Prev"
                    color="#841584"
                    style={styles.prevButton}
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => dispatch({type: 'next', totalCount: hadiths.length})}
                    title="Next >>"
                    color="#841584"
                    style={styles.nextButton}
                    accessibilityLabel="Learn more about this purple button"
                />
           </View> 
        );
    }
    return (
          <ImageBackground
            source={require('../../assets/loading-screen.png')}
            style={styles.cardBackGround}>
            <Text style={styles.cardText}>
             {hadiths? hadiths[state.index][`hadith_${config.DEFAULT_LANG}`] : 'More hadith coming soon!'}
           </Text>

           {navigator()}
        </ImageBackground>          
    );
}




const styles = StyleSheet.create({
    cardBackGround: {
        width: '100%', 
        height: '100%', 
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    cardText: {
        padding: 2,
        fontSize: 18 
      },
    cardNav: {
        // flex:1,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        alignItems:'stretch',
        justifyContent:'space-between',
        marginTop: 20,
      },
    prevButton: {
        
    },
    nextButton: {
        
    }
})
export default CardNav;