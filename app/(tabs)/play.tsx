import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PlayScreen({ navigation }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Player 1 (Blue):</Text>
      <TextInput style={styles.input} value={player1} onChangeText={setPlayer1} />

      <Text style={styles.label}>Player 2 (Red):</Text>
      <TextInput style={styles.input} value={player2} onChangeText={setPlayer2} />
      <Button title="Continue" onPress={() =>
        navigation.navigate('CoinFlip', {player1,player2})
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 18, marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginTop: 5
  }
});