import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchStackParamList } from '../../navigation/types';
import AppInput from '../../components/common/AppInput';
import AppButton from '../../components/common/AppButton';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<SearchStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) return;
    navigation.navigate('SearchResults', { query: query.trim() });
  };

  return (
    <View style={styles.container}>
      <AppInput
        label="Search"
        placeholder="Type something..."
        value={query}
        onChangeText={setQuery}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      <AppButton title="Search" onPress={handleSearch} fullWidth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
});