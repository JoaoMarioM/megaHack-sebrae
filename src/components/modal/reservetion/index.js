import React from 'react'
import { View, Modal, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faUser, faCalendarAlt, faLongArrowAltLeft,  } from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {getStatusBarHeight} from 'react-native-status-bar-height'

import RNPickerSelect from 'react-native-picker-select'

import {Calendar, CalendarList, Agenda} from 'react-native-calendars'

import Header from '../../header'
import { Value } from 'react-native-reanimated'

export default function Reservetion(props) {
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
          <Text style={styles.txtTop}>Reserva</Text>

        </View>

        <View style={styles.reseretionContainer}>
            <View style={styles.peaple}>
                <FontAwesomeIcon icon={faUser} style={{marginRight: 20}} size={30} />
                <RNPickerSelect 
                    style={styles.selectPeaple}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        {label:'1', value: '1'},
                        {label:'2', value: '2'},
                        {label:'3', value: '3'},
                        {label:'4', value: '4'},
                        {label:'5', value: '5'},
                        {label:'6', value: '6'},

                    ]}
                />
            </View>
            <View style={styles.calendar}>
                {/* <FontAwesomeIcon icon={faCalendarAlt} size={30} /> */}
                <Calendar
                    markingType={'period'}
                    markedDates={{
                    '2020-07-15': {marked: true, dotColor: '#50cebb'},
                    '2020-07-16': {marked: true, dotColor: '#50cebb'},
                    '2020-07-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                    '2020-07-22': {color: '#70d7c7', textColor: 'white'},
                    '2020-07-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                    '2020-07-24': {color: '#70d7c7', textColor: 'white'},
                    '2020-07-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
                
                }}
                // onDayPress={(day) => {markedDates}}
/>
            </View>
            <View style={styles.clock}>
                <FontAwesomeIcon icon={faClock} size={30} />
                
            </View>
            <TouchableOpacity style={styles.btnReservetion}>
                <Text style={styles.txtReservetion}>Reservar</Text> 
            </TouchableOpacity>
        </View>
       </Modal>
   </View>
  )
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
    reseretionContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    peaple:{
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row'
    },
    calendar:{
        marginTop: 20,
        marginBottom: 20
    },
    clock:{
        marginTop: 20,
        marginBottom: 20
    },
    selectPeaple:{
        marginLeft: 20
    },
    btnReservetion:{
        width: 200,
        backgroundColor: '#005ebb',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 10,
    },
    txtReservetion:{
        color: '#fff',
        fontSize: 22
    }
})