import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/types';
import AppButton from '../../components/common/AppButton';
import { colors, typography, spacing } from '../../theme';

type Props = NativeStackScreenProps<ProfileStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?u=1' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john.doe@example.com</Text>

      <AppButton
        title="Edit Profile"
        onPress={() => navigation.navigate('EditProfile', { userId: '1' })}
        fullWidth
        style={{ marginTop: spacing.xl }}
      />
      <AppButton
        title="Settings"
        variant="outline"
        onPress={() => navigation.navigate('Settings')}
        fullWidth
        style={{ marginTop: spacing.sm }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: spacing.xl,
    backgroundColor: colors.grayLight,
  },
  name: { ...typography.h2, color: colors.text, marginTop: spacing.md },
  email: { ...typography.body, color: colors.textSecondary, marginTop: 4 },
});