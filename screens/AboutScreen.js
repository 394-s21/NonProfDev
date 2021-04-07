import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

// Original home screen
// Currently not used
const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.h1_text}>
        NonProfDev
      </Text>
      <Text h3 style={styles.h3_text}>
        A simple, intuitive platform to connect non-profit organizations with
        passionate web developers
      </Text>
      <Text h3 style={styles.h3_text}>
        Created by the CS 394 Red Team
      </Text>
      <Text h4 style={styles.h4_text}>
        Benjamin Nober, Chris Song, Jacob Wat, Linus Okoth, Mason Brachmann,
        Tiger Nie, Zaddeen Benaissa
      </Text>
      <StatusBar style="auto" />
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

  userContainer: {
    flex: 1,
    alignItems: 'center',
  },

  h1_text: {
    fontSize: 48,
    marginBottom: 25,
  },
  h3_text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  h4_text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
})

export default AboutScreen
