import React from "react";


import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";

export default function LevelSelection({isVisible, onCancel, onLevelSelected}){
    return (
        <Modal onRequestClose={onCancel} visible={isVisible} animationType='slide' transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text>Selecione o Nível</Text>

                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={() => onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.bgNormal]} onPress={() => onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Intermediario</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={() => onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Dificil</Text>
                    </TouchableOpacity>
                </View>            
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    }, 
    bgEasy: {
        backgroundColor: '#49B65D'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})