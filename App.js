
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloFatima = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Fatima Cabigon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,            // Fills the whole screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HelloFatima;
