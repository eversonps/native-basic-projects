/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform
} from 'react-native';

import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {
  const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
  }

  const [calc, setCalc] = useState(initialState)

  function addDigit(n){
    const clearDisplay = calc.displayValue === '0' || calc.clearDisplay
    
    if(n === '.' && !clearDisplay && calc.displayValue.includes('.')){
      return
    }

    const currentValue = clearDisplay ? '' : calc.displayValue
    
    const displayValue = currentValue + n
    console.log(displayValue)

    if( n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...calc.values]
      values[calc.current] = newValue
      setCalc({ ...calc, values, displayValue, clearDisplay: false })
    }else{
      setCalc({ ...calc, displayValue, clearDisplay: false})
    }
  }

  function setOperation(operation){
    if(calc.current === 0){
      setCalc({ ...calc, operation, current: 1, clearDisplay: true})
    }else{
      const equals = operation === '='
      const values = [...calc.values]

      try{
        values[0] = eval(`${values[0]} ${calc.operation} ${values[1]}`)
      } catch(e){
        values[0] = calc.values[0]
      }

      values[1] = 0 
      setCalc({
          displayValue: `${values[0]}`,
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: !equals,
          values
      })
    }
  }

  function clearMemory(){
    setCalc({ ...initialState })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={calc.displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' onClick={clearMemory} triple/>
        <Button label='/' onClick={setOperation} operation />
        <Button label='7' onClick={addDigit}/>
        <Button label='8' onClick={addDigit}/>
        <Button label='9' onClick={addDigit}/>
        <Button label='*' onClick={setOperation} operation/>
        <Button label='4' onClick={addDigit}/>
        <Button label='5' onClick={addDigit}/>
        <Button label='6' onClick={addDigit}/>
        <Button label='-' onClick={setOperation} operation/>
        <Button label='1' onClick={addDigit}/>
        <Button label='2' onClick={addDigit}/>
        <Button label='3' onClick={addDigit}/>
        <Button label='+' onClick={setOperation} operation/>
        <Button label='0' onClick={addDigit} double/>
        <Button label='.' onClick={addDigit}/>
        <Button label='=' onClick={setOperation} operation/>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
