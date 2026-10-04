import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import NotificationDetailScreen from '../screens/Notifications/NotificationDetailsScreen';
import { NotificationsStackParamList } from './types';

const Stack = createNativeStackNavigator<NotificationsStackParamList>();

export default function NotificationsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
        options={{ headerShown: true, title: 'Notification' }}
      />
    </Stack.Navigator>
  );
}