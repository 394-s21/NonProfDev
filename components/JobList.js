import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import Job from './Job'

const JobList = ({ jobs, view, nMatched, nonProfits }) => {
  console.log('Matched jobs:', jobs.slice(0, nMatched))
  console.log('Unmatched jobs:', jobs.slice(nMatched))
  console.log('Number of matches', nMatched)
  return (
    <ScrollView>
      <Text style={styles.headerText}>Best Fits</Text>
      {jobs.slice(0, nMatched).map((job, i) => (
        <Job
          key={i}
          view={view}
          job={job}
          matched={true}
          nonProfit={
            job.companyId in nonProfits ? nonProfits[job.companyId] : {}
          }
        />
      ))}
      <Text style={styles.headerText}>You Might Also Like</Text>
      {jobs.slice(nMatched).map((job, i) => (
        <Job
          key={i}
          view={view}
          job={job}
          matched={false}
          nonProfit={
            job.companyId in nonProfits ? nonProfits[job.companyId] : {}
          }
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
})

export default JobList
