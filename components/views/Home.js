import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import Buttons from "../Buttons";

export default function Home({navigation}) {
    return (
        <View>
            <View style={tw.style("flex flex-col items-center justify-center h-1/2")}>
                <Text style={tw.style("text-4xl", { fontFamily: "SegoeUIVariable-Bold" })}>No Thanks!</Text>
                <Buttons text={"Play"} onPress={(_e)=>{navigation.navigate('GameSelector')}} />
            </View>
        </View>
    )
}