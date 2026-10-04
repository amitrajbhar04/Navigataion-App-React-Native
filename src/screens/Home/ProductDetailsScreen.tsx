import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import AppButton from '../../components/common/AppButton';
import { colors, typography, spacing } from '../../theme';

type Props = NativeStackScreenProps<HomeStackParamList, 'ProductDetails'>;

export default function ProductDetailsScreen({ route, navigation }: Props) {
  const { productId, title } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>Product ID</Text>
      <Text style={styles.value}>{productId}</Text>

      <AppButton
        title="← Go Back"
        variant="outline"
        onPress={() => navigation.goBack()}
        fullWidth
        style={{ marginTop: spacing.xl }}
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
  title: { ...typography.h1, color: colors.text, marginBottom: spacing.lg },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  value: { ...typography.h3, color: colors.text, marginTop: spacing.xs },
});