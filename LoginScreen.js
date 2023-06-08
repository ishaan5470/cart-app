import React, { useContext } from "react";
import { useState } from "react";
import {View,Text, TextInput, TouchableOpacity} from "react-native";
import { AuthContext } from "./AuthContext";
import Background from "./Background";
import Btn from "./Btn"


const LoginScreen = (props) => {
    //to get the value from authContexr use useContext
    const {login}=useContext(AuthContext); 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return (
      <Background>
        <View style={{alignItems: 'center', width: 400}}>
          <Text
            style={{
              color: 'white',
              fontSize: 60,
              fontWeight: 'bold',
              marginVertical: 20,
            }}>
            Login
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 100,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, color: "green", fontWeight: 'bold'}}>
              Welcome Back
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Login to your account
            </Text>
            <TextInput
      {...props}
      style={{borderRadius: 10, color: "black", paddingHorizontal: 8, width: '40%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 8}}
      placeholderTextColor="grey" placeholder="Email"/>
       <TextInput
      {...props}
      style={{borderRadius: 10, color: "black", paddingHorizontal: 8, width: '40%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor="grey" placeholder="Password" secureTextEntry/>
            
            <View
              style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
              <Text style={{color: "green", fontWeight: 'bold', fontSize: 12,marginRight:20}}>
                Forgot Password ?
              </Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: "green",
                borderRadius: 100,
                alignItems: 'center',
                width: 100,
                paddingVertical: 5,
                marginVertical: 10,
                bottom:200
            }} onPress={()=>(login())}>
                <Text style={{color:"white",fontWeight:"bold"}}>
                     Login
                    </Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center",bottom:200 }}>
              <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: "green", fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Background>
    );
  };
  
  export default LoginScreen;