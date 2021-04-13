import React from 'react'
import { ScrollView } from 'react-native'
import Job from './Job'

const JobList = ({ jobs, prefs, view }) => {
  return (
    <ScrollView>
      {jobs.map((job) => (
        <Job key={job.id} view={view} job={job} prefs={prefs} />
      ))}
    </ScrollView>
  )
}

export default JobList
