import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { CheckBox } from '../CheckBox';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';
import { SliderBar } from '../SliderBar';

export function BatButton() {
  const [password, setPassword] =useState('');
  const [sliderValue, setSliderValue] = useState(6);
  const [options,setOptions] = useState([
    { id: 2, label: 'Lowercase', checked: true },
    { id: 1, label: 'Uppercase', checked: false },
    { id: 3, label: 'Numbers', checked: false },
    { id: 4, label: 'Symbols', checked: false },
  ])

  function handleGeneratePassword() {
    const generatedPassword = generatePassword({
      options,size:sliderValue
    });
    setPassword(generatedPassword);
  }

  function handleSliderChange(value: number) {
    handleGeneratePassword();
    setSliderValue(value);
  };

  function handleCopyPassword() {
    Clipboard.setStringAsync(password);
  }

  function handleCheckOption(id: number) {
    
    const newOptions = [...options];
    newOptions.forEach((option) => {
      if (option.id === id) {
        option.checked = !option.checked;
      }
    })
    if(newOptions.every((option) => !option.checked)) newOptions[0].checked = true;
    setOptions(newOptions);
    handleGeneratePassword();
  }

  return (
    <>  
        <View style={{height: 20, width: '100%', backgroundColor: '#4d4d4d',borderRadius: 10,marginBottom: 10}}>
          <View style={{height: 20, width: `${(sliderValue/64)*100}%`,backgroundColor: '#e5bf3c',borderRadius: 10}}/>  
        </View>
        <BatTextInput password={password}/>
        <SliderBar onValueChange={handleSliderChange} value={sliderValue}/>
        <CheckBox options={options} handleCheckOption={handleCheckOption}/>
        <TouchableOpacity
        style={styles.button} 
         onPress={handleGeneratePassword}
        >
          <Text style={styles.text}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button} 
         onPress={handleCopyPassword}
        >
          <Text style={styles.text}>⚡ Copy!</Text>
        </TouchableOpacity>
        
    </>
  );
}