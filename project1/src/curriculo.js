import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import foto from './assets/me.jpeg';

const App = () => {
    return (
        <>
            <View style={style.page}>
                <View style={style.containerCabecalho}>
                    <Image source={foto} style={style.foto} />
                    <Text style={style.nome}>TIAGO MACIEL NEVES</Text>
                    <Text style={style.funcao}>Desenvolvedor mobile</Text>
                    <View>
                        <Text>GitHub</Text>
                        <Text>Facebook</Text>
                        <Text>Linkedin</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E7E7E7'
    },
    containerCabecalho: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: 125,

    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10

    },
    funcao: {
        color: '#939393',
        marginBottom: 10,

    }
})

export default App;