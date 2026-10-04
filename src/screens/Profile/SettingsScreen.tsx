import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>
      <Text style={styles.subtitle}>Add toggles, theme switcher, etc. here.</Text>
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