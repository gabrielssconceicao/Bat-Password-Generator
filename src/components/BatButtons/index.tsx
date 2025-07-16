import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { CheckBox } from '../CheckBox';
import { BatTextInput } from '../BatTextInput';
import { SliderBar } from '../SliderBar';
import { StrengthBar } from '../StrengthBar';
import generatePassword from '../../services/passwordService';
import { passwordStrength } from '../../services/passwordStrength';
import { Options } from '../../services/enums';

export function BatButtons() {
  const [password, setPassword] =useState('');
  const [sliderValue, setSliderValue] = useState(6);
  const [options,setOptions] = useState([
    { id: 2, label: Options.Lowercase, checked: true },
    { id: 1, label: Options.Uppercase, checked: false },
    { id: 3, label: Options.Numbers, checked: false },
    { id: 4, label: Options.Symbols, checked: false },
  ])

  function handleGeneratePassword() {
    const generatedPassword = generatePassword({
      options,
      size:sliderValue
    });
    setPassword(generatedPassword);
  }

  function handleSliderChange(value: number) {
    setPassword('');
    handleGeneratePassword();
    setSliderValue(value);
  };

  function handleCopyPassword() {
    Clipboard.setStringAsync(password);
  }

  function handleCheckOption(id: number) {
    setPassword('');
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
        <StrengthBar strength={passwordStrength({options,size:sliderValue})}/>
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