import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './styles';

import batLogo from '../../../assets/bat-logo.png';

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT  PASS GENERATOR</Text>
      <Image source={batLogo} style={styles.image}/>
    </>
  );
}