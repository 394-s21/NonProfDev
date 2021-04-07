import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

// TODO: avatar/profile picture is currently hardcoded
const Developer = ({ developer, view }) => (
  <TouchableOpacity
    style={styles.developerButton}
    onPress={() => {
      view(developer)
    }}
  >
    <Image
      source={{
        uri:
          'https://www.routeone.com/sites/default/files/default_images/default-person.png',
      }}
    />
    <Text>{developer.name}</Text>
    <Text>{developer.location}</Text>
    <Text>{developer.role}</Text>
    <Text>{developer.skills.join(', ')}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  developerButton: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent: 'center',
    //alignItems: 'center',
    margin: 10,
    padding: 10,
  },
})

export default Developer
