import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/header'

import image from '../../assets/image-profile.jpg'

export default function Profile() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <View style={styles.people}>
                    <View style={styles.peoplePhoto, { width: 49, height: 49}}>
                        <Image source={image} styles={styles.photo} />
                    </View>

                    <Text style={styles.peopleName}>Leonardo Garruba</Text>
                    <Text style={styles.peopleCpf}>489.239.658-39</Text>
                </View>

                <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <FontAwesomeIcon icon={faTicketAlt} size={40} />
                    <Text style={styles.actionButton}>Meus vouchers</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005ebb',
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        padding: 24,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    peoplePhoto: {
        width: 49,
        height: 49,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        overflow: 'hidden'
    },

    photo: {
        width: '100%'
    }
})