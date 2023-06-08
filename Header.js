import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {View,Text, TouchableOpacity} from "react-native";
import { AuthContext } from "./AuthContext";
const Header=()=>{
    const {logout}=useContext(AuthContext);
    const navigation=useNavigation();
    return(
        <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"grey",paddingHorizontal:13,paddingVertical:10,marginTop:20,borderRadius:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate("AllProducts")}>
                <Text style={{color:"white"}}>
                All products
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{color:"white"}}>
                Add a product
            </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{logout()}}>
            <Text style={{color:"white"}}>
                SignOut
            </Text>
            </TouchableOpacity>
           
        </View>
    )
}
export default Header