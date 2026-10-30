import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.counter}>Laskurin arvo: {count}</Text>
      <View style={styles.row}>
        <Button title="+" onPress={() => setCount(count => count + 1)} disabled={count >= 10} />
        <Button title="Reset" onPress={() => setCount(0)} />
        <Button title="-" onPress={() => setCount(count => count - 1)} disabled={count <= 0} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
  },
  counter: {
    fontSize: 24,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
});
