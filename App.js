import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen'
import Shares from './Screens/Shares'
import About from './Screens/About'
import Contact from './Screens/Contact'
import register from './Screens/Register'
import Terms from './Screens/Terms'



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Shares" component={Shares} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contact Us" component={Contact} />
        <Drawer.Screen name="Register" component={register} />
        <Drawer.Screen name="Terms" component={Terms} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  <Terms />
}