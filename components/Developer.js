import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

// TODO: avatar/profile picture is currently hardcoded
const Developer = ({ developer, view }) => {
  // TODO: maybe scale the font size based on the screen width/height?
  const scaleFont = () => {
    const width = Dimensions.get('window').width
    return width > 500 ? 16 : 12
  }

  return (
    <TouchableOpacity
      style={styles.developerButton}
      onPress={() => {
        view(developer)
      }}
    >
      <Image style={styles.developerImage} source={{ uri: developer.pic }} />
      <View style={styles.developerInfo}>
        <Text style={styles.developerName}>{developer.name}</Text>
        <Text style={styles.developerLocation}>{developer.location}</Text>
        <Text style={styles.developerRole}>{developer.role}</Text>
        <Text style={styles.developerSkills}>
          Skills: {developer.skills.join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  developerButton: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#DFDFDF',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  developerImage: {
    width: 75,
    height: 100,
    marginRight: 10,
  },
  developerInfo: {
    flexDirection: 'column',
    flexShrink: 1,
  },
  developerName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  developerLocation: {
    fontWeight: '300',
    fontSize: 16,
  },
  developerRole: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  developerSkills: {
    marginTop: 10,
    fontSize: 16,
  },
})

export default Developer
