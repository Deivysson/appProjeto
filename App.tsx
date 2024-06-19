import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import {Area} from './src/Area'

export type RootStackParamList = {
  SignIn: undefined;
  Area: {
    nom_paciente: string;
    num_cpf: string;
    des_endereco: string;
    des_email: string;
  };
};




const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name='Area' component={Area} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


