import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // Take up the whole screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
});
