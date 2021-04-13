import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import JobList from '../components/JobList'
import { jobArray } from '../utils/nonProfData'
import { getFuse } from '../utils/search'

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
)

const JobDisplayScreen = ({ route, navigation }) => {

  const selections = route.params.selections;
  const prefDict = {
    'pref1': "",
    'pref2': "",
    'pref3': "",
    'pref4': "",
  }

  switch (selections['pref1']) {
    case 0:
      prefDict['pref1'] = "Web Design"
    case 1:
      prefDict['pref1'] = "Web Development"
    default:
      prefDict['pref1'] = "Backend Development"
  }

  switch (selections['pref2']) {
    case 0:
      prefDict['pref2'] = "Community Leadership"
    case 1:
      prefDict['pref2'] = "Education"
    default:
      prefDict['pref2'] = "Religion"
  }

  const [search, updateSearch] = useState('')

  // Currently hardcoded data
  const [jobs, setJobs] = useState(jobArray.jobs)

  // Filtered list of jobs
  const [jobsShown, setJobsShown] = useState(jobs)

  // Hacky search with fuse.js
  const fuse = getFuse(jobs)
  const handleSearch = (search) => {
    updateSearch(search);
    search === '' ? 
    setJobsShown(jobs) : 
    setJobsShown(fuse.search(search).map((v) => v.item));
  }

  // View job detail
  const view = (job) => {
    navigation.navigate('JobProfileScreen', { job })
  }

  return (
    <SafeAreaView style={styles.container}>
      <JobList jobs={jobsShown} prefs={prefDict} view={view} />
      <StatusBar 
        style="auto"
        hidden="false"
        barStyle="dark-content" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: "#D7EAF9",
  },
  bannerStyle: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#cc0000ff',
    fontSize: 28
  },
})

export default JobDisplayScreen
