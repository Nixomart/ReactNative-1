import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import {Audio} from 'expo-av'
const colors = ["#F7DC6F", "#A2D9CE", "#D78DE2"]
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false)

  useEffect(()=>{
    let interval  = null

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000);
    }else{
      clearInterval(interval)
    }

    if (time === 0) {
      setIsActive(false)
      setIsWorking((prev) => !prev)
      setTime(isWorking ? 300 : 1500)
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  const handleStartStop = () =>{
    playSound()
    setIsActive(!isActive)
  }

  async function playSound (){
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/click.mp3")
    )
    await sound.playAsync();
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
       {backgroundColor: colors[currentTime]}
      ]}
    >
      <View style={{ paddingTop: Platform.OS === "android" && 20, flex: 1, paddingHorizontal: 15, gap: 20 }}>
        <Text style={{fontSize: 30, fontWeight: '500'}}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
          time={time}
        />
        <Timer time={time} />
        


        {/* make component after */}

        <TouchableOpacity style={[{ padding: 10, borderRadius: 20}, isActive ? {backgroundColor: 'black'} : {backgroundColor: 'gray'}]} onPress={handleStartStop}>
          <Text style={{color: 'white', textAlign: 'center', fontSize:20}}>{isActive ? 'Stop': 'Start'}</Text>
        </TouchableOpacity>

        {/* para cambiar los coles de la hora <StatusBar style="light" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
