import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NotificationsStackParamList } from '../../navigation/types';
import { colors, typography, spacing } from '../../theme';

type Props = NativeStackScreenProps<NotificationsStackParamList, 'NotificationDetail'>;

export default function NotificationDetailScreen({ route }: Props) {
  const { id, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: { ...typography.h2, color: colors.text },
  subtitle: { ...typography.body, color: colors.textSecondary, marginTop: spacing.sm },
});