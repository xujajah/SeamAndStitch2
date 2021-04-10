import React from 'react';
import WelcomeScreen from "../Screens/WelcomeScreen";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import {createStackNavigator} from "@react-navigation/stack";
import Messages from "../Screens/Messages";



const Stack = createStackNavigator();

function Home(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Messages" component={Messages}/>
        </Stack.Navigator>

    );
}

export default Home;