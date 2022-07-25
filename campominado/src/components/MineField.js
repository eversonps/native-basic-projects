import React from "react";

import { StyleSheet, View } from "react-native";
import Field from './Field'

export default function MineField({board}){
    console.log(board)
    const rows = board.map((row, r) => {
        const columms = row.map((field, c) => {
            return <Field {...field} key={c} />
        })

        return <View key={r} style={{flexDirection: 'row'}}>{columms}</View>
    })

    return <View style={styles.container}>{rows}</View>
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})