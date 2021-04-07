import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/me.jpeg';

const App = () => {
    return (
        <>
            <View style={style.page}>
                <View style={style.containerCabecalho}>
                    <Image source={foto} style={style.foto} />
                    <Text style={style.nome}>TIAGO MACIEL NEVES</Text>
                    <Text style={style.funcao}>Desenvolvedor mobile</Text>
                    <View style={style.redesSociais}>
                        <Icon name="github" size={30} />
                        <Icon name="facebook" size={30} />
                        <Icon name="linkedin" size={30} />
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
        marginTop: 50,
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

    },
    redesSociais: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20,
    }
})

export default App;