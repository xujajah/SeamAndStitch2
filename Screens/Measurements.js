import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Screen from "../Components/Screen";
import {ImageBackground} from "react-native-web";
import Heading from "../Components/Heading";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import {Formik} from "formik";
import * as Yup from "yup";
import color from "../config/color";


const validationSchema = Yup.object().shape({
    arm: Yup.number().required().label("arm"),
    shoulder: Yup.number().required().label("shoulder"),
    chest: Yup.number().required().label("chest"),
    hips: Yup.number().required().label("hips"),
    stomach: Yup.number().required().label("stomach"),
    armHole: Yup.number().required().label("armhole"),
    shirtLength: Yup.number().required().label("shirtLength"),
    collar: Yup.number().required().label("collar"),
    trouserLength: Yup.number().required().label("trouserLength"),
    waist: Yup.number().required().label("waist"),
    crotch: Yup.number().required().label("crotch"),
    cuff: Yup.number().required().label("cuff"),
});

function Measurements() {
    return (
        <ImageBackground
            blurRadius={8}
            source={require("../assets/background.png")}
            style={styles.imgBackground}>
            <Screen>
                <Heading text="Measurements (cm)"/>

                <Formik initialValues={{arm: "", chest: "", shoulder:"", hips:"", stomach:"", armHole:"",
                shirtLength:"", collar:"", trouserLength:"", waist:"", crotch:"", cuff:""}}
                        onSubmit={values => console.log(values)}
                        validationSchema={validationSchema}
                >
                    {({handleChange, handleSubmit, errors}) => (
                        <>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <View style={{flexDirection: "row" , justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.arm}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                    <Text style={styles.text}>Arm Length </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("arm")}
                                        />
                                    </View>
                                </View>


                                <View style={{flexDirection: "row" , justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.shoulder}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Shoulder </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("shoulder")}
                                        />
                                    </View>
                                </View>

                            </View>


                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <View style={{flexDirection: "row" , justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.chest}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Chest </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("chest")}
                                        />
                                    </View>
                                </View>


                                <View style={{flexDirection: "row" , justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.stomach}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Stomach </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("stomach")}
                                        />
                                    </View>
                                </View>

                            </View>


                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <View style={{flexDirection: "row" , justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.armHole}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Arm Hole </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("armHole")}
                                        />
                                    </View>
                                </View>


                                <View style={{flexDirection: "row" , justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.hips}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Hips </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("hips")}
                                        />
                                    </View>
                                </View>

                            </View>


                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.shirtLength}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Shirt Length </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("shirtLength")}
                                        />
                                    </View>
                                </View>


                                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.collar}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Collar </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("collar")}
                                        />
                                    </View>
                                </View>

                            </View>


                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.trouserLength}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Trouser Length </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("trouserLength")}
                                        />
                                    </View>
                                </View>


                                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.waist}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Waist </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("waist")}
                                        />
                                    </View>
                                </View>

                            </View>


                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.crotch}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Crotch </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("crotch")}
                                        />
                                    </View>
                                </View>


                                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                                    <Text style={styles.error}>{errors.cuff}</Text>

                                    <View style={{justifyContent: "flex-start", alignSelf:"center"}}>
                                        <Text style={styles.text}>Trouser Cuff </Text>
                                    </View>

                                    <View style={{justifyContent: "flex-end", width: "50%"}}>
                                        <AppTextInput placeholder="0.0"
                                                      autoCapitalize="none"
                                                      keyboardType="decimal-pad"
                                                      onChangeText={handleChange("cuff")}
                                        />
                                    </View>
                                </View>

                            </View>

                            <AppButton title="Save" onPress={handleSubmit}/>

                        </>
                    )}
                </Formik>

            </Screen>
        </ImageBackground>
    );
}

export default Measurements;


const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
    },
    text:{
        fontWeight: "500",
        fontSize: 18,
        color: color.darkGrey,
    }
});
