import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const Stack = createStackNavigator()

export default function StackComponent(){
    return (
        <Stack.Navigator initialRouteName='TelaA' /* screenOptions={{headerShown: false}} */ >
            <Stack.Screen name='TelaA' component={TelaA} options={{title: 'Informaçōes Iniciais'}}></Stack.Screen>
            <Stack.Screen name='TelaB' component={TelaB}/>
            <Stack.Screen name='TelaC' component={TelaC}/>
        </Stack.Navigator>
    )
}