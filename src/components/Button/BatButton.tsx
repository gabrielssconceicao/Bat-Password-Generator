import React from 'react';
import { View ,Button,Text, Pressable} from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButton() {
  return (
    <>
       <BatTextInput />
        <Pressable
        style={styles.button} 
         onPress={()=> console.log("Press")}
        >
          <Text style={styles.text}>Generate</Text>
        </Pressable>
        <Pressable
        style={styles.button} 
         onPress={()=> console.log("Press")}
        >
          <Text style={styles.text}>⚡ Copy!</Text>
        </Pressable>
    </>
  );
}