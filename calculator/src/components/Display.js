import React from "react";

import {
    StyleSheet,
    Text, 
    View,
    Dimensions
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
        height: Dimensions.get('window').height / 6,
        paddingHorizontal: 20,
    },
    displayValue: {
        fontSize: 60,
        color: '#FFF',
    }
})

export default function Display({value}) {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue}>{value}</Text>
        </View>
    )
}