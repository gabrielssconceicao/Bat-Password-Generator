import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import styles from './Style'
import { BatLogo } from '../../components/BatLogo/index.tsx'
import { BatButtons } from '../../components/BatButtons'

export default function Home() {
  return <View style={styles.appContainer}>
    <View style={styles.logoContainer}>
      <BatLogo/>
    </View>
    <View style={styles.inputContainer}>
      <BatButtons/>
    </View>
    <StatusBar style="light" />
  </View>
}

