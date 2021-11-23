import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";
import Buttons from "../Buttons";

export default function GameSelector({navigation}) {
    const [ gameId, setGameId ] = useState();

    function joinGame() {
        if(gameId && gameId !== "") {
            navigation.navigate("Game")
        }
    }

    return (
        <View style={tw.style("px-5 py-10")}>
            <View style={tw.style("flex flex-col items-center")}>
                <Text style={tw.style("text-4xl", { fontFamily: "SegoeUIVariable-Bold" })}>No Thanks!</Text>

                <View>
                    <Buttons text={"Create game"} bgTw={"mt-5"} onPress={(_e)=>{navigation.navigate('Game')}} />

                    <TextInput style={tw.style("border rounded-lg px-2 py-1 mt-5")} placeholder="Game ID" onChangeText={e=>{setGameId(e)}}></TextInput>
                    <Buttons text={"Join game"} bgTw={"mt-3"} onPress={(_e)=>{joinGame()}} />
                </View>
            </View>
        </View>
    )
}