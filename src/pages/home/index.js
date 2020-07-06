import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt, faSearch, faUser, faCalendarAlt, faRubleSign, } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import logo from '../../assets/mcdonalds.jpeg';
import logo2 from '../../assets/restaurant.jpg';

import Header from '../../components/header'

export default function Home({ navigation }) {


  return (
    <>
      <View style={styles.main}>

        <View style={styles.top}>
          <Header />
          <View style={styles.viewLocation}>
            <FontAwesomeIcon icon={faSearch} style={{ marginLeft: 10, marginRight: 10 }} />
            <TextInput style={styles.inputLocation} placeholder="Buscar" />
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10 }} />
          </View>
        </View>



        <View style={styles.mapContainer}>
          <MapView style={styles.map}
            initialRegion={{
              latitude: -23.740399,
              longitude: -46.696463,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004
            }}
          >
            <Marker 
              style={styles.mapMarker}
              onPress={() => navigation.navigate('Restaurant')}
              coordinate={{
                latitude: -23.740399,
                longitude: -46.696463,
              }}>
              <View style={styles.mapMarkerContainer}>
                <Image source={logo} style={styles.mapMarkerImage} />
                <Text style={styles.mapText}>McDonalds</Text>
              </View>
            </Marker>

            <Marker style={styles.mapMarker}
              onPress={() => navigation.navigate('Restaurant')}
              coordinate={{
                latitude: -23.739869,
                longitude: -46.6974283,
              }}>
              <View style={styles.mapMarkerContainer}>
                <Image source={logo2} style={styles.mapMarkerImage} />
                <Text style={styles.mapText}>Feijão de corda</Text>
              </View>
            </Marker>
          </MapView>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  top: {
    backgroundColor: '#005ebb',
    height: 130,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputLocation: {
    color: '#333',
    width: '80%',
    height: 35
  },
  viewLocation: {
    backgroundColor: '#fff',
    width: '85%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    
  },
  map: {
    width: '100%',
    height: '100%',
  },

  mapMarkerImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover'
  },

  scheduling: {
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
  viewModal: {
    flex: 1,
    // marginTop: 50,
    position: 'absolute',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  mapMarker: {
    width: 90,
    height: 80
  },
  mapMarkerContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#D1D1D1',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  mapText: {
    flex: 1,
    color: '#FFF',
    fontSize: 10,
    lineHeight: 18,
  }
})