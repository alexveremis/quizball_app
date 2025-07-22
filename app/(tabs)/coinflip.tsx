import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CoinFlipScreen({ route, navigation }) {
  const { player1, player2 } = route.params;
  const [flipping, setFlipping] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Simulate a coin flip animation and result
    const flipDuration = 2000; // 2 seconds
    setTimeout(() => {
      const random = Math.random() < 0.5 ? player1 : player2;
      setWinner(random);
      setFlipping(false);
      setShowResult(true);
    }, flipDuration);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coin Flip</Text>

      <Image
        source={
          flipping
            // ? require('./../../assets/images/coin-flipping.gif') // or use any animated gif
            ? require('./../../assets/images/coin.png')
            : require('./../../assets/images/coin.png') // static coin image
        }
        style={styles.coin}
      />

      {showResult && (
        <>
          <Text style={styles.resultText}>{winner} goes first!</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Game', { starter: winner })}
          >
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, marginBottom: 30 },
  coin: { width: 150, height: 150, marginBottom: 20 },
  resultText: { fontSize: 24, marginBottom: 20 },
  startButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: { color: 'white', fontSize: 18 }
});
