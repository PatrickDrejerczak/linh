import { useState } from "react"
import { View, StyleSheet, Image } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"

function StartGameScreen({ onStartGame }) {
  const [letsGo, setLetsGo] = useState(false)

  function startGameCallback() {
    setLetsGo(true)
    onStartGame(letsGo)
  }

  return (
    <View style={styles.inputContainer}>
      <Title>Linh fell in love in/with Europe?</Title>
      <Image source={require("../assets/europe.png")} style={styles.image} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={startGameCallback}>
            Tell me more!
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  image: {
    width: 500,
    height: 400,
    marginBottom: 30,
    marginTop: 20,
  },
})
