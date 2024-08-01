import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
const logo = require("../assets/logo.png")
const facebook = require("../assets/facebook.png")
const linkedin = require("../assets/linkedin.png")
const tiktok = require("../assets/tiktok.png")


// const Register = ({ navigation}) => {
//     return (
//         <View style={styles.registerContainer}>
//             <Button onPress={() => navigation.goBack()} title="Go back home" />
//             <Text>HELLOOOO</Text>
//         </View>
//     )
// }

// export default Register

// const styles = StyleSheet.create({
//     registerContainer:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor:'white'
//     }
// })


export default function Register({navigation}) {
    const [click,setClick] = useState(false);
    const {username,setUsername}=  useState("");
    const {password,setPassword}=  useState("");
  return (
    <SafeAreaView style={styles.container}>
        
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
        <View style={styles.rememberView}>
            <View style={styles.switch}>
                <Switch  value={click} onValueChange={setClick} trackColor={{true : "green" , false : "gray"}} />
                <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <View>
                <Pressable onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>

        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={() => Alert.alert("Login Successfuly!","see you in my instagram if you have questions : must_ait6")}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
            <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </View>
        
        <View style={styles.mediaIcons}>
                <Image source={facebook} style={styles.icons}   />
                <Image source={tiktok} style={styles.icons}  />
                <Image source={linkedin} style={styles.icons}  />
        </View>

        <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>

        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 20,
  },
  image : {
    height : 120,
    width : 130
  },
  title : {
    fontSize : 20,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "#786C56"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "green",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "green",
    left:10
  },
  button : {
    backgroundColor : "green",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "green",
    fontSize : 13
  }
})
