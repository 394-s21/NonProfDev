import React from 'react'
import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";

const Developer = ({name, location, role, skills}) => (
  <TouchableOpacity style={styles.developerButton}>
    <Image source={{uri: "https://www.routeone.com/sites/default/files/default_images/default-person.png"}} />
    <Text>{name}</Text>
    <Text>{location}</Text>
    <Text>{role}</Text>
    <Text>{skills.join(", ")}</Text>
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
  }
})

export default Developer
