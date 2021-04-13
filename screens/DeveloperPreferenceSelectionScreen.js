import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, View, Button, SafeAreaView } from 'react-native'
import PreferenceGroup from '../components/PreferenceGroup'
import { ScrollView } from 'react-native-gesture-handler'

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
        {preferenceData.map((v, i) => (
          <PreferenceGroup
            key={i}
            title={v.title}
            options={v.options}
            toggleSelect={(i) => handleSelect(v.id, i)}
            selection={selections[v.id]}
          />
        ))}

        <View style={styles.roleButton}>
          <Button
            title="Submit Preferences"
            onPress={() => {
              const preferences = getPreferences(preferenceData, selections)
              navigation.navigate('JobListScreen', { preferences })
            }}
          />
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
  },

  h1_text: {
    fontSize: 36,
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
  },
})

export default DeveloperPreferenceSelectionScreen
