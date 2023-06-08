import React, { useContext } from "react";
import {View,Text, TouchableOpacity} from "react-native";
import AllProducts from "./AllProducts";
import { AuthContext } from "./AuthContext";
import Header from "./Header"
const HomeScreen=()=>{
    const {logout} =useContext(AuthContext);
    return(
    <View style={{padding:30}}>
       <Header/>
       <AllProducts/>
       
    </View>
    )
}
export default HomeScreen