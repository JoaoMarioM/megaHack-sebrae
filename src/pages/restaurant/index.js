import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'

import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt, faSearch, faUser, faCalendarAlt, faLongArrowAltLeft,  } from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'

import Header from '../../components/header'


export default function Restaurant({navigation}) {
 return (
  <View style={styles.main}>
  <Header />
  <View style={styles.top}>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} style={styles.iconBack} size={30}/>
      </TouchableOpacity>
      <View style={styles.logo} />
      <Text style={styles.txtTop}>Restaurante do zezinho</Text>
      
  </View>

  <View style={styles.scheduling}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <FontAwesomeIcon icon={faUser} style={{marginLeft: 15, marginRight: 15}} />
      </TouchableOpacity>
      <FontAwesomeIcon icon={faCalendarAlt} />
      <FontAwesomeIcon icon={faClock} style={{marginLeft: 15, marginRight: 15}} />
  </View>

  {/* <View style={styles.carda}> */}
      <Text style={styles.txtCarda}>Cardapio</Text>
      
        <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        style={styles.cardaItensList}
        keyExtractor={ carda => String(carda)}
        renderItem={() => (
        <TouchableOpacity >
           <View style={styles.cardaItens} >
          <View style={styles.itenContainer}>
            <Text style={styles.txtItenTitle}>Filé de frango</Text>
            <Text style={styles.txtItenSubTitle}>Aconpanha arroz, feijão, fritas ou ovo</Text>
            <Text style={styles.txtValue}>R$ 17,00</Text>
          </ View>
            <View style={styles.logoIten}/>
        </View>
        </TouchableOpacity>  
       
        )}
        />

       
      
  {/* </View> */}
</View>
  )
}

const styles = StyleSheet.create({
  main:{
      flex: 1,
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
      alignItems: 'center'
  },
  top:{
      backgroundColor: '#005ebb',
      // marginTop: 15,
      width: '100%',
      paddingHorizontal: 15,
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
  },  
  txtTop:{
      marginLeft:10,
      color: '#fff',
      fontSize: 19
  },
  logo:{
      width: 100,
      height:60,
      backgroundColor: '#333',
      // marginTop: 15
      borderRadius: 5,
  },
  iconBack:{
    top: 0, 
    position: 'absolute', 
    right:10,
    color: '#fff'
  },
  scheduling:{
      width: '80%',
      height: 60,
      backgroundColor: '#fff',
      // position: 'absolute',
      marginTop: 15,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // zIndex: 999,
      borderColor: '#005ebb',
      borderStyle: 'solid',
      borderWidth: 1
    },
    carda:{
      marginTop: 15,
      width: '100%',
      alignItems: 'center'
    },
    txtCarda:{
      fontSize: 23,
      marginTop: 20
    },
    cardaItens:{
      marginTop: 18,
      borderColor: '#005ebb',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 5,
      width: '90%',
      paddingHorizontal: 5,
      paddingVertical: 7,
      // display: 'flex',
      flexDirection: 'row'
    },
    logoIten:{
      display: 'flex',
      width: 90,
      height:90,
      backgroundColor: '#333',
      right: 0,
      
      position: 'relative'
    },
    itenContainer:{
      width: '70%',
    },
    txtItenTitle:{
      fontSize: 20
    },
    txtItenSubTitle:{
      marginTop: 7
    },
    txtValue:{
      marginTop: 7,
      fontSize: 20,
      color: '#005ebb'
    },
    cardaItensList:{
      width: '100%',
      marginLeft: '10%',
      marginBottom: 20
    }
})