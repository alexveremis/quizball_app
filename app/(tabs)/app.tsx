import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CoinFlipScreen from './coinflip';
import GameScreen from './gamescreen';
import HomeScreen from './home';
import PlayScreen from './play';
import RulesScreen from './rules';
import SettingsScreen from './settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="QuizBall" component={HomeScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Rules" component={RulesScreen} />
        <Stack.Screen name="CoinFlip" component={CoinFlipScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}