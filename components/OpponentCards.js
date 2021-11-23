import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import MicroCard from "./MicroCard";

export default function OpponentCards({data}) {
    return (
        <View style={tw.style("rounded-lg border border-gray-400 px-5 py-2 flex flex-row justify-between", { fontFamily: "SegoeUIVariable-Regular" })}>
            <Text style={tw.style("text-gray-600", {fontFamily: 'SegoeUIVariable-Regular'})}>{data.name}</Text>
            <View>
                {
                    data.cards.length > 0 ?
                        data.cards.map((el) => {
                            return <MicroCard number={el} key={el} />;
                        })
                    :false
                }
            </View>
        </View>
    )
}