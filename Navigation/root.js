import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from "../Components/home";


function Root(props) {
    return (

           <NavigationContainer>
               <Home/>
           </NavigationContainer>

    );
}

export default Root;
