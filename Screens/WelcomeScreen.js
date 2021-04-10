import React from 'react';
import {Image, StyleSheet, View, Pressable} from 'react-native';


import AppButton from "../Components/AppButton";
import {useNavigation} from '@react-navigation/native';
import {ImageBackground} from "react-native-web";

function WelcomeScreen() {

    const nav = useNavigation();
    const gotoLogin = () => {
        nav.navigate("Login")
    }
    const gotoSignup = () => {
        nav.navigate("SignUp")
    }


    return (
        <ImageBackground
            blurRadius={8}
            source={require("../assets/background.png")}
            style={styles.imgBackground}>

            <View style={styles.background}>
                <Image
                    style={styles.logo}
                    source={require("../assets/AppLogo.png")}
                />
                <View style={styles.buttonContainer}>
                    <AppButton title="LOGIN" onPress={gotoLogin}/>
                    <AppButton title="REGISTER" color="secondary" borderColor="secondaryBorder" onPress={gotoSignup}/>
                </View>
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: "5%",
        marginBottom: "8%",
    },
    logo: {
        resizeMode: "contain",
        height: "90%",
        width: "90%",
        position: "absolute",
        top: 25,
    },
    imgBackground: {
        flex: 1,
    },
})
