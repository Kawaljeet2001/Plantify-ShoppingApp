import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView , TouchableHighlight , Button  , StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "./Screens/Home";
import Detail from "./Screens/Detail";

//text strings cannot be renered without a text component

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {Home} options={{ headerShown: false }}/>
        <Stack.Screen name = "Detail" component = {Detail} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

