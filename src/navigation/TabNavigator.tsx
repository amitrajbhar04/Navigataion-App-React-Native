import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import NotificationsStack from './NotificationsStack';
import ProfileStack from './ProfileStack';
import { TabParamList } from './types';
import { colors } from '../theme';

const Tab = createBottomTabNavigator<TabParamList>();

const TAB_ICONS: Record<string, { focused: string; unfocused: string }> = {
  HomeTab: { focused: 'home', unfocused: 'home-outline' },
  SearchTab: { focused: 'search', unfocused: 'search-outline' },
  NotificationsTab: { focused: 'notifications', unfocused: 'notifications-outline' },
  ProfileTab: { focused: 'person', unfocused: 'person-outline' },
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopColor: colors.border,
          backgroundColor: colors.white,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        tabBarIcon: ({ color, size, focused }) => {
          const icons = TAB_ICONS[route.name];
          const name = focused ? icons.focused : icons.unfocused;
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{ tabBarLabel: 'Search' }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsStack}
        options={{ tabBarLabel: 'Alerts' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}