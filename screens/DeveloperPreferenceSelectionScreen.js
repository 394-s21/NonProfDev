import React, { useState, useEffect} from 'react'
import { StatusBar, StyleSheet, Text, View, Button,} from 'react-native'
import PreferenceButton from '../components/PreferenceButton'

// Original home screen
// Currently not used
const DeveloperPreferenceSelectionScreen = ({ navigation }) => {
  const [selections, setSelections] = useState({
    'pref1': 0,
    'pref2': 0,
    'pref3': 0,
    'pref4': 0
  });

  const handleClick = (prefNum, prefValue) => {
    const newSelections = {...selections};
    newSelections[prefNum] = prefValue;

    setSelections(newSelections);
  };

  return (
    <View style={styles.container}>
      <Text h1 style={styles.h1_text}>
        Primary Skillset/Desired Role
      </Text>
      <PreferenceButton select={() => handleClick('pref1', 0)} buttonText={"Web Design"} isSelected={selections['pref1'] === 0} > </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref1', 1)} buttonText={"Web Development"} isSelected={selections['pref1'] === 1} > </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref1', 2)} buttonText={"Backend Development"} isSelected={selections['pref1'] === 2} > </PreferenceButton>
      <Text h1 style={styles.h1_text}>
        Primary Field of Interest
      </Text>
      <PreferenceButton select={() => handleClick('pref2', 0)} buttonText={"Community Leadership"} isSelected={selections['pref2'] === 0} > </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref2', 1)} buttonText={"Education"} isSelected={selections['pref2'] === 1} > </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref2', 2)} buttonText={"Religion"} isSelected={selections['pref2'] === 2} > </PreferenceButton>
      <Text h1 style={styles.h1_text}>
        Project Length
      </Text>
      <PreferenceButton select={() => handleClick('pref3', 0)} buttonText={"One Month or Shorter"} isSelected={selections['pref3'] === 0} > </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref3', 1)} buttonText={"1-3 Months (One Quarter)"} isSelected={selections['pref3'] === 1}> </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref3', 2)} buttonText={"3+ Months"} isSelected={selections['pref3'] === 2} > </PreferenceButton>
      <Text h1 style={styles.h1_text}>
        Weekly Commitment
      </Text>
      <PreferenceButton select={() => handleClick('pref4', 0)} buttonText={"5 Hours or Fewer"} isSelected={selections['pref4'] === 0}> </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref4', 1)} buttonText={"5-10 Hours"} isSelected={selections['pref4'] === 1}> </PreferenceButton>
      <PreferenceButton select={() => handleClick('pref4', 2)} buttonText={"10+ Hours"} isSelected={selections['pref4'] === 2} > </PreferenceButton>

      <View style={styles.roleButton}> 
        <Button title="Submit Preferences" onPress={() => navigation.navigate("JobDisplayScreen", {selections})}></Button>
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
