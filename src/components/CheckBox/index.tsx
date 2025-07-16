import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './styles';

export type Option = {
  id: number;
  label: string;
  checked: boolean;
}

interface CheckBoxProps {
  options:Option[],
  handleCheckOption: (id: number) => void
}
export function CheckBox({options, handleCheckOption}:CheckBoxProps) {
  return (
    <View style={styles.container}>
    {options.map((option) => (
      <TouchableOpacity key={option.id} style={styles.checkboxContainer} onPress={() => handleCheckOption(option.id)}>
        <Checkbox value={option.checked} color={'#e5bf3c'}/>
        <Text style={styles.text}>{option.label}</Text>
      </TouchableOpacity>
    ))}
    </View>
  );
}