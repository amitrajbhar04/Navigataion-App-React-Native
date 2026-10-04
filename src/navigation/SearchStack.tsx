import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/Search/SearchScreen';
import SearchResultsScreen from '../screens/Search/SearchResultsScreen';
import { SearchStackParamList } from './types';

const Stack = createNativeStackNavigator<SearchStackParamList>();

export default function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{ headerShown: true, title: 'Results' }}
      />
    </Stack.Navigator>
  );
}