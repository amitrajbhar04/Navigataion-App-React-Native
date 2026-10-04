import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NotificationsStackParamList } from '../../navigation/types';
import { colors, typography, spacing, radius } from '../../theme';

type Props = NativeStackScreenProps<NotificationsStackParamList, 'Notifications'>;

const MOCK_NOTIFICATIONS = [
  { id: '1', title: 'Welcome to MyApp!', body: 'Thanks for joining.' },
  { id: '2', title: 'New message', body: 'You have a new message.' },
  { id: '3', title: 'Update available', body: 'A new version is ready.' },
];

export default function NotificationsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>
      <FlatList
        data={MOCK_NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: spacing.md }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('NotificationDetail', {
                id: item.id,
                title: item.title,
              })
            }
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardBody}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: { ...typography.h2, color: colors.text, marginBottom: spacing.md },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: { ...typography.body, fontWeight: '600', color: colors.text },
  cardBody: { ...typography.bodySmall, color: colors.textSecondary, marginTop: 4 },
});