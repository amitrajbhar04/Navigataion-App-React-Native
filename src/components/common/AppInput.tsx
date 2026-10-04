import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { colors, typography, radius, spacing } from '../../theme';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export default function AppInput({
  label,
  error,
  containerStyle,
  style,
  ...rest
}: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholderTextColor={colors.gray}
        style={[styles.input, error && styles.inputError, style]}
        {...rest}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: spacing.md },
  label: {
    ...typography.bodySmall,
    color: colors.text,
    marginBottom: spacing.xs,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.white,
  },
  inputError: { borderColor: colors.danger },
  error: {
    ...typography.caption,
    color: colors.danger,
    marginTop: spacing.xs,
  },
});