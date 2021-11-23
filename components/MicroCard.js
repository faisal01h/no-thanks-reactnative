import React from "react";
import tw from "tailwind-react-native-classnames";
import { View, Text } from "react-native";

export default function MicroCard({number}) {
    return (
        <View style={tw.style("border border-gray-400 rounded px-1")}>
            <Text style={tw.style("text-gray-600", { fontFamily: 'SegoeUIVariable-Regular' })}>{number}</Text>
        </View>
    )
}