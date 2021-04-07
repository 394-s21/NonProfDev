import React from 'react'
import { StyleSheet, 
        Image, 
        Text, 
        TouchableOpacity, 
        View, 
        Dimensions } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

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
      <Text style={styles.developerName}>{developer.name}</Text>
      <Text style={styles.developerLocation}>{developer.location}</Text>
      <Text style={styles.developerRole}>{developer.role}</Text>
      <Text style={styles.developerSkills}>Skills: {developer.skills.join(', ')}</Text>
      
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
  }, 
  developerName: {
    fontWeight: "bold", 
    fontSize: 14
  }, 
  developerLocation: {
    fontWeight: "300", 
    fontSize: 13
  }, 
  developerRole: {
    fontStyle: "italic",
    fontSize: 13
  },
  developerSkills: {
    fontSize: 13
  }
})

export default Developer
