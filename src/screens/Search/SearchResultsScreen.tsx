import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchStackParamList } from '../../navigation/types';
import { colors, typography, spacing } from '../../theme';

type Props = NativeStackScreenProps<SearchStackParamList, 'SearchResults'>;

export default function SearchResultsScreen({ route }: Props) {
  const { query } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results for "{query}"</Text>
      <Text style={styles.subtitle}>
        (Hook this up to your search API)
      </Text>
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