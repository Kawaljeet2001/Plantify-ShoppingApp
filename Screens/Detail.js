import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image , TextInput , SafeAreaView ,TouchableWithoutFeedback, TouchableHighlight , Button  , StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Colors from "../Colors";
import { NavigationContainer } from '@react-navigation/native';
import Plants from "../Plants";

export default function Detail({ navigation , route }){
    const [quantity , setquantity] = React.useState(1);
    const {plantId , image} = route.params;
    const trys = Plants[plantId].image
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {{flexDirection: 'row' , justifyContent: 'space-between' , alignItems: 'center', marginTop: 40, paddingHorizontal: 10}}>
                <TouchableWithoutFeedback onPress = {() => navigation.navigate("Home")}>
                    <Entypo name="arrow-long-left" size={28} color="black" />
                </TouchableWithoutFeedback>
                <Entypo name="shopping-cart" size={28} color="black" />
            </View>
            <Image style = {{maxHeight: '40%' , maxWidth: '40%' , alignSelf: 'center', marginTop: 30}} source = {trys}/>
            <View style = {{backgroundColor: 'rgba(0 , 0 , 0 , 0.06)', width: '100%', borderTopEndRadius: 25, borderTopLeftRadius: 25, height: '100%'}}>
                <View style = {{flexDirection: 'row' , justifyContent: 'space-between', paddingLeft: 10 , paddingTop: 25}}>
                    <Text style = {{marginTop: 10, marginLeft: 10 , fontSize: 24 , fontWeight: "bold"}}>{Plants[plantId].name}</Text>
                    <View style = {{backgroundColor: Colors.green, alignItems: 'center' , justifyContent: 'flex-start', padding: 15,paddingRight: 35 , borderTopLeftRadius: 30 , borderBottomLeftRadius: 30}}>
                        <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 16}}>${Plants[plantId].price}</Text>
                    </View>
                </View>
                <Text style = {{marginTop: 10, marginLeft: 20, marginBottom: 10 , fontWeight: 'bold', fontSize: 20}}>About</Text>
                <Text style = {{marginLeft: 20, marginRight: 30, fontSize: 16, color: '#707070', textAlign: 'justify', lineHeight: 23}}>
                    {Plants[plantId].about}
                </Text>
                <View style = {{flexDirection: 'row', marginTop: 25,marginHorizontal: 20 , alignItems: 'center'}}>
                    <TouchableWithoutFeedback onPress = {() => {
                        if(quantity > 0)
                        setquantity(quantity => quantity - 1 )
                        }} >
                        <Text style = {styles.togglebutton}>-</Text>
                    </TouchableWithoutFeedback>
                    <Text style = {{marginRight: 10, fontWeight: 'bold', fontSize: 18}}>{quantity}</Text>
                    <TouchableWithoutFeedback onPress = {() => setquantity(quantity => quantity + 1)} >
                        <Text style = {styles.togglebutton}>+</Text>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight style = {{backgroundColor: Colors.green, paddingVertical: 15, paddingHorizontal: 50, borderRadius: 30}}>
                        <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Buy</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    togglebutton : {
        paddingHorizontal: 35,
        paddingVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#aaa',
        borderRadius: 10
    }
});