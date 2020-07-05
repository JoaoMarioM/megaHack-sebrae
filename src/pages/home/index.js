import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps'

import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt, faSearch, faUser, faCalendarAlt, faRubleSign,  } from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'

import Header from '../../components/header'

export default function Home({navigation}) {


 return (
   <>
   <View style={styles.main}>

      <View style={styles.top}>
        <Header />
         <View style={styles.viewLocation}>
           <FontAwesomeIcon icon={faSearch}  style={{marginLeft: 10, marginRight: 10}}  />
           <TextInput style={styles.inputLocation} placeholder="Buscar" />
           <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: 10}}/>
         </View>            
      </View>

      

      <View style={styles.mapContainer}>
      <MapView style={styles.map}
        onPress={() => navigation.navigate('Restaurant')}
        initialRegion={{
          latitude: -23.7775094,
          longitude: -46.7308826,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004
        }}
      >
        <Marker style={styles.mapMarker}
          coordinate={{
            latitude: -23.7775094,
            longitude: -46.7308826,
          }}>
            <View style={styles.mapMarkerContainer}>
                <Text>Restaurante</Text>
            </View>
        </Marker>
      </MapView>
      </View>

   </View>
   </>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    alignItems: 'center'
  },
  top:{
    backgroundColor: '#005ebb',
    height: 130,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputLocation:{
    color: '#333',
    width: '80%',
    height: 35
  },
  viewLocation:{
    backgroundColor:'#fff',
    width: '85%',
    height: 40,
    justifyContent:'space-between',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  mapContainer:{
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    // marginTop: -15,
  },
  map:{
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  scheduling:{
    width: '80%',
    height: 60,
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 150,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999
  },
  viewModal:{
    flex: 1,
    // marginTop: 50,
    position:'absolute',
    backgroundColor: '#333',
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    height: '100%'
  },
  mapMarker:{
    width: 90,
    height:80
  },
  mapMarkerContainer:{
    backgroundColor: '#333'
  }
})