import React from 'react';
import {
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform,
    Text,
    ImageBackground
} from "react-native";
import Heading from "../Components/Heading";
import Screen from "../Components/Screen";
import color from "../config/color";
import {Entypo} from '@expo/vector-icons';
import AppButton from "../Components/AppButton";

function Messages() {
    return (
        <ImageBackground
            blurRadius={8}
            source={require("../assets/background.png")}
            style={styles.imgBackground}>
            <Screen>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{flex: 1}}>
                        <Heading text="Person's Name"/>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.key}
                        >

                            <View style={styles.container}>
                                <TextInput multiline={true}
                                           numberOfLines={5}
                                           height={200}
                                           placeholder="Type Here..."
                                           autoCapitalize="none"
                                           keyboardType="default"
                                           style={styles.messageBox}/>
                                <View style={{flex: 1, flexDirection:"row"}}>
                                    <View style={styles.attachment}>
                                        <Entypo name='attachment'
                                                size={20}
                                                color={color.primaryBorder}/>
                                        <AppButton title="SEND"/>
                                    </View>

                                </View>

                            </View>
                        </KeyboardAvoidingView>
                    </View>

                </TouchableWithoutFeedback>
            </Screen>
        </ImageBackground>
    );
}

export default Messages;

const styles = StyleSheet.create({
    key: {
        flex: 1
    },
    container: {
        marginTop: 10,
    },
    messageBox: {
        borderRadius: 25,
        backgroundColor: color.lightGrey,
        padding: 25,
        paddingVertical: 25,
        fontSize: 16,
        alignSelf: "bottom"
    },
    imgBackground: {
        flex: 1,
    },
    send: {
        justifyContent: "flex-end"
    },
    attachment: {
        justifyContent: "flex-start"
    }
})