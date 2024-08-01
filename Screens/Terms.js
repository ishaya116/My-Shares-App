import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'

const Terms = ({navigation}) => {
    return (
        <View>
            <Text style={styles.Text1}>TERMS AND CONDITIONS OF UYJ-MULTITRADE LTD INVESTMENT APP</Text>
            <Text style={styles.Text2}>Overview</Text>
            <ScrollView style={styles.TextContainer}>
                <Text>
                This App is operated by UYJ MULTITRADE LTD. Throughout the site, the terms “we”, “us” and “our” refer to UYJ MULTITRADE LTD. UYJ MULTITRADE LTD offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

                By visiting our site and or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.

                Please read these Terms of Service carefully before accessing or using our App. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

                Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                </Text>
            </ScrollView>
        </View>
    )
}

export default Terms

const styles = StyleSheet.create({
    TextContainer:{
        paddingLeft:10,
        marginTop:10,
        marginBottom:145
    },
    Text1:{
        left:10,
        fontSize:20,
        fontWeight:'bold',
        color:'green'
    },
    Text2:{
        marginTop:10,
        paddingLeft:10,
        fontSize:15,
        fontWeight:'bold'
    }
})
