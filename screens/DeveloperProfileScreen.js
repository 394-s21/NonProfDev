import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
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
        <Field label="Name" value={developer.name} />
        <Field label="Location" value={developer.location} />
        <Field label="Role" value={developer.role} />
        <Field label="Skills" value={developer.skills.join(', ')} />
        <Field label="Bio" value={developer.Bio} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  fieldContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
})

export default DeveloperProfileScreen
