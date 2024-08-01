import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Shares = ({ navigation}) => {
    return (
        <View style={styles.sharesContainer}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default Shares

const styles = StyleSheet.create({
    sharesContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    }
})
