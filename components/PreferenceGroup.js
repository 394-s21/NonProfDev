import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PreferenceButton from './PreferenceButton'

const PreferenceGroup = ({ title, options, toggleSelect, selection }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.buttonGroup}>
      {options.map((name, i) => (
        <PreferenceButton
          key={i}
          select={() => toggleSelect(i)}
          buttonText={name}
          isSelected={selection[i]}
        />
      ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default PreferenceGroup
