import React from "react";
import {TextInput, View, StyleSheet} from "react-native";
import {FontAwesome} from '@expo/vector-icons';

import color from "../config/color";


function AppTextInput({icon, ...otherProps}) {
    return (

        <View

            style={styles.container}>
            {icon && <FontAwesome name={icon}
                                             size={20}
                                             color={color.mediumGrey}
                                             style={styles.icon}/>}
            <TextInput style={styles.textInput}{...otherProps}/>
        </View>

    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        resizeMode: "contain",
        marginBottom: "1%",
        width: "100%",

    },
    textInput: {
        fontSize: 16,
        color: color.darkGrey,
        width:"100%"
    },
    icon: {
        marginRight: 10,
    }
})