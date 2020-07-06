import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTicketAlt, faUserAlt, faCalendarAlt, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header'



export default function Profile() {

    const navigation = useNavigation()

  function ToVoucher(){
    navigation.navigate('MyVoucher')
  }
    return (
        <View style={styles.main}>

            <View style={styles.top}>
            <Header />
                <Text style={styles.txtTop}>Perfil</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.people}>
                    <View style={styles.peoplePhoto}>
                        <FontAwesomeIcon icon={faUserAlt} size={49} />
                    </View>
                    <View>
                        <Text style={styles.peopleName}>Leonardo Garruba</Text>
                        <Text style={styles.peopleCpf}>489.239.658-39</Text>
                    </View>
                    
                </View>

                <View style={styles.line}></View>

                <View style={styles.profileItens}>
                    <FontAwesomeIcon icon={faTicketAlt} size={35} />
                    <TouchableOpacity  onPress={ToVoucher}> 
                        <Text style={styles.txtProfileItens}>Meus vouchers</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileItens}>
                    <FontAwesomeIcon icon={faCalendarAlt} size={35} />
                    <TouchableOpacity  onPress={() => {}}> 
                        <Text style={styles.txtProfileItens}>Meus agendamentos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileItens}>
                    <FontAwesomeIcon icon={faMoneyCheckAlt} size={40} />
                    <TouchableOpacity  onPress={() => {}}> 
                        <Text style={styles.txtProfileItens}>Pagamentos</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    main:{
        flex:1,
        // paddingHorizontal: 15,
        // alignItems: 'center'
      },
      top:{
        backgroundColor: '#005ebb',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }, 
    txtTop:{
        marginLeft:10,
        color: '#fff',
        fontSize: 25,
    },
    container:{
        marginTop: 20,
        paddingHorizontal: 15,
    },
    people:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    peopleName:{
        marginLeft: 15,
        fontSize: 23
    },
    peopleCpf:{
        marginTop: 10,
        marginLeft: 15,
        fontSize: 18
    },
    peoplePhoto: {
        width: 49,
        height: 49,
    },
    line:{
        backgroundColor:'#005ebb',
        height: 2,
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    profileItens:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    txtProfileItens:{
        marginLeft: 10,
        fontSize: 17,
    }
})