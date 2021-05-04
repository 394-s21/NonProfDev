import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SearchScreen from './screens/NonProfScreens/SearchScreen'
import DeveloperProfileScreen from './screens/NonProfScreens/DeveloperProfileScreen'
import ChooseAppViewScreen from './screens/ChooseAppViewScreen'
import DeveloperPreferenceSelectionScreen from './screens/DeveloperScreens/DeveloperPreferenceSelectionScreen'
import JobListScreen from './screens/DeveloperScreens/JobListScreen'
import JobDetailScreen from './screens/DeveloperScreens/JobDetailScreen'
import NonprofContactInfoScreen from './screens/DeveloperScreens/NonprofContactInfoScreen'
import RegisterScreen from './screens/RegisterScreen'
import UserContext from './contexts/UserContext'
import { Button, Text, View } from 'react-native'
import { firebase } from './firebase'
import NonProfHomeScreen from './screens/NonProfScreens/NonProfHomeScreen'
import ViewMessageScreen from './screens/NonProfScreens/ViewMessagesScreen'
import NonProfCreateJobScreen from './screens/NonProfScreens/NonProfCreateJobScreen'

const Stack = createStackNavigator()

export default function App() {
  const [user, setUser] = useState({ role: 'admin' })

  const [auth, setAuth] = useState()

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid)
      const handleData = (snap) => {
        setUser({ uid: auth.uid, ...snap.val() })
      }
      db.on('value', handleData, (error) => alert(error))
      return () => {
        db.off('value', handleData)
      }
    } else {
      setUser(null)
    }
  }, [auth])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth)
    })
  }, [])

/*
const SignInButton = ({ navigation, user }) =>
  user && user.uid ? (
    <Button
      title="Logout"
      color="#f28888"
      onPress={() => {
        firebase.auth().signOut()
        alert('Successfully logged out!')
        navigation.navigate('ChooseAppViewScreen')
      }}
    />
  ) : (
    <Button
      title="Sign In"
      color="#448aff"
      onPress={() => {
        alert('Please indicate whether you are a developer or nonprofit before logging in.')
      }}
    />
  )
*/

const LogoutButton = ({ navigation }) => (
  <View style={{marginRight: 10}}>
     <Button
      title="Logout"
      color="#f28888"
      onPress={() => {
        firebase.auth().signOut()
        navigation.navigate('ChooseAppViewScreen')
        alert('Successfully logged out!')
      }}
    />
  </View>
)
   
  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ChooseAppViewScreen"
            component={ChooseAppViewScreen}
            options={({ title: 'NonProfDev' })}
          />
          <Stack.Screen
            name="NonProfHomeScreen"
            component={NonProfHomeScreen}
            options={({ navigation }) => ({
              title: 'NonProfit Home Screen',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
          <Stack.Screen
            name="ViewMessageScreen"
            component={ViewMessageScreen}
            options={({ navigation }) => ({
              title: 'Messages',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
          <Stack.Screen
            name="DeveloperPreferenceSelectionScreen"
            component={DeveloperPreferenceSelectionScreen}
            options={({ navigation }) => ({
              title: 'Preference Selection',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
          <Stack.Screen
            name="NonProfCreateJobScreen"
            component={NonProfCreateJobScreen}
            options={({ navigation }) => ({
              title: 'Create Job',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />

          <Stack.Screen
            name="JobListScreen"
            component={JobListScreen}
            options={({ navigation }) => ({
              title: 'Available Jobs',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={({title: 'Login/Register'})}
          />
          <Stack.Screen
            name="JobDetailScreen"
            component={JobDetailScreen}
            options={({ navigation }) => ({
              title: 'JobDetailScreen',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
          <Stack.Screen
            name="NonprofContactInfoScreen"
            component={NonprofContactInfoScreen}
            options={({ navigation }) => ({
              title: 'NonProfit Contact Info',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={({ navigation }) => ({
              title: 'Developer Search',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
          <Stack.Screen
            name="DeveloperProfileScreen"
            component={DeveloperProfileScreen}
            options={({ navigation }) => ({
              title: 'Developer Profile',
              headerRight: () => (
                user
                ?
                <LogoutButton navigation={navigation} />
                :
                <Text />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  )
}