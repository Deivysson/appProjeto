import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

const img = require('../../../assets/imagens/micro.png');

type AreaScreenRouteProp = RouteProp<RootStackParamList, 'Area'>;

interface AreaProps {
    route: AreaScreenRouteProp;
  }


export function Area({ route }: AreaProps) {
    // Acessando os parâmetros via props (no React Native, geralmente são passados pela navegação)
    const { nom_paciente, num_cpf, des_email } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.title}>{nom_paciente}</Text>
                    <Text>CPF: {num_cpf}</Text>
                    <Text>Email: {des_email}</Text>
                </View>
                <Image source={img} style={styles.logo} />
            </View>

            {/* No React Native, tabelas podem ser representadas usando Views e Texts */}
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.cell}>Exames</Text>
                    <Text style={styles.cell}>Data de Inserção</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.cell}>Arquivo.pdf</Text>
                    <Text style={styles.cell}>23/04/2024</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    logo: {
        width: 100,
        height: 100,
    },
    table: {
        borderWidth: 1,
        borderColor: '#000',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    cell: {
        flex: 1,
        padding: 10,
    },
});
