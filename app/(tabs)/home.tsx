import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Play: undefined;
  Settings: undefined;
  Rules: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuizBall</Text>
      <View style={styles.buttonContainer}>
        <Button title="Play" onPress={() => navigation.navigate('Play')} />
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
        <Button title="Rules" onPress={() => navigation.navigate('Rules')} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
  buttonContainer: { width: 200, height: 150, justifyContent: 'space-between' }
});