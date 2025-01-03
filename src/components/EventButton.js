import React from "react";
import { Pressable, Text } from "react-native";

const EventButton = () => {
    const _onPressIn = () => console.log("Press In !!!\n");
    const _onPressOut = () => console.log("Press Out !!!\n ☠☠☠☠☠☠☠☠☠☠☠\n");
    const _onPress = () => console.log("Press !!!\n");
    const _onLongPress = () => console.log("Long Press !!!\n");
    return (
        <Pressable
            style={{
                backgroundColor : '#f1c40f',
                // padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPressIn={_onPressIn}
            onLongPress={_onLongPress}
            onPressOut={_onPressOut}
            onPress={_onPress}
            // delayLongPress={3000}
            delayLongPress={3000}
            hitSlop={50}
            pressRetentionOffset={{bottom:50, left:50, right:50, top:50}}
            >
            <Text style={{color: 'white', fontSize: 24}}>Press</Text>
        </Pressable>
    );
};

export default EventButton;
