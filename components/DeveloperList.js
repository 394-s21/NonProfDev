import React from 'react'
import { ScrollView } from 'react-native'
import Developer from './Developer'

const DeveloperList = ({ developers, view }) => {
  return (
    <ScrollView>
      {developers.map((developer) => (
        <Developer key={developer.id} view={view} developer={developer} />
      ))}
    </ScrollView>
  )
}

export default DeveloperList
