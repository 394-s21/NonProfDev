import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native'
import PreferenceGroup from '../components/PreferenceGroup'
import { ScrollView, /*TouchableOpacity*/ } from 'react-native-gesture-handler'

// Preference data hardcoded for now, substitute for db call later
const preferenceData = [
  {
    id: 'role',
    title: 'Primary Skillset/Desired Role',
    options: ['Web Design', 'Web Development', 'Backend Development'],
  },
  {
    id: 'industry',
    title: 'Primary Field of Interest',
    options: ['Community Leadership', 'Education', 'Religion'],
  },
  {
    id: 'length',
    title: 'Project Length',
    options: ['One Month or Shorter', '1-3 Months (One Quarter)', '3+ Months'],
  },
  {
    id: 'weeklyTime',
    title: 'Weekly Commitment',
    options: ['5 Hours or Fewer', '5-10 Hours', '10+ Hours'],
  },
  {
    id: 'teamSize',
    title: 'Team Size',
    options: ['Solo', '2-3 Member Team', '3+ Member Team'],
  },

]

/**
 * Creates a selection object with
 *   key = preference title
 *   value = boolean array of length options
 */
const initSelections = (preferenceData) => {
  const obj = {}
  preferenceData.map((v) => {
    const a = new Array(v.options.length)
    for (let i = 0; i < v.options.length; ++i) a[i] = false
    obj[v.id] = a
  })
  return obj
}

/**
 * Convert selections object to map of preferences
 */
const getPreferences = (preferenceData, selections) => {
  const obj = {}
  preferenceData.map((prefObj) => {
    const mask = selections[prefObj.id]
    obj[prefObj.id] = prefObj.options.filter((_, i) => mask[i])
  })
  return obj
}

const DeveloperPreferenceSelectionScreen = ({ navigation }) => {
  const [selections, setSelections] = useState(initSelections(preferenceData))

  const handleSelect = (id, i) => {
    //const newSelections = { ...selections }
    const tmp = selections[id]
    tmp[i] = !tmp[i]
    setSelections((selections) => ({ ...selections, id: tmp }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.h1_text}>Please select one or more preferences for each of the following:</Text>
        {preferenceData.map((v, i) => (
          <PreferenceGroup
            key={i}
            title={v.title}
            options={v.options}
            toggleSelect={(i) => handleSelect(v.id, i)}
            selection={selections[v.id]}
          />
        ))}

        <View style={styles.userContainer}>
          {/* <Button
            style={styles.submitButtonText}
            title="Submit Preferences"
            onPress={() => {
              const preferences = getPreferences(preferenceData, selections)
              navigation.navigate('JobListScreen', { preferences })
            }}
          /> */}
          <TouchableOpacity
            style={styles.roleButton} 
            onPress={() => {
              const preferences = getPreferences(preferenceData, selections)
              navigation.navigate('JobListScreen', { preferences })
            }}>
              <Text style={styles.submitButtonText}>Submit Preferences</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 20,
  },
  userContainer: {
    flex: 1,
    alignItems: 'center',
  },
  h1_text: {
    fontSize: 24,
    marginTop: 30,
    textAlign: 'center',
  },
  roleButton: {
    borderRadius: 3,
    backgroundColor: 'seagreen',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginBottom: 15,
    padding: 20,
    width: 300,
  },
  submitButtonText: {
    color: 'ghostwhite',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default DeveloperPreferenceSelectionScreen
