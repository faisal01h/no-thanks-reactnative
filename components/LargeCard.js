import React from "react";
import tw from "tailwind-react-native-classnames";
import { View, Text } from "react-native";

export default function LargeCard({number, token}) {
    return (
        <View style={tw.style("border border-gray-400 rounded h-32 w-24 flex items-end p-1 mr-2")}>
            <Text style={tw.style("text-2xl text-gray-600", { fontFamily: 'SegoeUIVariable-Regular' })}>{number}</Text>
            {
                !isNaN(token) ?
                <View style={tw.style("mt-10 self-start")}>
                    
                    <Text style={tw.style("text-gray-600 text-lg", { fontFamily: 'SegoeUIVariable-Regular' })}>{token}</Text>
                </View> : false
            }
        </View>
    )
}