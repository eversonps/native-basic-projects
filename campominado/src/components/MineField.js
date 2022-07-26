import React from "react";

import { ProgressViewIOSComponent, StyleSheet, View } from "react-native";
import Field from './Field'

export default function MineField({board, onOpenField, onSelectField}){
    const rows = board.map((row, r) => {
        const columms = row.map((field, c) => {
            return <Field {...field} key={c} onOpen={() => onOpenField(r, c)} onSelect={() => onSelectField(r, c)}/>
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