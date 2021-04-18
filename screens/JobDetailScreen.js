import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { nonProfsData } from '../utils/nonProfData'

const Field = ({ label, value }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.field}>{value}</Text>
    </View>
  )
}

const jobProps = {
  role: 'Role',
  descrip: 'Description',
  weeklyTime: 'Weekly Time',
  languages: 'Languages',
}

const companyProps = {
  logo: "Logo",
  company: 'Name',
  title: 'Project',
  descrip: 'Description',
  industry: 'Industry',
  length: 'Project Duration',
  url: 'URL',
  
}

const JobDetailScreen = ({ route, navigation }) => {
  const view = (nonprof) => {
    navigation.navigate('NonprofContactInfoScreen', { nonprof })
  }

  const job = route.params.job
  const nonprof = nonProfsData.nonprofits.filter(
    (obj) => obj.id === job.companyId
  )[0]

  return (
    <SafeAreaView style={styles.container}>
      <Text label="Name" style={styles.name}>
        {job.title}
      </Text>
      <ScrollView>
        {Object.keys(jobProps).map(
          (key) =>
            job[key] && (
              <Field key={key} label={jobProps[key]} value={job[key]} />
            )
        )}
        <Text label="Name" style={styles.name}>
          About the non-profit
        </Text>
        {Object.keys(companyProps).map(
          (key) => 
          (<React.Fragment> 
            {key==="logo" ? 
            (<Image style={styles.developerImage} source={{ uri: nonprof["logo"]}} />):
            <Field key={key} label={companyProps[key]} value={nonprof[key]} />}
            </React.Fragment>)
            
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => view(nonprof)}
      >
        <Text style={styles.connectText}>Connect</Text>
      </TouchableOpacity>
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

export default JobDetailScreen
