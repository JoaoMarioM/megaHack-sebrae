import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'

import Header from '../../components/header'

export default function Register({navigation}) {
 return (
   <View style={styles.main}>
      <Header />
      <TextInput style={styles.input} placeholder='Nome' />
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Senha' />
      <TextInput style={styles.input} placeholder='Confirmar senha' />
      <TouchableOpacity style={styles.confirm} onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={styles.txtConfirm}>Confirmar</Text>
      </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: '#005ebb',
        justifyContent: 'center',
        alignItems:'center'
    },
    input:{
        width:'80%',
        backgroundColor: '#fff',
        marginTop: 15,
        height: 30,
        borderRadius: 7,
        textAlign: 'center',
        fontSize: 17
    },
    confirm:{
        marginTop: 25,
        backgroundColor: '#fff',
        borderRadius: 9,
        width: '80%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtConfirm:{
        fontSize: 20,
        color: '#005ebb'
    }
})