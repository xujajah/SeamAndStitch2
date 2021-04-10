import React from "react";
import {View, StyleSheet, Image, Text, TouchableHighlight} from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import color from "../config/color";

function AppListItem({title, subtitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
            style={styles.highlight}
            underlayColor={color.mediumGrey}
            onPress={()=>onPress}>

            <View style={styles.container}>
                <Image style={styles.image} source={image}/>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>

        </TouchableHighlight>
        </Swipeable>
    );
}

export default AppListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: color.lightGrey,
        borderRadius: 25,
        marginVertical: 1,
    },
    highlight:{
        borderRadius: 25,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    title: {
        color: color.darkGrey,
        fontWeight: "500",
        fontSize: 18,
    },
    subtitle: {
        color: color.mediumGrey,
        fontSize: 15,
    }
})

