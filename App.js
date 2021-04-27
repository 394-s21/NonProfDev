import 'react-native-gesture-handler'
import React from 'react'
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
          options={{ title: 'Available Jobs' }}
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
  )
}
