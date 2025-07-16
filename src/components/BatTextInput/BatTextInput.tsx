import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  password: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
 
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={props.password}
      />  
   
  );
}