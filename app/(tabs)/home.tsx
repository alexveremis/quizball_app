import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';


export default function HomeScreen() {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuizBall</Text>
      <View style={styles.buttonContainer}>
        <Button title="Play" onPress={() => navigate('Play')} />
        <Button title="Settings" onPress={() => navigate('Settings')} />
        <Button title="Rules" onPress={() => navigate('Rules')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
  buttonContainer: { width: 200, height: 150, justifyContent: 'space-between' }
});