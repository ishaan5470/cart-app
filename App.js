import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AllProducts from './AllProducts';

import LoginScreen from './LoginScreen';
import {AuthProvider} from "./AuthContext"

import AppNav from './AppNav';
export default function App() {
  const Stack=createNativeStackNavigator();

  
  return (
    <AuthProvider>
      <NavigationContainer>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="AllProduct" component={AllProducts}/>
      </NavigationContainer>
      
      
       <AppNav/>
    </AuthProvider>
   
  );
}

