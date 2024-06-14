import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ImageBackground } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import LinearGradient from "react-native-linear-gradient";

export default function SignIn() {
    return(
        <View style={styles.container}>
            <View style={styles.topImageContainer}>
            <Image source={require('../assets/topVector.png')} style={styles.topImage} />
            </View>

            <View style={styles.saluContainer}>
                <Text style={styles.saluText}>Salud</Text>
            </View>

            <View>
                <Text style={styles.signinText}>Acesse seus EXAMES</Text>
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

            <View style={styles.signInButtonContainer}>
            <Text style={styles.signIn}>Acessar</Text>
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

    signIn: {
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