import React from 'react';
import {StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import {ImageBackground} from "react-native-web";


function Screen(props) {
    return (
        <SafeAreaView style={styles.screen}>
            {props.children}
        </SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})


