import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Field = ({ label, value }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.field}>{value}</Text>
    </View>
  )
}

const DeveloperProfileScreen = ({ route }) => {
  const developer = route.params.developer
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text label="Name" style={styles.developerName}> {developer.name} </Text>
        <Field label="Location" value={developer.location} style={styles.developerLocation}/>
        <Field label="Bio" value={developer.Bio} style={styles.developerBio}  />
        <Field label="Role" value={developer.role} style={styles.developerRole} />
        <Field label="Skills" value={developer.skills.join(', ')} style={styles.developerSkills} />
      </ScrollView>
      
      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectText}>Connect</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  field: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 18,
  },
  fieldContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  developerName: {
    fontSize: 24,
    marginBottom: 10,
  },
  connectButton: {
    margin: 30,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
  connectText: {
    fontSize: 22,
    fontWeight: 500,
  }
})

export default DeveloperProfileScreen
