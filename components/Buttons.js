import React from "react";
import { Pressable, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Buttons({text, bgTw, fgTw, onPress}) {
    if(!bgTw) bgTw = "";
    if(!fgTw) fgTw = "";
    return (
        <Pressable onPress={onPress} style={tw`rounded-lg border border-gray-400 px-5 py-2 ${bgTw}`}>
            <Text style={tw`text-center ${fgTw}`}>{text}</Text>
        </Pressable>
    )
}