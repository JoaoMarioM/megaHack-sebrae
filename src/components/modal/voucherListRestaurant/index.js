import React from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'


import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faUser, faCalendarAlt, faLongArrowAltLeft,  } from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import Header from '../../header'

import logo from '../../../assets/restaurant.jpg';


export default function VoucherListRestaurant(props) {

    const navigation = useNavigation()

    function ToRestaurant(){
        navigation.navigate('Restaurant')
    }

    const visible = props.open
    const close = props.close

 return (
    <View style={styles.main}>
       <Modal
        animationType='slide'
        visible={visible}
       >
        <View style={styles.top}>
        <Header />
            <TouchableOpacity style={styles.btnIconBack} onPress={close}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} style={styles.iconBack} size={30}/>
            </TouchableOpacity>
          <Text style={styles.txtTop}>Lista de restaurantes</Text>
        </View>

        <View style={styles.restaurantList}>
            <View style={styles.restaurant}>
                <Image source={logo} style={styles.logo} />
                <View>
                    <Text style={styles.txtRestaurant}>Restaurante do Zezinho</Text>
                    <TouchableOpacity style={styles.btnRestaurant} onPress={ToRestaurant}>
                        <Text style={styles.txtBtnRestaurant}>Ir para restaurante</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>

       </Modal>
   </View>
  );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:'#333',
    },
    top:{
        backgroundColor: '#005ebb',
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    btnIconBack:{
        position: 'absolute',
        right:10,
        top: getStatusBarHeight()
    },  
    iconBack:{
        color: '#fff'
    },
    txtTop:{
        color: '#fff',
        fontSize: 25
    },
    restaurantList:{
        marginTop: 20,
        width: '100%',
        marginLeft: '5%'
    },
    restaurant:{
        width: '90%',
        borderColor: '#005ebb',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 7,
        paddingVertical: 8,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo:{
        width: 90,
        height: 90,
        backgroundColor: '#333',
        borderRadius: 5,
    },
    txtRestaurant:{
        marginRight: 15,
        fontSize: 17
    },
    btnRestaurant:{
        marginTop: 12,
    },
    txtBtnRestaurant:{
        color: '#005ebb',
        fontSize: 17
    }
})