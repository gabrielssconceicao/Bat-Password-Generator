import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Text, View} from 'react-native'
import styles from './Style'
import { Menu } from '../Menu/Menu'
import { BatLogo } from '../../components/BatLogo/BatLogo'

export default function Home() {
  return <View style={styles.appContainer}>
    <View style={styles.logoContainer}>
      <BatLogo/>
    </View>
    <Text>Home Works!</Text>
    <Menu/>
    <StatusBar style="auto" />
  </View>
}

