import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services'


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleAuthentication(event) {
        event.preventDefault();

        try {
            const token = await apisAreAvailable
        } catch (error) {
            alert('Falha na autenticação')
        }
    }

    function handleNavigationHome() {
        navigation.navigate('TabNavigator')
    }

    return (
        <View style={styles.main}>
            <TextInput
                placeholder='Usuario'
                style={styles.input}
                value={email}
                onChangeText={event => setEmail(event)}
            />
            <TextInput
                placeholder='Senha'
                style={styles.input}
                value={password}
                onChangeText={event => setPassword(event)}
            />

            <TouchableOpacity style={styles.btnLogin} onPress={handleNavigationHome} >
                <Text style={styles.txtLogin}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRes} onPress={() => navigation.navigate('Register')} >
                <Text style={styles.txtRes}>Fazer cadastro</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#005ebb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#fff',
        width: '80%',
        height: 35,
        textAlign: 'center',
        borderRadius: 7,
        marginBottom: 15
    },
    btnLogin: {
        backgroundColor: '#fff',
        width: '80%',
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtLogin: {
        fontSize: 20,
        color: '#005ebb'
    },
    btnRes: {
        marginTop: 20,
    },
    txtRes: {
        color: '#fff',
        fontSize: 17
    }
})