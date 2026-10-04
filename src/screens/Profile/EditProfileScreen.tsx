import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/types';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<ProfileStackParamList, 'EditProfile'>;

export default function EditProfileScreen({ route, navigation }: Props) {
  const { userId } = route.params;
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSave = () => {
    // TODO: Call API to update user
    console.log('Saving user', userId, { name, email });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppInput label="Name" value={name} onChangeText={setName} />
      <AppInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <AppButton title="Save" onPress={handleSave} fullWidth />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
});