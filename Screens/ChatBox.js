import React, {useState} from "react";
import {Text, FlatList, Platform, StatusBar, StyleSheet, SafeAreaView, View} from "react-native";


import AppListItem from "../Components/AppListItem";
import color from "../config/color";
import DeleteOnSwipe from "../Components/DeleteOnSwipe";
import AppTextInput from "../Components/AppTextInput";
import Screen from "../Components/Screen";
import {ImageBackground} from "react-native-web";


const msg = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/dp.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/dp.jpg')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/dp.jpg')
    }
]

function ChatBox() {


    const [messages, setMessages] = useState(msg);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };


    return (
        <ImageBackground
            blurRadius={8}
            source={require("../assets/background.png")}
            style={styles.imgBackground}>
            <Screen>
                <View style={styles.container}>
                    <Text style={styles.heading}>Messages</Text>
                </View>
                <AppTextInput placeholder="Search"
                              icon="search"
                              autoCapitalize="none"
                              keyboardType="default"
                              autoCorrect={false}
                />
                <FlatList
                    data={messages}
                    keyExtractor={messages => messages.id.toString()}
                    renderItem={({item}) =>
                        (<AppListItem
                            title={item.title}
                            subtitle={item.description}
                            image={item.image}
                            id={item.id}
                            renderRightActions={() => (
                                <DeleteOnSwipe onPress={() => handleDelete(item)}/>
                            )}
                        />)}
                />
            </Screen>
        </ImageBackground>
    );
}

export default ChatBox;

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "600",
        color: color.darkGrey,
        justifyContent: "flex-start"
    },
    container: {
        padding: 15,
    },
    imgBackground: {
        flex: 1,
    },
})