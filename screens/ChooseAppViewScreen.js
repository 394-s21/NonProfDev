import React from 'react'
import { StatusBar, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

// Original home screen
// Currently not used
const ChooseAppViewScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.h1_text}>
        Welcome to NonProfDev!
      </Text>
      <Text h3 style={styles.h3_text}>
        A simple, intuitive platform to connect non-profit organizations with
        passionate developers.
      </Text>
      <Text h3 style={styles.h3_text}>
        Are you a:
      </Text>
      <View style={styles.roleButton}> 
        <Button title="Developer" onPress={() => navigation.navigate("DeveloperPreferenceSelectionScreen")}></Button>
      </View>
      <View style={styles.roleButton}> 
        <Button title="Non-Profit Organization" onPress={() => navigation.navigate("SearchScreen")}> </Button>
      </View>

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
  roleButton: {
    backgroundColor: 'white',
    fontSize: 16,
    color: 'pink',
    margin: 15,
  }
})

export default ChooseAppViewScreen
