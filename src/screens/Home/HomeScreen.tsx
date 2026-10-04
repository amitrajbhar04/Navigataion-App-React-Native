import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import AppButton from '../../components/common/AppButton';
import { colors, typography, spacing } from '../../theme';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>
      <Text style={styles.subtitle}>
        Tap a product below to navigate with params.
      </Text>

      <AppButton
        title="View Product #42"
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: '42',
            title: 'Wireless Headphones',
          })
        }
        fullWidth
        style={{ marginTop: spacing.lg }}
      />

      <AppButton
        title="View Product #99"
        variant="outline"
        onPress={() =>
          navigation.navigate('ProductDetails', {
            productId: '99',
            title: 'Smart Watch',
          })
        }
        fullWidth
        style={{ marginTop: spacing.sm }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  title: { ...typography.h1, color: colors.text, marginTop: spacing.lg },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
});