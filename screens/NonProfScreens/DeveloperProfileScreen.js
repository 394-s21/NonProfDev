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

const Field = ({ label, value }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.field}>{value}</Text>
    </View>
  )
}

const DeveloperProfileScreen = ({ route, navigation }) => {
  const developer = route.params.developer
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.developerImage} source={{ uri: developer.pic }} />
      <Text label="Name" style={styles.developerName}>
        {' '}
        {developer.name}{' '}
      </Text>
      <ScrollView>
        <Text style={styles.developerLocation}>{developer.location}</Text>
        <Text style={styles.developerRole}>{developer.role}</Text>
        {/* <Text style={styles.developerBio}>
          {developer.Bio}
        </Text> */}
        <Field label="Bio" value={developer.Bio} style={styles.developerBio} />
        <Field
          label="Skills"
          value={developer.skills.join(', ')}
          style={styles.developerSkills}
        />
        <Field
          label="Email"
          value={developer.name.toLowerCase() + "@gmail.com"}
          style={styles.developerSkills}
        />
        <Text style={styles.headerText}> - Looking For - </Text>
        <Field
          label="Weekly Time Commitment"
          value={mapWeeklyTime(developer.weeklyTime).join('\n')}
          style={styles.developerSkills}
        />
        <Field
          label="Project Length Commitment"
          value={mapProjectLength(developer.projectLength).join('\n')}
          style={styles.developerSkills}
        />
        <Field
          label="Desired Team Size"
          value={mapTeamSize(developer.teamSize).join('\n')}
          style={styles.developerSkills}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const weeklyTimes = [
  'Less Than 5 Hours Per Week',
  '5-10 Hours Per Week',
  '10+ Hours Per Week',
]

const mapWeeklyTime = (devTime) => {
  var returnArr = []
  for (var i = 0; i < devTime.length; i++) {
    returnArr.push(weeklyTimes[devTime[i]])
  }

  return returnArr
}

const projectLengths = ['Less Than 1 Month', '1-3 Months', '3+ Months']

const mapProjectLength = (projTime) => {
  var returnArr = []
  for (var i = 0; i < projTime.length; i++) {
    returnArr.push(projectLengths[projTime[i]])
  }

  return returnArr
}

const teamSizes = ['Solo', '2-3 Member Team', '3+ Member Team']

const mapTeamSize = (teamSize) => {
  var returnArr = []
  for (var i = 0; i < teamSize.length; i++) {
    returnArr.push(teamSizes[teamSize[i]])
  }

  return returnArr
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
  headerText: {
    // fontWeight: 'bold',
    textAlign: 'center',
    // textDecorationLine: 'underline',
    fontSize: 22,
    marginBottom: 10,
  },
  developerName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  developerLocation: {
    textAlign: 'center',
    fontSize: 18,
  },
  developerRole: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
    fontSize: 16,
  },
  developerBio: {
    textAlign: 'center',
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

export default DeveloperProfileScreen
