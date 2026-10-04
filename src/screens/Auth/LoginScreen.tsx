import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';
import { colors, typography, spacing } from '../../theme';
import { isEmail, isPasswordStrong } from '../../utils/validators';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export default function LoginScreen({ navigation }: Props) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const newErrors: typeof errors = {};
    if (!isEmail(email)) newErrors.email = 'Enter a valid email';
    if (!isPasswordStrong(password)) newErrors.password = 'Min 6 characters';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length) return;

    console.log("email",email);
    console.log("password",password);
    try {
      setLoading(true);
      const response = await login(email, password);
      console.log("response",response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Log in to continue</Text>

        <View style={{ marginTop: spacing.xl }}>
          <AppInput
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />
          <AppInput
            label="Password"
            placeholder="••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={errors.password}
          />
          <AppButton
            title="Log In"
            onPress={handleLogin}
            loading={loading}
            fullWidth
          />
          <AppButton
            title="Don't have an account? Sign up"
            variant="outline"
            onPress={() => navigation.navigate('Signup')}
            fullWidth
            style={{ marginTop: spacing.sm }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  title: { ...typography.h1, color: colors.text },
  subtitle: { ...typography.body, color: colors.textSecondary, marginTop: spacing.xs },
});