import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
const options = ["Pomodoro", "Short Break", "Long Break"];
export default function Header({ setCurrentTime, setTime, currentTime }) {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index) 
    setTime(newTime * 60)
  };
  return (
    <View
      style={{ flexDirection: "row", marginLeft: "auto", marginRight: "auto" }}
    >
      {/*       <Text>Pomodoro</Text> */}
      {options.map((item, index) => (
        <TouchableOpacity
          onPress={()=>handlePress(index)}
          style={[styles.itemStyle, currentTime !== index && {borderColor: 'transparent'} ]}
          key={index}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    alignItems: 'center',
    borderRadius: 10
  },
});
