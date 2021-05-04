import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Form from "../../components/Form"



const DeveloperCreateJobScreen = ({ navigation }) => {
//   const job = route.params.job
//   const nonProfit = route.params.nonProfit

//   console.log('job: ', job)
//   console.log('nonProfit: ', nonProfit)

  const view = (nonprof) => {
    navigation.navigate('NonprofContactInfoScreen', { nonprof })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text label="Name" style={styles.name}>
        Post a new Job!
      </Text>
      <ScrollView>
      <Form
        initialValues={{
            role: '',
            description: '',
            weeklyTime: '',
            languages: '',
          }}
          
          onSubmit={console.log("hemcnmxh ")}
        >
          <Form.Field
            name="role"
            placeholder="Enter role"
            autoCapitalize="none"
          />
          <Form.Field
            name="description"
            placeholder="Enter job description"
            autoCapitalize="none"
            
          />
          <Form.Field
            name="weeklyTime"
            placeholder="Enter required weekly commitment"
            autoCapitalize="none"
           
          />
           <Form.Field
            name="languages"
            placeholder="What language"
            autoCapitalize="none"
          />
          <Form.Button
            title={'Add new job'}
          />
        </Form>
      </ScrollView>
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
  developerImage: {
    width: 200,
    height: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
})

export default DeveloperCreateJobScreen

