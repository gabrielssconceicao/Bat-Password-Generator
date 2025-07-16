import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface StrengthBarProps {
  strength: number
}
export function StrengthBar({strength}:StrengthBarProps) {

  function getBackgroundColor(strength: number) {
    if (strength < 20) return '#eb5757';
    if (strength < 40) return '#ff8000';
    if (strength < 60) return '#f2c94c';
    return '#27ae60';
  }


  return (
    <View style={styles.container}>
        <View style={[styles.bar, { backgroundColor: getBackgroundColor(strength), width: `${strength}%` }]}/> 
        <Text>{strength}%</Text>
    </View>
    
  );
}