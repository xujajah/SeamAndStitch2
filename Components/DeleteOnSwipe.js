import React from "react";
import {StyleSheet, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import color from "../config/color";
import {TouchableOpacity, TouchableWithoutFeedback} from "react-native";


function DeleteOnSwipe({ onPress }){
    return(
       <TouchableOpacity onPress={onPress}>
           <View style={styles.container}>
               <FontAwesome name="trash"
                            size={35}
                            color={color.primaryBorder}/>
           </View>
       </TouchableOpacity>
    );
}

export default DeleteOnSwipe;

const styles= StyleSheet.create({
container:{
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
}
})