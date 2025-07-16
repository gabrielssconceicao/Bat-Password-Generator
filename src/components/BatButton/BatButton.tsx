import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';

export function BatButton() {
  const [password, setPassword] =useState('');

  function handleGeneratePassword() {
    setPassword(generatePassword);
  }

  function handleCopyPassword() {
    Clipboard.setStringAsync(password);
  }

  return (
    <>
       <BatTextInput password={password}/>
        <Pressable
        style={styles.button} 
         onPress={handleGeneratePassword}
        >
          <Text style={styles.text}>Generate</Text>
        </Pressable>
        <Pressable
        style={styles.button} 
         onPress={handleCopyPassword}
        >
          <Text style={styles.text}>⚡ Copy!</Text>
        </Pressable>
    </>
  );
}