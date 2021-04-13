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
      <View> 
        <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate("DeveloperPreferenceSelectionScreen")}>
          <Text style={styles.buttonText}>Developer</Text>
        </TouchableOpacity>
        {/* <Button title="Developer" onPress={() => navigation.navigate("DeveloperPreferenceSelectionScreen")}></Button> */}
      </View>
      <View> 
        <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate("SearchScreen")}>
          <Text style={styles.buttonText}>Non-Profit Organization</Text>
        </TouchableOpacity>
        {/* <Button title="Non-Profit Organization" onPress={() => navigation.navigate("SearchScreen")}> </Button> */}
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
    backgroundColor: '#2196F3',
    fontSize: 16,
    margin: 15,
    width: 250,
    padding: 15,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'ghostwhite',
    textAlign: 'center',
  }
})

export default ChooseAppViewScreen
