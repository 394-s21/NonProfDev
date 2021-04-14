import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import { nonProfsData } from '../utils/nonProfData'

const Job = ({ job, view, matched }) => {
  // TODO: maybe scale the font size based on the screen width/height?
  const scaleFont = () => {
    const width = Dimensions.get('window').width
    return width > 500 ? 16 : 12
  }

  return (
    <TouchableOpacity
      style={matched ? styles.jobMatched : styles.jobButton}
      onPress={() => {
        view(job)
      }}
    >
      <View style={styles.jobInfo}>
        <Text style={styles.jobName}>{job.title}</Text>
        <Text style={styles.jobCompany}>{companyParser(job.companyId)}</Text>
        <Text style={styles.jobTime}>{job.weeklyTime}</Text>
      </View>
    </TouchableOpacity>
  )
}

const timeParser = (timeInt) => {
  if (timeInt === 0) {
    return '<5 hrs/week'
  } else if (timeInt === 1) {
    return '5-10 hrs/week'
  } else {
    return '10+ hrs/week'
  }
}

const companyParser = (companyInt) => {
  return nonProfsData.nonprofits[companyInt].company
}

const industryParser = (companyInt) => {
  return nonProfsData.nonprofits[companyInt].industry
}

const styles = StyleSheet.create({
  jobButton: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  jobMatched: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'green',
    shadowColor: 'green',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 2,
      width: 2
    },
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    // backgroundColor: '#289C28', // old (too dark) background color
    // backgroundColor: '#90ee90', // new (maybe too light?) green color
    backgroundColor: 'white',
  },
  jobInfo: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  jobName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  jobCompany: {
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 10,
  },
  jobTime: {
    fontWeight: '300',
    fontSize: 16,
  },
})

export default Job
