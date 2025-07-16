import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';
import { CheckBox } from '../CheckBox';

export function BatButton() {
  const [password, setPassword] =useState('');
  const [options,setOptions] = useState([
    { id: 1, label: 'Uppercase', checked: false },
    { id: 2, label: 'Lowercase', checked: false },
    { id: 3, label: 'Numbers', checked: false },
    { id: 4, label: 'Symbols', checked: false },
  ])

  function handleGeneratePassword() {
    const generatedPassword = generatePassword(options);
    setPassword(generatedPassword);
  }

  function handleCopyPassword() {
    Clipboard.setStringAsync(password);
  }

  function handleCheckOption(id: number) {
    setOptions(prev=> prev.map(option => option.id === id ? {...option, checked: !option.checked} : option));
  }

  return (
    <>
       <BatTextInput password={password}/>
        <CheckBox options={options} handleCheckOption={handleCheckOption}/>
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