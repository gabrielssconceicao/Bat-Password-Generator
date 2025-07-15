import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {Text, View} from 'react-native'
import styles from './Style'
import { Menu } from '../Menu/Menu'

export default function Home() {
  return <View style={styles.container}>

    <Text>Home Works!</Text>
    <Menu/>
    <StatusBar style="auto" />
  </View>
}

