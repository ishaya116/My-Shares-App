import React from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import ImageSlider from '../Screens/ImageSlider'
import Terms from './Terms'
import Register from './Register'



const HomeScreen = ({ navigation }) => {
    return (
        <View style = {styles.HomeScreenContainer}>
         <View style={styles.TextContainer}>
             <Text style={{top:30,fontSize:20,fontWeight:'bold',left:3}}>Unleash the power of your investments.</Text>
             <Text style={{top:60,left:4}}>Be an Investor and live your dream life , follow the links bellow to read more about the project.</Text>
        </View> 
        <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress = {() => navigation.navigate(Register)}>
               <Text style={{paddingLeft:10,backgroundColor:'blue',height:50,borderWidth:2,}}>Start Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate(Terms)}>
               <Text style={{paddingLeft:20,borderColor:'green',height:50,borderWidth:2 }}>Terms</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.app}>
         <ImageSlider />
       </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    HomeScreenContainer:{
        flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'white',
        paddingLeft:20
    },
    ButtonContainer:{
        flexDirection:'row',
        paddingBottom:200,
        gap:20
    },
    TextContainer:{
        paddingBottom:200
    },
    app: {
        marginHorizontal: "auto",
        maxWidth: 500,
        bottom:180,
        width:300
      }
})


  