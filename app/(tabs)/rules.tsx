import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';

export default function RulesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to QuizBall! Two players compete by answering quiz questions.
        Each correct answer earns a point. First to reach 5 wins!
      </Text>

      {/* <YoutubePlayer height={200} play={false} videoId={'dQw4w9WgXcQ'} /> */}
      {/* Replace with your actual YouTube video ID */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  text: { fontSize: 16, marginBottom: 20 }
});
