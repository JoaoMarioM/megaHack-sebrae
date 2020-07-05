import React from 'react'
import {Platform, StyleSheet, View} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

export default function Header() {
 return (
   <View style={{paddingTop: getStatusBarHeight()}} />
  );
}

