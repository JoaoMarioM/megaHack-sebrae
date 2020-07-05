import React from 'react'
import {Platform, StyleSheet, View, StatusBar} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

export default function Header() {
  // StatusBar.setBackgroundColor('#005ebb')
  StatusBar.setBarStyle("light-content")

 return (
   <View style={{paddingTop: 10 + getStatusBarHeight()}} >
      {/* <StatusBar  backgroundColor='#005ebb'/> */}

   </View>
  );
}

