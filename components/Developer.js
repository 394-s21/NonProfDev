import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'

// TODO: avatar/profile picture is currently hardcoded
const Developer = ({ developer, view }) => (
  <TouchableOpacity
    style={styles.developerButton}
    onPress={() => {
      view(developer)
    }}
  >
    <Image
      style={{width: 75, height: 75, marginRight: "1%"}}
      source={{
        uri:
          'https://www.routeone.com/sites/default/files/default_images/default-person.png',
      }}
    />
    <View style={{flexDirection: 'column'}}>
      <Text>{developer.name}</Text>
      <Text>{developer.location}</Text>
      <Text>{developer.role}</Text>
      <Text>{developer.skills.join(', ')}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  developerButton: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
})

export default Developer
