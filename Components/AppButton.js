import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import colors from "../config/color";

function AppButton({title, onPress, color = "primary", borderColor = "primaryBorder"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}, {borderColor: colors[borderColor]}]}
                          onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: colors.secondaryBorder,
        marginHorizontal: 10,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,

    }
})

