import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import DeveloperList from './components/DeveloperList'
import { data } from './utils/data'
import { getFuse } from './utils/search'

const SearchScreen = () => {
  const [search, updateSearch] = useState('')

  // Currently hardcoded data
  const [developers, setDevelopers] = useState(data.developers)

  // Filtered list of developers
  const [developersShown, setDevelopersShown] = useState(developers)

  // Hacky search with fuse.js
  const fuse = getFuse(developers)
  const handleSearch = (search) => {
    updateSearch(search)
    setDevelopersShown(fuse.search(search).map((v) => v.item))
  }

  return (
    <SafeAreaView>
      <SearchBar
        placeholder="Search for skill/location..."
        onChangeText={handleSearch}
        value={search}
      />
      <DeveloperList developers={developersShown} />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <SearchScreen />
    //<View style={styles.container}>
    //<Text h1 style={styles.h1_text}>
    //NonProfDev
    //</Text>
    //<Text h3 style={styles.h3_text}>
    //A simple, intuitive platform to connect non-profit organizations with
    //passionate web developers
    //</Text>
    //<Text h3 style={styles.h3_text}>
    //Created by the CS 394 Red Team
    //</Text>
    //<Text h4 style={styles.h4_text}>
    //Benjamin Nober, Chris Song, Jacob Wat, Linus Okoth, Mason Brachmann,
    //Tiger Nie, Zaddeen Benaissa
    //</Text>
    //<StatusBar style="auto" />
    //</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userContainer: {
    flex: 1,
    alignItems: 'center',
  },

  h1_text: {
    fontSize: 48,
    marginBottom: 25,
  },
  h3_text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  h4_text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
})
