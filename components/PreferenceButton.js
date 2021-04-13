import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const PreferenceButton = ({select, buttonText, isSelected}) => (
  <TouchableOpacity onPress={select} style={styles[isSelected ? 'preferenceButtonSelected' : 'preferenceButton']}>
    <Text style={styles.preferenceText}>
      {buttonText}
    </Text>
  </TouchableOpacity>
);

const preferenceButtonBase = {
  borderRadius: 5,
  margin: 10,
  height: 40,
  minWidth: 90,
  maxWidth: 90,
};

const styles = StyleSheet.create({
  preferenceButton: {
    ...preferenceButtonBase,
    backgroundColor: '#d3d3d3',
  },
  preferenceText:{
    flex: 1,
    justifyContent: 'center',
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  preferenceButtonSelected:{
    ...preferenceButtonBase,
    backgroundColor: '#004a99',
  },

});

export default PreferenceButton