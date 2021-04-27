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
  logo: 'Logo',
  company: 'Name',
  title: 'Project',
  descrip: 'Description',
  industry: 'Industry',
  length: 'Project Duration',
}

const JobDetailScreen = ({ route, navigation }) => {
  const job = route.params.job
  const nonProfit = route.params.nonProfit

  console.log('job: ', job)
  console.log('nonProfit: ', nonProfit)

  const view = (nonprof) => {
    navigation.navigate('NonprofContactInfoScreen', { nonprof })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text label="Name" style={styles.name}>
        {job.title}
      </Text>
      <ScrollView>
        {Object.keys(jobProps).map(
          (key, i) =>
            job[key] && (
              <Field
                key={i}
                label={jobProps[key]}
                value={Array.isArray(job[key]) ? job[key].join(', ') : job[key]}
              />
            )
        )}
        <Text label="Name" style={styles.name}>
          About the non-profit
        </Text>
        {Object.keys(companyProps).map((key, i) => (
          <React.Fragment>
            {key === 'logo' ? (
              <Image
                style={styles.developerImage}
                source={{ uri: nonProfit.logo }}
              />
            ) : (
              <Field key={i} label={companyProps[key]} value={nonProfit[key]} />
            )}
          </React.Fragment>
        ))}
        <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL(nonProfit.url)}>
          Visit Our Website!
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => view(nonProfit)}
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
