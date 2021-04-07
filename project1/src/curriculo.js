import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/me.jpeg';



const App = () => {

    function handleRedeSocial(rede_social) {
        switch (rede_social) {
            case 'linkedin':
                Alert.alert('Meu linkedin: ', 'https://linkedin.com/in/tiago-m-neves')
                break
            case 'github':
                Alert.alert('Meu github: ', 'https://github.com/TiagoNeve')
                break
            case 'mail':
                Alert.alert('Meu gmail: ', 'tiagomneves.52@gmail.com')
                break
        }
    }

    return (
        <>
            <ScrollView>
                <View style={style.page}>
                    <View style={style.containerCabecalho}>
                        <Image source={foto} style={style.foto} />
                        <Text style={style.nome}>TIAGO MACIEL NEVES</Text>
                        <Text style={style.funcao}>Desenvolvedor mobile</Text>
                        <View style={style.redesSociais}>
                            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                                <Icon name="github" size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                                <Icon name="linkedin" size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleRedeSocial('mail')}>
                                <Icon name="mail" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <View style={style.card}>
                            <View style={style.cardHeader}>
                                <Text>Experiência profissional</Text>
                            </View>
                            <View style={style.cardContent}>
                                <Text style={style.cardContentText}>Em desenvolvimento</Text>
                                <Text style={style.cardContentText}>Apenas de CURSOS</Text>
                                <Text style={style.cardContentText}>De grão em grão o galo enche o papo</Text>
                            </View>
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <View style={style.card}>
                            <View style={style.cardHeader}>
                                <Text>Formação Acadêmica</Text>
                            </View>
                            <View style={style.cardContent}>
                                <Text style={style.cardContentText}>Cursos, muito cursos</Text>
                                <Text style={style.cardContentText}>Analise e desenvolvimento de sistemas</Text>
                                <Text style={style.cardContentText}>Universidade Estácio</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

        </>
    )
}

const style = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#E7E7E7',
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
    },
    cardContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#FFF',
    },
    cardContent: {
        marginTop: 20,
    },
    cardContentText: {
        color: '#939393',
        marginBottom: 10
    },
})

export default App;