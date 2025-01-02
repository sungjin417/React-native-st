import React from "react";
import { Text, View, Button } from "react-native";
import MyButton from "./components/MyButton";
import Counter from "./components/Counter";
import ViewBoxesWithColorAndText from "./components/ViewBoxesWithColorAndText";
import EventButton from "./components/EventButton";
import EventInput from "./components/EventInput";

const App = () => {
    return (
        // <View
        //     style={{
        //         flex: 1,
        //         backgroundColor: "#fff",
        //         alignItems: "center",
        //         justifyContent: "center",
        //     }}
        // >
        //     <Text
        //      style={{
        //         fontSize: 30,
        //         marginBottom: 10,
        //     }}
        // >
        //     props
        //     </Text>
        //     {/* <Button title="Button" onPress={() => alert("Click!!")} /> */}
        //     <MyButton title="Button"/>
        //     <MyButton>Child Button</MyButton>
        //     <MyButton />
        //     {/* <MyButton title={123}/> */} 
        //     {/* 실행은 되지만 오류가 발생  */}
        //     <Counter />
        //     <ViewBoxesWithColorAndText />
        // </View>
        <View style={{
                    flex: 1,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
            <EventButton/>
            <EventInput/>
    
        </View>
    );
};
export default App;