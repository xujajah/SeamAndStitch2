import React from "react";
import {View} from "react-native";
import {FontAwesome} from '@expo/vector-icons';

function AppIcons({
                      name,
                      size = 40,
                      bg = "black",
                      iconColor = "white"
                  }) {
    return (
        <View
            style={
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor: bg,
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }>
            <FontAwesome name={name} color={iconColor} size={size * 0.75}/>
        </View>
    );
}

export default AppIcons;

