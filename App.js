import { useState } from "react"
import { StyleSheet, ImageBackground, SafeAreaView, Text } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"

export default function App() {
  const [gameStart, setGameStart] = useState(false)

  function gameStarted(start) {
    setGameStart(start)
  }

  let screen = <StartGameScreen onStartGame={gameStarted} />

  if (gameStart) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={["#FBDA61", "#FF5ACD"]} style={styles.rootScreen}>
      {/* <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      > */}
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      {/* </ImageBackground> */}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
