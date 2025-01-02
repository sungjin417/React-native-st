import React from "react";
import { Text, View, Button } from "react-native";
import MyButton from "./components/MyButton";
const App = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text
             style={{
                fontSize: 30,
                marginBottom: 10,
            }}
        >
            props
            </Text>
            {/* <Button title="Button" onPress={() => alert("Click!!")} /> */}
            <MyButton title="Button"/>
            <MyButton>Child Button</MyButton>
            <MyButton />
            <MyButton title={123}/>
        </View>
    );
};
export default App;