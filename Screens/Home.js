import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image , TextInput , SafeAreaView ,TouchableWithoutFeedback, TouchableHighlight , Button  , StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from "@react-navigation/drawer";
import { Ionicons as Icon } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

import Colors from "../Colors";


const categories = ['POPULAR' , 'ORGANIC' , 'INDOORS' , 'SYNTHETIC'];

export default function App() {
    const [categoryActive , setCategoryActive] = React.useState(0);
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.headingView}>
                <View style = {{flexDirection: 'row' , justifyContent: 'space-between' , alignItems: 'center'}}>
                    <Text style = {styles.headingText}>Welcome to</Text>    
                    <Entypo name="shopping-cart" size={24} color="black" />
                </View>
                <Text style = {styles.brandText}>Plantify Shop</Text>
            </View>
            <View style = {styles.SearchView}>
                <TextInput placeholder = "Search" style = {styles.Search}/>
                <TouchableHighlight style = {styles.FilterIcon}>
                    <Icon name="filter" size={24} color="white" />
                </TouchableHighlight>
            </View>
            <View style = {styles.CategoriesView}>
                {categories.map((item,  index) => {
                    return <TouchableWithoutFeedback onPress = {() =>   {
                        setCategoryActive(categoryActive => index)
                    }}><Text key = {index} style = {index == categoryActive ? styles.CategoryHeadingsActive :  styles.CategoryHeadings} >{item}</Text></TouchableWithoutFeedback>
                })}
            </View>
            <View style = {styles.PlantItemsView}>
                <View style = {styles.PlantItems}>
                    <Entypo style = {{alignSelf : 'flex-end' , borderRadius: 50 ,padding: 5 ,color: 'red' ,  backgroundColor: 'rgba(255 , 0 , 0 , 0.15)'}} name="heart" size={20} color="black" />
                    <Image style = {{maxHeight: '60%' , maxWidth : '60%'}} source = {require('../image1.png')}/>
                    <View style = {{justifyContent: 'flex-start' , width: '100%' , marginTop: 10}}>
                        <Text style = {{fontWeight : 'bold' , fontSize : 16}}>Succulent Plant</Text>
                        <View style = {{flexDirection: 'row', justifyContent : 'space-between' , alignItems: 'center' , marginTop: 5}}>
                            <Text style = {{fontWeight : 'bold' , marginTop: 3 , fontSize : 16}}>$39.99</Text>
                            <Entypo name="plus" size={20} style = {{backgroundColor : Colors.green , borderRadius: 5 , width : 20 }} color="white" />
                        </View>
                    </View>
                </View>
                <View style = {styles.PlantItems}>
                    <Entypo style = {{alignSelf : 'flex-end' , borderRadius: 50 ,padding: 5 ,}} name="heart" size={20} color="black" />
                    <Image style = {{maxHeight: '60%' , maxWidth : '60%'}} source = {require('../image2.png')}/>
                    <View style = {{justifyContent: 'flex-start' , width: '100%' , marginTop: 10}}>
                        <Text style = {{fontWeight : 'bold' , fontSize : 16}}>Bordanian Plant</Text>
                        <View style = {{flexDirection: 'row', justifyContent : 'space-between' , alignItems: 'center' , marginTop: 5}}>
                            <Text style = {{fontWeight : 'bold' , marginTop: 3 , fontSize : 16}}>$29.49</Text>
                            <Entypo name="plus" size={20} style = {{backgroundColor : Colors.green , borderRadius: 5 , width : 20 }} color="white" />
                        </View>
                    </View>
                </View>
                <View style = {styles.PlantItems}>
                    <Entypo style = {{alignSelf : 'flex-end' , borderRadius: 50 ,padding: 5}} name="heart" size={20} color="black" />
                    <Image style = {{maxHeight: '60%' , maxWidth : '60%'}} source = {require('../image3.png')}/>
                    <View style = {{justifyContent: 'flex-start' , width: '100%' , marginTop: 10}}>
                        <Text style = {{fontWeight : 'bold' , fontSize : 16}}>Pitcher Plant</Text>
                        <View style = {{flexDirection: 'row', justifyContent : 'space-between' , alignItems: 'center' , marginTop: 5}}>
                            <Text style = {{fontWeight : 'bold' , marginTop: 3 , fontSize : 16}}>$24.99</Text>
                            <Entypo name="plus" size={20} style = {{backgroundColor : Colors.green , borderRadius: 5 , width : 20 }} color="white" />
                        </View>
                    </View>
                </View>
                <View style = {styles.PlantItems}>
                    <Entypo style = {{alignSelf : 'flex-end' , borderRadius: 50 ,padding: 5 ,color: 'red' ,  backgroundColor: 'rgba(255 , 0 , 0 , 0.15)'}} name="heart" size={20} color="black" />
                    <Image style = {{maxHeight: '60%' , maxWidth : '60%'}} source = {require('../image4.png')}/>
                    <View style = {{justifyContent: 'flex-start' , width: '100%' , marginTop: 10}}>
                        <Text style = {{fontWeight : 'bold' , fontSize : 16}}>Eyucaliptus Plant</Text>
                        <View style = {{flexDirection: 'row', justifyContent : 'space-between' , alignItems: 'center' , marginTop: 5}}>
                            <Text style = {{fontWeight : 'bold' , marginTop: 3 , fontSize : 16}}>$35.99</Text>
                            <Entypo name="plus" size={20} style = {{backgroundColor : Colors.green , borderRadius: 5 , width : 20 }} color="white" />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    headingView : {
        marginTop: 40,
    },
    headingText : {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    brandText : {
        color: Colors.green,
        fontWeight: "bold",
        fontSize: 35,
        marginTop: -2,        
    },
    SearchView : {
        marginTop: 30,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
       
    },
    Search : {
        backgroundColor: "#eee",
        padding: 10,
        borderRadius: 10,
        width: '83%'
    },
    
    FilterIcon : {
        backgroundColor : Colors.green,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10
    },

    CategoriesView : {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    CategoryHeadings : {
        fontWeight: 'bold',
        paddingBottom: 5,
        color: "#808080",
    },

    CategoryHeadingsActive : {
        borderBottomColor : Colors.green,
        color: Colors.green,
        fontWeight: 'bold',
        borderBottomWidth: 3,
        paddingBottom: 5,
    },

    PlantItemsView : {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'

    },
    PlantItems : {
        backgroundColor: '#eee',
        width: "48%",
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 250,
        padding: 15,
        marginTop: 15,
    },
    
  });
  