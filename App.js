import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SearchScreen from './screens/SearchScreen'
import AboutScreen from './screens/AboutScreen'
import DeveloperProfileScreen from './screens/DeveloperProfileScreen'
import ChooseAppViewScreen from './screens/ChooseAppViewScreen'
import DeveloperPreferenceSelectionScreen from './screens/DeveloperPreferenceSelectionScreen'
import DeveloperContactInfoScreen from './screens/DeveloperContactInfoScreen'
import JobListScreen from './screens/JobListScreen'
import JobDetailScreen from './screens/JobDetailScreen'
import NonprofContactInfoScreen from './screens/NonprofContactInfoScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChooseAppViewScreen"
          component={ChooseAppViewScreen}
          options={{ title: 'NonProfDev' }}
        />
        <Stack.Screen
          name="DeveloperPreferenceSelectionScreen"
          component={DeveloperPreferenceSelectionScreen}
          options={{ title: 'Preference Selection' }}
        />
        <Stack.Screen
          name="JobListScreen"
          component={JobListScreen}
          options={{ title: 'Matched Jobs' }}
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
          name="AboutScreen"
          component={AboutScreen}
          options={{ title: 'About' }}
        />
        <Stack.Screen
          name="DeveloperContactInfoScreen"
          component={DeveloperContactInfoScreen}
          options={{ title: 'Contact Developer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
