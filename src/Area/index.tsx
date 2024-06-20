import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Icon from 'react-native-vector-icons/FontAwesome';



type AreaScreenRouteProp = RouteProp<RootStackParamList, 'Area'>;

interface AreaProps {
    route: AreaScreenRouteProp;
  }


export function Area({ route }: AreaProps) {

    const { nom_paciente, num_cpf, des_email } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{nom_paciente}</Text>
                <Text style={styles.subtitle}>CPF: {num_cpf}</Text>
                <Text style={styles.subtitle}>Email: {des_email}</Text>
            </View>

            <View style={styles.table}>
                <View style={styles.rowHeader}>
                    <Text style={styles.cellHeader}>Exames</Text>
                    <Text style={styles.cellHeader}>Data de Inserção</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>Arquivo.pdf</Text>
                    <Text style={styles.cell}>23/04/2024</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.exitButton} onPress={() => console.log('Botão de saida pressionado')}>
                <Icon name='sign-out' size={30} color='#900' />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    headerContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        marginTop: 50,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
    },
    table: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    rowHeader: {
        flexDirection: 'row',
        backgroundColor: '#EEE',
        paddingVertical: 15,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingVertical: 15,
    },
    cellHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#555',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: '#777',
    },
    exitButton: {
        position: 'absolute',
        top: 40,
        right: 20
    }
});
