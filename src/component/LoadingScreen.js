import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native'

const LoadingScreen = () => {
    return (
        <ImageBackground 
            source = {require('../../assets/loading-screen.png')} 
            style={{width: '100%', height: '100%'}}>
            <Text>Inside</Text>
        </ImageBackground>
        // <View>
        //     <Image
        //         source = {require('../../assets/loading-screen.png')}

        //     />
        // </View>
      );
}
export default LoadingScreen;