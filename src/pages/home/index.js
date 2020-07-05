import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MapView from 'react-native-maps'

import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header'

export default function Home() {
 return (
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
              initialRegion={{
                latitude: -23.7775094,
                longitude: -46.7308826,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
              }}
            />
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
  top:{
    backgroundColor: '#005ebb',
    height: 130,
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
    // marginTop: 5,
  },
  map:{
    width: '100%',
    height: '100%'
  }
})