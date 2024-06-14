import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export default function SignIn() {
    return(
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
            <Image source={require('../assets/topVector.png')} style={styles.topImage} />
            </View>

            <View style={styles.saluContainer}>
                <Text style={styles.saluText}>Salu</Text>
            </View>

            <View>
                <Text style={styles.signinText}>Faça login na sua conta</Text>
            </View>

            <View style={styles.inputContainer}>
            <FontAwesome name={"user"} size={24} color={"#9a9a9a"} style={styles.inputIcon} />
            <TextInput placeholder="Usuario" style={styles.textInput} />
            </View>

            <View style={styles.inputContainer}>
            <FontAwesome name={"lock"} size={24} color={"#9a9a9a"} style={styles.inputIcon} />
            <TextInput 
            placeholder="Senha"
            style={styles.textInput}
            secureTextEntry
              />
            </View>

            <View>
                <Text style={styles.trocarSenhaInput}>Esqueceu a senha ?</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#f5f5f5',
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
    }

   
})