import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MainPage from './MainPage';
import Lore_dot_jpeg from './assets/lore.png';


export default function App() {
  const [isOnboarded, setOnboarded] = React.useState(false);

  const nextOnPress = () => {
    setOnboarded(true);
  }

  return (
    isOnboarded ? 
      <MainPage /> :
      <View style={styles.container}>
        <Image source={Lore_dot_jpeg} style={styles.background} />
        <TouchableOpacity style={styles.nextButton} onPress={nextOnPress}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        <Text style={styles.loreText}> dad give fish. you go fish.</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: "absolute",
    top: 200,
    bottom: 0,
    right: 0,
    left: 0,
  },
  nextButton: {
    borderRadius: 10000,
    padding: 10,
    margin: 5,
    backgroundColor: "#7a7a7a",
    position: "absolute",
    bottom: 200,
    alignSelf: "auto",
  },
  nextText: {
    fontSize: 40,
    color: '#fff'
  },
  loreText: {
    fontSize: 30,
    color: '#000',
    position: "absolute",
    top: 170,
  }
});