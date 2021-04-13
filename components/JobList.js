import React from 'react'
import { ScrollView } from 'react-native'
import Job from './Job'

const JobList = ({ jobs, view, matched }) => {
  return (
    <ScrollView>
      {jobs.map((job, i) => (
        <Job key={i} view={view} job={job} matched={matched[i]} />
      ))}
    </ScrollView>
  )
}

export default JobList
