import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import color from "../config/color";
import Screen from "./Screen";

function Heading({text}) {
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.heading}>{text}</Text>
            </View>
        </Screen>
    );
}

export default Heading;

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "600",
        color: color.darkGrey,
        justifyContent: "flex-start"
    },
    container: {
        padding: 15,
    }
})

