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
  // View developer detail
  const view = (developer) => {
    navigation.navigate('DeveloperContactInfoScreen', { developer })
  }

  const developer = route.params.developer
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.developerImage} source={{ uri: developer.pic }} />
      <Text label="Name" style={styles.developerName}>
        {' '}
        {developer.name}{' '}
      </Text>
      <ScrollView>
        <Field
          label="Location"
          value={developer.location}
          style={styles.developerLocation}
        />
        <Field label="Bio" value={developer.Bio} style={styles.developerBio} />
        <Field
          label="Role"
          value={developer.role}
          style={styles.developerRole}
        />
        <Field
          label="Skills"
          value={developer.skills.join(', ')}
          style={styles.developerSkills}
        />
        <Text> Looking For: </Text>
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

      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => view(developer)}
      >
        <Text style={styles.connectText}>Connect</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const weeklyTimes = ["Less Than 5 Hours Per Week", "5-10 Hours Per Week", "10+ Hours Per Week"]

const mapWeeklyTime = (devTime) =>  {
  var returnArr = [];
  for (var i=0; i < devTime.length; i++) {
    returnArr.push(weeklyTimes[devTime[i]])
  }
  
  return returnArr;
}

const projectLengths = ["Less Than 1 Month", "1-3 Months", "3+ Months"]

const mapProjectLength = (projTime) =>  {
  var returnArr = [];
  for (var i=0; i < projTime.length; i++) {
    returnArr.push(projectLengths[projTime[i]])
  }
  
  return returnArr;
}

const teamSizes = ["Solo", "2-3 Member Team", "3+ Member Team"]

const mapTeamSize = (teamSize) =>  {
  var returnArr = [];
  for (var i=0; i < teamSize.length; i++) {
    returnArr.push(teamSizes[teamSize[i]])
  }
  
  return returnArr;
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

export default DeveloperProfileScreen
