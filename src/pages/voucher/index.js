import React, {useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faTicketAlt} from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header'
import VoucherListRestaurant from '../../components/modal/voucherListRestaurant'

export default function Voucher() {

  const [isOpen, setIsOpen] = useState(false)

 return (
   <View style={styles.main}>
      <View style={styles.top}>
        <Header />
        <Text style={styles.txtTop}>Voucher</Text>
      </View>

     <View style={styles.voucherList}>
        <View style={styles.voucherItems} >
            <Text style={styles.txtVoucherValue}>Voucher de R$ 15,00</Text>
            <TouchableOpacity onPress={() => setIsOpen(true)}>
              <Text style={styles.txtBtnVoucher}>Ver restaurantes participantes</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.voucherItems} >
            <Text style={styles.txtVoucherValue}>Voucher de R$ 15,00</Text>
            <TouchableOpacity>
              <Text style={styles.txtBtnVoucher}>Ver restaurantes participantes</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.voucherItems} >
            <Text style={styles.txtVoucherValue}>Voucher de R$ 15,00</Text>
            <TouchableOpacity>
              <Text style={styles.txtBtnVoucher}>Ver restaurantes participantes</Text>
            </TouchableOpacity>
        </View>
     </View> 

     {
       isOpen ? <VoucherListRestaurant
        open={isOpen}
        close={() => setIsOpen(false)}
       /> : null
     }

   </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems: 'center'
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
    color: '#fff',
    fontSize: 25
  },
  voucherList:{
    width: '100%',
    alignItems: 'center'
  },
  voucherItems:{
    marginTop: 25,
    width: '90%',
    borderColor: '#005ebb',
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
  },
  txtVoucherValue:{
    fontSize: 18
  },
  txtBtnVoucher:{
    marginTop: 7,
    color: '#005ebb',
    fontSize: 15,
  }
})