import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    flex: 0.2,
    borderRadius: 10,
    justifyContent: 'center'
  },
  text: {
    fontSize: 70,
    fontWeight: '300'
  }

});
