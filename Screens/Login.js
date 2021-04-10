import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Formik} from "formik";
import * as Yup from 'yup';


import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import color from "../config/color";
import {ImageBackground} from "react-native-web";


const validationSchema = Yup.object().shape({
    username: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});


function Login() {
    return (
        <ImageBackground
            blurRadius={8}
            source={require("../assets/background.png")}
            style={styles.imgBackground}>
            <View style={styles.center}>

                <Formik initialValues={{username: "", password: ""}}
                        onSubmit={values => console.log(values)}
                        validationSchema={validationSchema}
                >
                    {({handleChange, handleSubmit, errors}) => (
                        <>
                            <Image
                                source={require("../assets/AppLogo.png")}
                                style={styles.logo}/>
                            <Text style={styles.error}>{errors.username}</Text>
                            <AppTextInput placeholder="Email"
                                          icon="user"
                                          autoCapitalize="none"
                                          keyboardType="email-address"
                                          textContentType="emailAddress"
                                          onChangeText={handleChange("username")}/>

                            <Text style={styles.error}>{errors.password}</Text>
                            <AppTextInput placeholder="Password"
                                          icon="lock"
                                          autoCapitalize="none"
                                          keyboardType="email-address"
                                          autoCorrect={false}
                                          textContentType="password"
                                          secureTextEntry
                                          onChangeText={handleChange("password")}/>


                            <AppButton title="LOGIN" onPress={handleSubmit}/>

                        </>
                    )}
                </Formik>
            </View>
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    logo: {
        resizeMode: "contain",
        height: 150,
        width: 500,
        alignSelf: "center",
        marginTop: "20%",
    },
    center: {
        padding: 10,
        justifyContent: "center",
        alignContent: "center",
    },
    error: {
        color: color.danger,
        fontSize: 15,
        fontStyle: "italic",
        marginLeft: "3%",
    },
    imgBackground: {
        flex: 1,
    },
})
