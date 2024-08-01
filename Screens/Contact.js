import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Contact = ({ navigation}) => {
    return (
        <View style={styles.contactContainer}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    contactContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    }
})
