import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SearchScreen from './screens/NonProfScreens/SearchScreen'
import DeveloperProfileScreen from './screens/NonProfScreens/DeveloperProfileScreen'
import ChooseAppViewScreen from './screens/ChooseAppViewScreen'
import DeveloperPreferenceSelectionScreen from './screens/DeveloperScreens/DeveloperPreferenceSelectionScreen'
import DeveloperContactInfoScreen from './screens/NonProfScreens/DeveloperContactInfoScreen'
import JobListScreen from './screens/DeveloperScreens/JobListScreen'
import JobDetailScreen from './screens/DeveloperScreens/JobDetailScreen'
import NonprofContactInfoScreen from './screens/DeveloperScreens/NonprofContactInfoScreen'
import RegisterScreen from './screens/registerScreen'
import UserContext from './contexts/UserContext'
import { Button } from 'react-native'
import { firebase } from './firebase'

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

  const SignInButton = ({ navigation, user }) =>
    user && user.uid ? (
      <Button
        title="Logout"
        color="#f28888"
        onPress={() => firebase.auth().signOut()}
      />
    ) : (
      <Button
        title="Sign In"
        color="#448aff"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    )

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ChooseAppViewScreen"
            component={ChooseAppViewScreen}
            options={({ navigation }) => ({
              title: 'NonProfDev'
              /*
              headerRight: () => (
                <SignInButton navigation={navigation} user={user} />
              ),
              */
            })}
          />
          <Stack.Screen
            name="DeveloperPreferenceSelectionScreen"
            component={DeveloperPreferenceSelectionScreen}
            options={{ title: 'Preference Selection' }}
          />
          <Stack.Screen
            name="JobListScreen"
            component={JobListScreen}
            options={{ title: 'Available Jobs' }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ title: 'Register' }}
          />
          <Stack.Screen
            name="JobDetailScreen"
            component={JobDetailScreen}
            options={{ title: 'Job Details' }}
          />
          <Stack.Screen
            name="NonprofContactInfoScreen"
            component={NonprofContactInfoScreen}
            options={{ title: 'Job Details' }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ title: 'NonProfDev' }}
          />
          <Stack.Screen
            name="DeveloperProfileScreen"
            component={DeveloperProfileScreen}
            options={{ title: 'Developer Profile' }}
          />

          <Stack.Screen
            name="DeveloperContactInfoScreen"
            component={DeveloperContactInfoScreen}
            options={{ title: 'Contact Developer' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  )
}
