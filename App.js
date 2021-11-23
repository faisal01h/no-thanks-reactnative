import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/views/Game';
import Home from './components/views/Home';
import GameSelector from './components/views/GameSelector';

const Stack = createStackNavigator();

export default function App() {
  let [ fontsLoaded ] = useFonts({
    'SegoeUIVariable-Regular': require("./assets/fonts/SegoeUIVariable/SegoeUIVariableDisplay-Regular.ttf"),
    'SegoeUIVariable-Bold': require("./assets/fonts/SegoeUIVariable/SegoeUIVariableDisplay-Bold.ttf"),
    'SegoeUIVariable-Semibold': require("./assets/fonts/SegoeUIVariable/SegoeUIVariableDisplay-Semibold.ttf"),
    'SegoeUIVariable-Semilight': require("./assets/fonts/SegoeUIVariable/SegoeUIVariableDisplay-Semilight.ttf"),
    'SegoeUIVariable-Lignt': require("./assets/fonts/SegoeUIVariable/SegoeUIVariableDisplay-Light.ttf"),
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    // <View>
    //   <StatusBar style="auto" />
    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen name="Home">
    //           {props => <Home {...props} />}
    //         </Stack.Screen>
    //         <Stack.Screen name="Game" component={Game} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    // </View>

  <NavigationContainer style={{fontFamily: 'SegoeUIVariable-Regular'}}>
    <StatusBar style="auto" />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="GameSelector" component={GameSelector} />
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}
