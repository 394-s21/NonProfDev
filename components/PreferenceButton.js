import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PreferenceButton = ({select, buttonText, isSelected}) => (
  <TouchableOpacity onPress={select} style={styles[isSelected ? 'preferenceButtonSelected' : 'preferenceButton']}>
    <Text style={styles[isSelected ? 'preferenceTextSelected' : 'preferenceText']}>
      {buttonText}
    </Text>
  </TouchableOpacity>
);

const preferenceButtonBase = {
  borderRadius: 5,
  margin: 10,
  height: 50,
  minWidth: 300,
  maxWidth: 300,
};

const styles = StyleSheet.create({
  preferenceButton: {
    ...preferenceButtonBase,
    backgroundColor: '#d3d3d3',
  },
  preferenceTextSelected:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  preferenceText:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
  },
  preferenceButtonSelected:{
    ...preferenceButtonBase,
    backgroundColor: '#004a99',
  },

});

export default PreferenceButton