import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Form from '../components/Form'

const Field = ({ label, value }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.field}>{value}</Text>
    </View>
  )
}

const DeveloperContactInfoScreen = ({ route, navigation }) => {
  const [messageSent, setMessageSent] = useState(false)

  const view = () => {
    setMessageSent(true)
  }

  const developer = route.params.developer

  const placeholder = 'Enter message to ' + developer.name
  return (
    <SafeAreaView style={styles.container}>
      {!messageSent && (
        <Text label="Name" style={styles.developerName}>
          Contact {developer.name}{' '}
        </Text>
      )}

      {messageSent ? (
        <Text label="Name" style={styles.developerName}>
          Message succesfully sent to {developer.name}!{' '}
        </Text>
      ) : (
        <ScrollView>
          <Form initialValues={{ message: '' }}>
            <Form.Field
              name="message"
              leftIcon="inbox"
              placeholder={placeholder}
              autoCapitalize="none"
              autoFocus={true}
              multiline={true}
              numberOfLines={20}
            />
          </Form>
          <TouchableOpacity style={styles.connectButton} onPress={() => view()}>
            <Text style={styles.connectText}>Send Message</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  developerImage: {
    width: 200,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    marginLeft: 'auto',
    marginRight: 'auto',
    // fontWeight: 500,
  },
})

export default DeveloperContactInfoScreen
