import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import axios, {AxiosResponse} from "axios";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from '../../App';

interface ExameResponse {
    exames: {
      nom_paciente: string;
      num_cpf: string;
      des_endereco: string;
      des_email: string;
    };
  }
  




export default function SignIn() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function handleArea() {
        axios.post('http://172.16.12.3:3000/authenticate', { login: name, senha: password })
        .then((response: AxiosResponse<ExameResponse>) => {
            if (response.data.exames) {
                navigation.navigate('Area', {
                    nom_paciente: response.data.exames.nom_paciente,
                    num_cpf: response.data.exames.num_cpf,
                    des_endereco: response.data.exames.des_endereco,
                    des_email: response.data.exames.des_email
                  });
                  
            } else {
              alert('Login ou senha inválidos.');
            }
          })
          
            .catch(error => {
                console.error('Erro na autenticação:', error);
                alert('Erro na autenticação.');
            });
    }


    return(
        <View style={styles.container}>
            <View>
            <Image source={require('../assets/topVector.png')} style={styles.topImage} />
            </View>

            <View>
                <Text style={styles.saluText}>Salud</Text>
            </View>

            <View>
                <Text style={styles.signinText}>Acesse seus EXAMES</Text>
            </View>

            <View style={styles.inputContainer}>
            <FontAwesome name={"user"} size={24} color={"#9a9a9a"} style={styles.inputIcon} />
            <TextInput 
            value={name}
            onChangeText={setName}
            placeholder="Usuario" 
            style={styles.textInput} />
            </View>

            <View style={styles.inputContainer}>
            <FontAwesome name={"lock"} size={24} color={"#9a9a9a"} style={styles.inputIcon} />
            <TextInput
            value={password}
            onChangeText={setPassword} 
            placeholder="Senha"
            style={styles.textInput}
            secureTextEntry
              />
            </View>

            <View>
                <Text style={styles.trocarSenhaInput}>Esqueceu a senha ?</Text>
            </View>

            <View style={styles.signInButtonContainer}>
            <Button title="Entrar" onPress={handleArea} />
            <View style={styles.signInIcon}>
                <FontAwesome name={'arrow-right'} size={24} />
            </View>
            </View>

            <View style={styles.leftVectorContainer}>
            <ImageBackground  source={require('../assets/vector2.png')} style={styles.leftVectorImage} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#f5f5f5',
        position: 'relative'
    },


    topImage: {
        width: '100%',
        height: 130
    },

    saluText: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: '500',
        color: '#262626',
    },

    signinText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#262626',
        marginBottom: 30,
    },

    inputContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 20,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: 'center',
        height: 50,
    },

    inputIcon: {
        marginLeft: 15,
        marginRight: 7,
    },

    textInput: {
        flex: 1,
    },

    trocarSenhaInput: {
        color: '#bebebe',
        textAlign: 'right',
        width: '90%',
        fontSize: 15,
    },

    signInButtonContainer: {
    flexDirection: 'row',
    marginTop: 70,
    justifyContent: 'flex-end',
    width: '90%'
    },

    Button: {
        color: '#262626',
        fontSize: 25,
        fontWeight: 'bold'
    },

    signInIcon: {
        height: 36,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },

    leftVectorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },

    leftVectorImage: {
        height:250,
        width: 170
    }


   
})