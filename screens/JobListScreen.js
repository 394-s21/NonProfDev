import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import JobList from '../components/JobList'
import { firebase } from '../firebase'
import JobListContext from '../contexts/JobListContext'

const JobDisplayScreen = ({ route, navigation }) => {
  const preferences = route.params.preferences

  const [jobs, setJobs] = useState([])
  const [nonProfits, setNonProfits] = useState({})

  useEffect(() => {
    const db = firebase.database().ref()
    const handleData = (snap) => {
      if (snap.val()) {
        const val = snap.val()
        const jobsList = Object.values(val.jobs)
        setJobs(jobsList)
        setNonProfits(val.nonprofits)
      }
    }
    db.on('value', handleData, (error) => console.log(error))
    return () => db.off('value', handleData)
  }, [])

  // As long as one criteria matches, consider the job a match
  // Also include number of criteria that match in case we might want to rank ...
  // ... the jobs later on
  const isMatchBasic = (job) => {
    const nonprofit = nonProfits[job.companyId]
    if (!nonprofit) return false

    const matches = [
      preferences['industry'].includes(nonprofit.industry),
      preferences['length'].includes(nonprofit.length),
      preferences['role'].includes(job.role),
      preferences['weeklyTime'].includes(job.weeklyTime),
    ]

    const numMatches = matches.filter((match) => match).length
    return numMatches > 0
  }

  const getOrderedJobs = (jobs) => {
    const matchedJobs = []
    const otherJobs = []

    jobs.map((job) => {
      if (isMatchBasic(job) && matchedJobs.length < 0.5 * jobs.length) {
        // Use the basic matching algorithm for now
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

  // View job detail
  const view = (job) => {
    navigation.navigate('JobDetailScreen', {
      job: job,
      nonProfit: nonProfits[job.companyId],
    })
  }

  const renderJobList = () => {
    const [orderedJobs, matchMask] = getOrderedJobs(jobs)
    return (
      <JobList
        jobs={orderedJobs}
        view={view}
        matched={matchMask}
        nonProfits={nonProfits}
      />
    )
  }

  return (
    <JobListContext.Provider value={jobs}>
      <SafeAreaView style={styles.container}>
        {renderJobList()}
        <StatusBar style="auto" hidden="false" barStyle="dark-content" />
      </SafeAreaView>
    </JobListContext.Provider>
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
