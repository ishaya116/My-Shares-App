import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const About = ( {navigation}) => {
    return (
        <View style={styles.AboutContainer}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    AboutContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    }
     
})
