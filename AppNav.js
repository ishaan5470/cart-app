import React from "react";
import {View,Text, ActivityIndicator} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import HomeScreen from "./HomeScreen";
import LoginScreen from './LoginScreen';
const AppNav=()=>{
    const Stack=createNativeStackNavigator();
    const {isLoading,userToken}=useContext(AuthContext);
    if (isLoading){
        <View>
            <ActivityIndicator size={'large'}/>
        </View>
    }
    return(
        
        <NavigationContainer>
        <Stack.Navigator>
            {userToken !==null ? 
             <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>:(
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>

             )}
          
         
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default AppNav