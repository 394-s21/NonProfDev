import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import DeveloperList from '../../components/DeveloperList'
import { firebase } from '../../firebase'
import { getFuse } from '../../utils/search'

const SearchScreen = ({ navigation }) => {
  const [search, updateSearch] = useState('')
  const [developers, setDevelopers] = useState([])
  // Filtered list of developers
  const [developersShown, setDevelopersShown] = useState(developers)

  useEffect(() => {
    const db = firebase.database().ref('developers')
    const handleData = (snap) => {
      if (snap.val()) {
        const val = snap.val()
        const developersList = Object.values(val)
        console.log(developersList)
        setDevelopers(developersList)
        setDevelopersShown(developersList)
      }
    }
    db.on('value', handleData, (error) => console.log(error))
    return () => db.off('value', handleData)
  }, [])

  // Hacky search with fuse.js
  const fuse = getFuse(developers)
  const handleSearch = (search) => {
    updateSearch(search)
    search === ''
      ? setDevelopersShown(developers)
      : setDevelopersShown(fuse.search(search).map((v) => v.item))
  }

  // View developer detail
  const view = (developer) => {
    navigation.navigate('DeveloperProfileScreen', { developer })
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search for skills/location..."
        onChangeText={handleSearch}
        value={search}
        lightTheme={true}
      />
      <DeveloperList developers={developersShown} view={view} />
      <StatusBar style="auto" hidden="false" barStyle="dark-content" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#D7EAF9',
  },
  bannerStyle: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#cc0000ff',
    fontSize: 28,
  },
})

export default SearchScreen
