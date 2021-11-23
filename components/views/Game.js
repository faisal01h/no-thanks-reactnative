import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable
} from 'react-native';
import tw from 'tailwind-react-native-classnames'
import Buttons from '../Buttons';
import LargeCard from '../LargeCard';
import OpponentCards from '../OpponentCards';

export default function Game ({navigation}) {

  const [ userName, setUserName ] = useState();
  const [ gameId, setGameId ] = useState();
  const [ opponents, setOpponents ] = useState([]);
  const [ userCards, setUserCards ] = useState([]);
  const [ tableCard, setTableCard ] = useState();
  const [ tableTokens, setTableTokens ] = useState();
  const [ isUsersTurn, setIsUsersTurn ] = useState(true);
  const [ gameStatus, setGameStatus ] = useState();

  useEffect(() => {
    setUserName("Faisal")
    setGameId("31419")
    setOpponents([
      {
        uid: 150600,
        name: "matcha",
        cards: [15]
      }
    ])
    setUserCards([28, 27])
    setTableCard(14)
    setTableTokens(3)
    return
  }, [])
  
  useEffect(() => {
    // console.log(opponents)
  }, [opponents])

  return (
    <View style={tw`px-5 py-10 flex bg-white`}>
      <ScrollView style={tw`flex flex-col h-full`}>
        <Text style={tw.style(`text-4xl font-bold`, { fontFamily: "SegoeUIVariable-Bold" })}>No{" "}
          <Text style={tw.style("text-blue-500", { fontFamily: "SegoeUIVariable-Bold" })}>Thanks</Text>!
        </Text>
        <View style={tw`flex flex-row items-center`}>
          {/* Game Information */}
          {
            userName ? 
            <View style={tw`bg-blue-200 px-2 py-1 rounded-full`}>
              <Text style={tw.style("text-blue-800 font-semibold", { fontFamily: "SegoeUIVariable-Semibold" })}>{userName}</Text>
            </View> : false
          }
          {
            gameId ?
              <Text style={tw.style(`font-semibold text-gray-400 ml-12`, { fontFamily: 'SegoeUIVariable-Semibold' })}>Session <Text style={tw.style(`text-black font-medium`, { fontFamily: 'SegoeUIVariable-Regular' })}>#{gameId}</Text></Text>
            : false
          }
        </View>
        <View style={tw.style("my-3")}>
          {/* Opponents list */}
          {
            opponents ? 
            opponents.map((e) => {
              return <OpponentCards key={e.uid} data={e} />
            }) : false
          }
        </View>
        <View>
          {/* Table */}
          <Text style={tw.style("font-semibold text-lg text-gray-600", { fontFamily: 'SegoeUIVariable-Semibold' })}>Table</Text>
          <View style={tw.style("flex flex-col")}>
            {tableCard ? <LargeCard number={tableCard} token={tableTokens} /> : false }
          </View>
        </View>
        <View style={tw.style("mt-3")}>
          {/* User hand */}
          <Text style={tw.style("font-semibold text-lg text-gray-600", { fontFamily: 'SegoeUIVariable-Semibold' })}>Your hand</Text>
          <View style={tw.style("flex flex-row flex-wrap")}>
          {
            userCards.length > 0 ?
              userCards.map(e=>{
                return <LargeCard key={e} number={e} />
              })
            : false
          }
          </View>
        </View>
        
      </ScrollView>
      <View style={tw.style("absolute bottom-2 w-full mx-5")}>
        <View style={tw`flex flex-row mt-5`}>
          {/* Actions */}
          <Buttons text="..." bgTw={"mr-3 w-2/12 flex-shrink flex-grow-0"} onPress={_e=>{}} />
          {
            isUsersTurn ?
            <View style={tw.style("flex flex-row flex-grow h-12")}>
              <Buttons text="Draw" bgTw={"mr-3 w-4/12 flex-grow"} fgTw="text-xl font-semibold" onPress={_e=>{}} />
              <Buttons text="Spend" bgTw={"mr-3 w-4/12 flex-grow"} fgTw="text-xl font-semibold" onPress={_e=>{}} />
            </View>
            : <Buttons text="Wait for your turn..." bgTw={"flex-grow"} fgTw={"text-gray-500"}/>
          }
        </View>
      </View>
    </View>

  );
};