import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View,Text, ScrollView, Image, TouchableOpacity} from "react-native";
const AllProducts=()=>{
    const [products,setProducts]=useState([]);
    const getAllProducts=async()=>{
        const res=await axios.get('https://fakestoreapi.com/products');
       setProducts(res.data)
    }
    useEffect(()=>{
        getAllProducts();

    },[])
    const deleteProduct=async(id)=>{
       const res= await axios.delete(`https://fakestoreapi.com/products/${id}`);
       if(res.status==200){
        alert('product has been deleted')
       }

    }
    const truncate = (str, len) => {
        if (str.length > len) {
           if (len <= 3) {
              return str.slice(0, len - 3) + "...";
           }
           else {
              return str.slice(0, len) + "...";
           };
        }
        else {
           return str;
        };
     };
    return(
        <View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
                <Text style={{fontWeight:"bold"}}>
                    Title
                </Text>
                <Text  style={{fontWeight:"bold"}}>
                    Price
                </Text>
                <Text  style={{fontWeight:"bold"}}>
                    Image
                </Text>
                
            </View>
            <Text style={{backgroundColor:"grey",height:1}}>
                    -
                </Text>
            {products.map((product)=>(
                <ScrollView horizontal style={{display:"flex",flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold"}}>
                        {product.id} -
                    </Text>
                
                    <Text style={{fontWeight:"bold"}}>
                        {product.title}

                    </Text>
                   
                    <Text>
                        {product.price}
                        </Text>
                        <Text>
                            {product.images}
                        </Text>
                        <Image source={{
                            uri:product.image
                        }} style={{height:50,width:50}}/>
                        <View style={{margin:2}}>
                            <TouchableOpacity style={{backgroundColor:"green",borderRadius:20,padding:2,margin:2}}>
                                <Text style={{color:"white",alignItems:"center",justifyContent:"center"}}>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:"green",borderRadius:20,padding:2,width:50}} onPress={()=>deleteProduct()}>
                                <Text style={{color:"red"}}>
                                    Delete
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
            ))}
            
            
        </View>
    )
}
export default AllProducts;