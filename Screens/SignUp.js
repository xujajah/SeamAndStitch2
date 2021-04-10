import React from "react";
import {StyleSheet, Image, View, Text, Linking, TouchableOpacity} from 'react-native';
import {Formik} from "formik";
import * as Yup from 'yup';
import {FontAwesome} from '@expo/vector-icons';


import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import color from "../config/color";
import {ImageBackground} from "react-native-web";


const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required().label("FirstName"),
    LastName: Yup.string().required().label("LastName"),
    Email: Yup.string().required().email().label("Email"),
    Password: Yup.string().required('Password is required'),
    Confirm: Yup.string()
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.Password === value
        }),
    OTP: Yup.number().integer().required().max(4).min(4).label("OTP"),
});


function Login() {
    return (
        <ImageBackground
            blurRadius={8}
            source={require("../assets/background.png")}
            style={styles.imgBackground}>

            <View style={styles.center}>
                <FontAwesome name='user-plus'
                             size={90}
                             color={color.primaryBorder}
                             style={styles.icon}/>
                <Formik initialValues={{FirstName: "", LastName: "", Email: "", Password: "", Confirm: "", OTP: ""}}
                        onSubmit={values => console.log(values)}
                        validationSchema={validationSchema}>


                    {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                        <>
                            <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>

                                <View style={{justifyContent: "flex-start", width: "50%"}}>
                                    {touched.FirstName && <Text style={styles.error}>{errors.FirstName}</Text>}
                                    <AppTextInput placeholder="FirstName"
                                                  autoCapitalize="none"
                                                  keyboardType="default"
                                                  onBlur={() => ("FirstName")}
                                                  onChangeText={handleChange("FirstName")}
                                    />
                                </View>
                                <View style={{justifyContent: "flex-end", width: "50%"}}>

                                    {touched.LastName && <Text style={styles.error}>{errors.LastName}</Text>}
                                    <AppTextInput placeholder="LastName"
                                                  autoCapitalize="none"
                                                  keyboardType="default"
                                                  onBlur={() => ("LastName")}
                                                  onChangeText={handleChange("LastName")}/>
                                </View>

                            </View>

                            {touched.Email && <Text style={styles.error}>{errors.Email}</Text>}
                            <AppTextInput placeholder="Email"
                                          autoCapitalize="none"
                                          keyboardType="email-address"
                                          onChangeText={handleChange("Email")}
                                          onBlur={() => ("Email")}/>

                            <Text style={styles.error}>{errors.Password}</Text>
                            <AppTextInput placeholder="Password"
                                          autoCapitalize="none"
                                          keyboardType="email-address"
                                          autoCorrect={false}
                                          textContentType="password"
                                          secureTextEntry
                                          onBlur={() => ("Password")}
                                          onChangeText={handleChange("Password")}/>


                            <Text style={styles.error}>{errors.Confirm}</Text>
                            <AppTextInput placeholder="Confirm Password"
                                          autoCapitalize="none"
                                          keyboardType="email-address"
                                          autoCorrect={false}
                                          textContentType="password"
                                          secureTextEntry
                                          onBlur={() => ("ConfirmPassword")}
                                          onChangeText={handleChange("ConfirmPassword")}/>


                            <Text style={styles.otp} onPress={() => Linking.openURL('http://google.com')}>
                                Send OTP on Email
                            </Text>

                            <Text style={styles.error}>{errors.OTP}</Text>
                            <AppTextInput placeholder="OTP"
                                          autoCapitalize="none"
                                          keyboardType="numeric"
                                          onBlur={() => ("OTP")}
                                          onChangeText={handleChange("OTP")}/>


                            <AppButton title="REGISTER" onPress={handleSubmit}/>

                        </>
                    )}
                </Formik>
                <View
                    style={{
                        borderBottomColor: color.mediumGrey,
                        borderBottomWidth: 1,
                        width: "100%",
                        marginVertical: 2,
                    }}
                />
                <Text style={styles.or}>OR</Text>
                <TouchableOpacity>
                    <Text style={styles.google}>
                        <FontAwesome name='google'
                                     size={20}
                                     color={color.google}
                                     style={styles.icon}/>

                        <> </>
                        Sign Up With Google</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    icon: {
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
    otp: {
        textDecorationLine: "underline",
        fontStyle: "italic",
        alignSelf: "center",
        fontSize: 15,
        color: color.link,
        marginBottom: 1,
    },
    or: {
        color: color.google,
        fontWeight: "600",
        alignSelf: "center",
        fontSize: 18,
        marginTop: "4%",
        marginBottom: "1%"
    },
    google: {
        color: color.google,
        alignSelf: "center",
        fontSize: 16,
    },
    imgBackground: {
        flex: 1,
    },
})
