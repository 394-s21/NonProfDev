import React from 'react'
import { StyleSheet, 
        Text, 
        TouchableOpacity, 
        View, 
        Dimensions } from 'react-native'
import {nonprofs} from '../utils/nonProfData'

// TODO: avatar/profile picture is currently hardcoded
const Job = ({ job, view, prefs }) => {
  // TODO: maybe scale the font size based on the screen width/height?
  const scaleFont = () => {
    const width = Dimensions.get('window').width 
    return (width > 500 ? 16 : 12)
  }

  var matched = (prefs['pref1'] === job.role) || 
                (prefs['pref2'] === nonprofs.nonprofits[job.companyId].industry) ||
                (prefs['pref3'] === nonprofs.nonprofits[job.companyId].length) ||
                (prefs['pref1'] === job.weeklyTime);

  return (
    <TouchableOpacity
    style={matched? styles.jobMatched : styles.jobButton}
    onPress={() => {
      view(job)
    }}
  >
    <View style={styles.jobInfo}>
      <Text style={styles.jobName}>{job.title}</Text>
      <Text style={styles.jobCompany}>{companyParser(job.companyId)}</Text>
      <Text style={styles.jobTime}>{timeParser(job.weeklyTime)}</Text>
    </View>
  </TouchableOpacity>
  )
}

const timeParser = (timeInt) => {
    if (timeInt === 0) {
        return "<5 hrs/week"
    }
    else if (timeInt === 1) {
        return "5-10 hrs/week"
    }
    else {
        return "10+ hrs/week"
    }
}

const companyParser = (companyInt) => {
    return nonprofs.nonprofits[companyInt].company;
}

const industryParser = (companyInt) => {
    return nonprofs.nonprofits[companyInt].industry;
}

const styles = StyleSheet.create({
  jobButton: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#DFDFDF',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
  jobMatched: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: "green",
  },

  jobInfo : {
    flexDirection: 'column',
    flexShrink: 1,
  }, 
  jobName: {
    fontWeight: "bold", 
    fontSize: 18,
  }, 
  jobCompany: {
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 10,
  },
  jobTime: {
    fontWeight: "300", 
    fontSize: 16,
  }, 
})

export default Job
