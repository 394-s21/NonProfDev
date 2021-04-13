import React from 'react'
import { StatusBar, StyleSheet, Text, View, Button,} from 'react-native'
import PreferenceButton from '../components/PreferenceButton'

// Original home screen
// Currently not used
const DeveloperPreferenceSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.h1_text}>
        Primary Skillset/Desired Role
      </Text>
      <PreferenceButton buttonText={"Web Design"} isDisabled={false} isSelected={true} > </PreferenceButton>
      <PreferenceButton buttonText={"Web Development"} isDisabled={true} isSelected={false} > </PreferenceButton>
      <PreferenceButton buttonText={"Backend Development"} isDisabled={true} isSelected={false} > </PreferenceButton>
      <Text h1 style={styles.h1_text}>
        Primary Field of Interest
      </Text>
      <PreferenceButton buttonText={"Community Leadership"} isDisabled={false} isSelected={true} > </PreferenceButton>
      <PreferenceButton buttonText={"Education"} isDisabled={true} isSelected={false} > </PreferenceButton>
      <PreferenceButton buttonText={"Religion"} isDisabled={true} isSelected={false} > </PreferenceButton>
      <Text h1 style={styles.h1_text}>
        Project Length
      </Text>
      <PreferenceButton buttonText={"One Month or Shorter"} isDisabled={false} isSelected={true} > </PreferenceButton>
      <PreferenceButton buttonText={"1-3 Months (One Quarter)"} isDisabled={true} isSelected={false} > </PreferenceButton>
      <PreferenceButton buttonText={"3+ Months"} isDisabled={true} isSelected={false} > </PreferenceButton>
      <Text h1 style={styles.h1_text}>
        Weekly Commitment
      </Text>
      <PreferenceButton buttonText={"5 Hours or Fewer"} isDisabled={false} isSelected={true} > </PreferenceButton>
      <PreferenceButton buttonText={"5-10 Hours"} isDisabled={true} isSelected={false} > </PreferenceButton>
      <PreferenceButton buttonText={"10+ Hours"} isDisabled={true} isSelected={false} > </PreferenceButton>

      <View style={styles.roleButton}> 
        <Button title="Submit Preferences" onPress={() => navigation.navigate("DeveloperPreferenceSelectionScreen")}></Button>
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

export default DeveloperPreferenceSelectionScreen
