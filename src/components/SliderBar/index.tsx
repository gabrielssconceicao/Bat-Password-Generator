import React from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

import { styles } from './styles';

interface SliderBarProps {
  value: number;
  onValueChange: (value: number) => void;
}
export function SliderBar({onValueChange,value}: SliderBarProps) {
  return (
    <View style={styles.container}>
       <Slider 
        style={styles.slider}
        minimumValue={6} 
        maximumValue={64}
        step={1}
        minimumTrackTintColor="#e5bf3c"
        maximumTrackTintColor="#fff"
        value={value}
        onValueChange={onValueChange}
      />
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}