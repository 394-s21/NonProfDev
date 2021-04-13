import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Form from '../components/Form'

const NonprofContactInfoScreen = ({ route, navigation }) => {
  const [messageSent, setMessageSent] = useState(false)

  const view = () => {
    setMessageSent(true)
  }

  const nonprof = route.params.nonprof
  const nonprofName = nonprof.company

  const placeholder = 'Enter message to ' + nonprofName
  return (
    <SafeAreaView style={styles.container}>
      {!messageSent && (
        <Text label="Name" style={styles.name}>
          Contact {nonprofName}
        </Text>
      )}

      {messageSent ? (
        <Text label="Name" style={styles.name}>
          Message succesfully sent to {nonprofName}!
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
  name: {
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

export default NonprofContactInfoScreen
