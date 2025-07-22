import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';


export default function SettingsScreen() {
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const [questionSet, setQuestionSet] = useState('default');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Volume</Text>
      <Switch value={isVolumeOn} onValueChange={setIsVolumeOn} />

      <Text style={styles.label}>Question Set</Text>
      <Picker
        selectedValue={questionSet}
        onValueChange={(itemValue) => setQuestionSet(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Default" value="default" />
        <Picker.Item label="Kids" value="kids" />
        <Picker.Item label="History" value="history" />
        {/* Add more sets */}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 18, marginVertical: 10 },
  picker: { height: 50, width: 200 }
});
