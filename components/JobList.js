import React from 'react'
import { ScrollView } from 'react-native'
import Job from './Job'

const JobList = ({ jobs, view, matched, nonProfits }) => {
  return (
    <ScrollView>
      {jobs.map((job, i) => (
        <Job
          key={i}
          view={view}
          job={job}
          matched={matched[i]}
          nonProfit={
            job.companyId in nonProfits ? nonProfits[job.companyId] : {}
          }
        />
      ))}
    </ScrollView>
  )
}

export default JobList
