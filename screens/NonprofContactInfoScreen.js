import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Form from '../components/Form'

const NonprofContactInfoScreen = ({ route, navigation }) => {
  const [messageSent, setMessageSent] = useState(false)

  const headOut = () => {
    navigation.navigate('JobListScreen')
  }

  const letter = `Hi,

  My name is ________, and I am a ___ year student developer interested in joining your project team. I am most interested in working as a  ______ . Your project particularly interests me because of _____Of course, I'd be happy to answer any questions or pass along additional information that might be helpful
  
  Thank you for your time and consideration, and I look forward to hearing back from you soon.
  
  Best,
  ____________`

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
        <View>
          <Text label="Name" style={styles.name}>
            Message succesfully sent to {nonprofName}!
          </Text>
          <TouchableOpacity
            style={styles.connectButton}
            onPress={() => {
              view()
              headOut()
            }}
          >
            <Text style={styles.connectText}>Return to Non-Profit List</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView>
          <Form initialValues={{ message: letter }}>
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
