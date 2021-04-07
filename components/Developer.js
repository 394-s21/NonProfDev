import React from 'react'
import { StyleSheet, 
        Image, 
        Text, 
        TouchableOpacity, 
        View, 
        Dimensions } from 'react-native'

// TODO: avatar/profile picture is currently hardcoded
const Developer = ({ developer, view }) => {
  // TODO: maybe scale the font size based on the screen width/height?
  const scaleFont = () => {
    const width = Dimensions.get('window').width 
    return (width > 500 ? 16 : 12)
  }

  return (
    <TouchableOpacity
    style={styles.developerButton}
    onPress={() => {
      view(developer)
    }}
  >
    <Image
      style={styles.developerImage}
      source={{
        uri:
          'https://www.routeone.com/sites/default/files/default_images/default-person.png',
      }}
    />
    <View style={styles.developerInfo}>
      <Text>{developer.name}</Text>
      <Text>{developer.location}</Text>
      <Text>{developer.role}</Text>
      <Text>{developer.skills.join(', ')}</Text>
    </View>
  </TouchableOpacity>
  )
}

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
  developerImage: {
    width: 75,
    height: 75,
    marginRight: 10
  },
  developerInfo : {
    flexDirection: 'column',
    flexShrink: 1
  }
})

export default Developer
