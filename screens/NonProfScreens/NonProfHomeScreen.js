import React from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

// Original home screen
// Currently not used
const NonProfHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Text h3 style={styles.h3_text}>
      Welcome back to NonProfDev!
      </Text>
      
     
      <View>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() =>
            navigation.navigate('SearchScreen')
          }
        >
          <Text style={styles.buttonText}>See List of Developers</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => navigation.navigate('DeveloperCreateJobScreen')}
        >
          <Text style={styles.buttonText}>Post a New Listing</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Text style={styles.buttonText}>Messages</Text>
        </TouchableOpacity>
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
  },
})

export default NonProfHomeScreen
