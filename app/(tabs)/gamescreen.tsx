import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GameScreen({ route }) {
  const { starter } = route.params;

  const categories = [
    { name: 'Geography', count: 2 },
    { name: 'History', count: 2 },
    { name: 'Top5', count: 3 },
    { name: "Who's Missing", count: 2 },
    { name: 'PlayerID', count: 2 },
    { name: "Fans' Question", count: 2 },
    { name: 'Logo', count: 2 },
    { name: 'Club Combo', count: 2 },
  ];

  // Create two copies of each for both players
  const gridItems = categories.flatMap((cat, i) => [
    { id: `${cat.name}-1`, name: cat.name, count: cat.count },
    { id: `${cat.name}-2`, name: cat.name, count: cat.count },
  ]);

  const handlePress = (category) => {
    console.log('Selected:', category.name);
    // Navigate to question screen or open modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s Play!</Text>
      <Text style={styles.subtitle}>Starting: {starter}</Text>

      <FlatList
        data={gridItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.cardText}>{item.name} x{item.count}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  grid: { alignItems: 'center' },
  card: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    margin: 8,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
  },
  cardText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});
