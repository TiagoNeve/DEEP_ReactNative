import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero() {
        novo_numero = Math.floor(Math.random() * 100)

        setNumero(novo_numero)
    }

    return (
        <>
            <SafeAreaView style={style.container}>
                <Text style={style.numero}>{numero}</Text>
                <TouchableOpacity onPress={handleNumero} style={style.botao}>
                    <Text>Gerar Número</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 38,
        color: '#FFF',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#FFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;
