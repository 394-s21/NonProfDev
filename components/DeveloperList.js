import React from 'react'
import { ScrollView } from 'react-native'
import Developer from './Developer'

const DeveloperList = ({ developers }) => {
  return (
    <ScrollView>
      {developers.map((d) => (
        <Developer
          key={d.id}
          name={d.name}
          location={d.location}
          role={d.role}
          skills={d.skills}
        />
      ))}
    </ScrollView>
  )
}

export default DeveloperList
