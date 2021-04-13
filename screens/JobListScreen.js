import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
//import { SearchBar } from 'react-native-elements'
import JobList from '../components/JobList'
import { jobArray, nonProfsData } from '../utils/nonProfData'
//import { getFuse } from '../utils/search'

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
)

const JobDisplayScreen = ({ route, navigation }) => {
  const preferences = route.params.preferences
  //const [search, updateSearch] = useState('')

  // Currently hardcoded data
  const [jobs, setJobs] = useState(jobArray.jobs)

  // Hacky match. TODO: Fix later! This is a classic AI pattern matching problem...
  const isMatch = (job) => {
    let matchBool = true
    for (let key in preferences) {
      // job key
      if (job[key] !== undefined) {
        if (
          preferences[key].length !== 0 &&
          preferences[key].includes(job[key])
        ) {
          matchBool = matchBool && true
        } else {
          matchBool = false
        }
        // company key
      } else {
        const nonprof = nonProfsData.nonprofits[job.companyId] // TODO: key instead of index
        if (
          preferences[key].length !== 0 &&
          preferences[key].includes(nonprof[key])
        ) {
          matchBool = matchBool && true
        } else {
          matchBool = false
        }
      }
    }
    return matchBool
  }

  const getOrderedJobs = (jobs) => {
    const matchedJobs = []
    const otherJobs = []

    jobs.map((job) => {
      if (isMatch(job)) {
        matchedJobs.push(job)
      } else {
        otherJobs.push(job)
      }
    })

    const orderedJobs = matchedJobs.concat(otherJobs)

    const matchMask = new Array(jobs.length)
    let i = 0
    for (i; i < matchedJobs.length; i++) {
      matchMask[i] = true
    }
    for (i; i < jobs.length; i++) {
      matchMask[i] = false
    }
    return [orderedJobs, matchMask]
  }

  const [orderedJobs, matchMask] = getOrderedJobs(jobs)

  // Filtered list of jobs
  const [jobsShown, setJobsShown] = useState(orderedJobs)
  const [matched, setMatched] = useState(matchMask)

  // Hacky search with fuse.js
  //const fuse = getFuse(jobs)
  //const handleSearch = (search) => {
  //updateSearch(search)
  //search === ''
  //? setJobsShown(jobs)
  //: setJobsShown(fuse.search(search).map((v) => v.item))
  //}

  // View job detail
  const view = (job) => {
    navigation.navigate('JobProfileScreen', { job })
  }

  return (
    <SafeAreaView style={styles.container}>
      <JobList jobs={jobsShown} view={view} matched={matched} />
      <StatusBar style="auto" hidden="false" barStyle="dark-content" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#D7EAF9',
  },
  bannerStyle: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#cc0000ff',
    fontSize: 28,
  },
})

export default JobDisplayScreen
