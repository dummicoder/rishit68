import React,{Component} from "react";
import {View,Text,StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionScreen from "../screens/transactions";
import SearchScreen from "../screens/search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component(){
  render(){

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name= 'Transactions' component= {TransactionScreen}></Tab.Screen>
                <Tab.Screen name= 'Search' component= {SearchScreen}></Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    )
  }

}