import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';
import { colors, typography, spacing } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export default function SignupScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log({ name, email, password });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={{ marginTop: spacing.xl }}>
        <AppInput label="Name" value={name} onChangeText={setName} />
        <AppInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <AppButton title="Sign Up" onPress={handleSignup} fullWidth />
        <AppButton
                    title="I have already account"
                    variant="outline"
                    onPress={() => navigation.navigate('Auth')}
                    fullWidth
                    style={{ marginTop: spacing.sm }}
                  />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: { ...typography.h1, color: colors.text, marginTop: spacing.xl },
});