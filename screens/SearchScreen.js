import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'
import DeveloperList from '../components/DeveloperList'
import { data } from '../utils/data'
import { getFuse } from '../utils/search'

const Banner = ({ title }) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
)

const SearchScreen = ({ navigation }) => {
  const [search, updateSearch] = useState('')

  // Currently hardcoded data
  const [developers, setDevelopers] = useState(data.developers)

  // Filtered list of developers
  const [developersShown, setDevelopersShown] = useState(developers)

  // Hacky search with fuse.js
  const fuse = getFuse(developers)
  const handleSearch = (search) => {
    updateSearch(search);
    search === '' ? 
    setDevelopersShown(developers) : 
    setDevelopersShown(fuse.search(search).map((v) => v.item));
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
      <StatusBar 
        style="auto"
        hidden="false"
        barStyle="dark-content" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  bannerStyle: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#cc0000ff',
    fontSize: 28
  },
})

export default SearchScreen
