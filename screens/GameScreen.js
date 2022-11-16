import { useEffect, useState } from "react"
import { View, StyleSheet, Image } from "react-native"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"

const data = [
  {
    url: require("../assets/castle.jpg"),
    title: "Happy in Europe, happy in love, we dont need a castle!",
  },
  {
    url: require("../assets/cool.jpg"),
    title: "Confident, pretty, smart? Check, check and check!",
  },
  {
    url: require("../assets/cold.jpg"),
    title: "Vietnam is hot, but I am always the coolest!",
  },
  {
    url: require("../assets/innocent.jpg"),
    title: "I am the sweetest fruit of all!",
  },
  {
    url: require("../assets/penis.jpg"),
    title: "My bae`s stick is longer but these are delicious <3",
  },
  {
    url: require("../assets/dangerous.jpg"),
    title: "I swear! I can drink more than one!",
  },
  {
    url: require("../assets/fly.jpg"),
    title: "Fly us to the moon, we are too amazing for this world!",
  },
  {
    url: require("../assets/mominlaw.jpg"),
    title: "Coolest mom in law ever =))",
  },
  {
    url: require("../assets/happiness.jpg"),
    title:
      "Happiness in its purest form: MEAT <3 (Linh, 2002, self proclaimed semi vegan)!",
  },
  {
    url: require("../assets/bazaar.jpg"),
    title: "Best breakfast! Best boyfriend! Amazing colors!",
  },
  {
    url: require("../assets/vegan.jpg"),
    title: "He really ate vegan :O!",
  },
  {
    url: require("../assets/buy.jpg"),
    title:
      "No thanks, I wont buy this castle! I deserve only the best of the best!",
  },
  {
    url: require("../assets/bacarian.jpg"),
    title: "Octoberfest and duck <3!",
  },
  {
    url: require("../assets/beach.jpg"),
    title: "Stormy love!",
  },
  {
    url: require("../assets/cat.jpg"),
    title: "Take care of me! I am as sweet as a dog!",
  },
  {
    url: require("../assets/polishfood.jpg"),
    title: "Mlem Mlem <3!",
  },
  {
    url: require("../assets/stranger.jpg"),
    title: "Adventures with strangers haha!",
  },
  {
    url: require("../assets/yellowsweater.jpg"),
    title: "That looks great! This will be my look for this month =))!",
  },
  {
    url: require("../assets/lovevn.jpg"),
    title: "There is also love in Vietnam?!",
  },
  {
    url: require("../assets/moms.jpg"),
    title: "Moms take the greatest pictures haha",
  },
  {
    url: require("../assets/love.jpg"),
    title: "Sometimes all you need is love <3",
  },
  {
    url: require("../assets/wat.jpg"),
    title: "What? Whom did you call pretty?",
  },
  {
    url: require("../assets/sea.jpg"),
    title: "No dummy! Look, this is what I want!",
  },
  {
    url: require("../assets/icecream.jpg"),
    title: "Cold licking outside, but hot in bed =))!",
  },
  {
    url: require("../assets/kapsalon.jpg"),
    title: "Patrick or Kapsalon? I take the big one!",
  },
]

function GameScreen() {
  let randomImageIndex = Math.floor(Math.random() * Math.floor(data.length))
  const [randomNumber, setRandomNumber] = useState(randomImageIndex)

  function setRandomImageIndex() {
    randomImageIndex = Math.floor(Math.random() * Math.floor(data.length))
    setRandomNumber(randomImageIndex)
  }

  let imagePath = data[randomNumber].url
  let titlePath = data[randomNumber].title

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <Title>{titlePath}</Title>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={setRandomImageIndex}>
          Wanna hear more?
        </PrimaryButton>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 8,
  },
  image: {
    width: 700,
    height: 500,
    marginBottom: 40,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 20,
  },
})
