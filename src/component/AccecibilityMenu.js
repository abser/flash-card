import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, SafeAreaView, Share } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const AccecibilityMenu = (props) => {
    const hadith = props;
    const [showDotMenu, setShowDotMenu] = useState(false)
    
    const dotMenuClicked = () => {
        console.log("dotMenuClicked:", showDotMenu)
        setShowDotMenu(!showDotMenu);
    }

    const theDotMenu = () => {
        return (
            <Modal
                visible={showDotMenu}
                animationType="fade"
                transparent={true}
            >
                <SafeAreaView>
                    {dotMenuItems()}        
                </SafeAreaView>

            </Modal>
        )
    }

    const dotMenuItems = () => {
        return (
            <View style={styles.dotMenuItems}>
                <MaterialCommunityIcons.Button
                        name='dots-horizontal'
                        size={32}
                        color='white'
                        backgroundColor='rgba(151, 194, 72, 0.9)'
                        activeOpacity={0.2}
                        underlayColor={'rgba(255,255,255, 0.3)'}
                        onPress={() => dotMenuClicked()}
                />
                <MaterialCommunityIcons.Button
                    name='check-outline'
                    size={32}
                    color='green'
                    backgroundColor='rgba(255,255,255, 0)'
                    underlayColor={'rgba(255,255,255, 0.3)'}
                    activeOpacity={0.2}
                    onPress={() => selecctBackground()}
                />
                <MaterialIcons.Button
                    name='favorite'
                    size={32}
                    color='yellow'
                    backgroundColor='rgba(255,255,255, 0)'
                    underlayColor={'rgba(255,255,255, 0.3)'}
                    activeOpacity={0.2}
                    onPress={() => selecctBackground()}
                />
            </View>
        )
    }

    const selecctBackground = () => {
        console.log("selecctBackground")
    }

    const changeFontSize = () => {
        console.log("changeFontSize")
    }

    const shareIt = async() => {
        console.log("shareIt")
        try {
            const result = await Share.share({
                message: hadith,
                title:'share title',
                url:''
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                  console.log('result.activityType', result.activityType)
                } else {
                  // shared
                  console.log('shared!')
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
        }catch(err) {
            console.log(err);
        }
    }


    return (
        <View style={styles.menuBar}>
            {theDotMenu()}
            <MaterialCommunityIcons.Button
                name='dots-horizontal'
                size={32}
                color='white'
                backgroundColor='rgba(255,255,255, 0)'
                activeOpacity={0.2}
                underlayColor={'rgba(255,255,255, 0.3)'}
                onPress={() => dotMenuClicked()}
            />
            <MaterialCommunityIcons.Button
                name='image-filter-vintage'
                size={32}
                color='yellow'
                backgroundColor='rgba(255,255,255, 0)'
                underlayColor={'rgba(255,255,255, 0.3)'}
                activeOpacity={0.2}
                onPress={() => selecctBackground()}
            />
            <MaterialCommunityIcons.Button
                name='format-size'
                size={32}
                color='yellow'
                backgroundColor='rgba(255,255,255, 0)'
                underlayColor={'rgba(255,255,255, 0.3)'}
                activeOpacity={0.2}
                onPress={() => changeFontSize()}
            />
            <MaterialCommunityIcons.Button
                name='share-outline'
                size={32}
                color='blue'
                backgroundColor='rgba(255,255,255, 0)'
                underlayColor={'rgba(255,255,255, 0.3)'}
                activeOpacity={0.2}
                onPress={() => shareIt()}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    menuBar: {
        flexDirection: 'row',
        height:45,
        justifyContent: 'space-between'
    },
    dotMenuItems: {
        height: 45,
        marginTop: 40,
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'rgba(151, 194, 72, 0.9)'
    }

});

export default AccecibilityMenu;