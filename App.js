import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView , TouchableHighlight , Button  , StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "./Screens/Home";

//text strings cannot be renered without a text component


export default function App() {
  return (
    <Home/>    
  );
}

