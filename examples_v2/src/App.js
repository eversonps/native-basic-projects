import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [time, setTime] = useState(0)
  const [timer, setTimer] = useState(null)
  const [ultimoTempo, setUltimoTempo] = useState(null)

  const [textoBotao, setTextaoBotao] = useState("VAI")

  function vai() {
    if (timer != null) {
      pausar()
    } else {
      let auxTime = time
      setTextaoBotao("PARAR")

      setTimer(setInterval(() => {
        auxTime++
        setTime(auxTime)
      }, 100))
    }
  }

  function limpar() {
    pausar()

    setTime(0)
  }

  function pausar() {
    clearInterval(timer)
    setTimer(null)
    setTextaoBotao("VAI")
  }

  return (
    <View style={styles.container}>
      <Image source={require('./img/cronometro.png')} style={styles.cronometro} />

      <Text style={styles.timer}>{time.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{textoBotao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.ultimoTempo}>{ultimoTempo && `Ultimo tempo: ${time.toFixed(2)}s`}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 20,
    borderRadius: 7
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AEEF'
  },
  ultimoTempo: {
    fontSize: 20,
    color: 'white',
    marginTop: '20'
  }
});


