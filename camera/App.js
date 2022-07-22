import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [open, setOpen] = useState(false)
  const [capturedPhoto, setCapturedPhoto] = useState(null)

  const [camera, setCamera] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a camera</Text>;
  }

  function takePicture(){
    setOpen(true)

    if (camera) {
      const options = { quality: 0.5, base64: true};
      camera.takePictureAsync(options).then((photo) => {
        setCapturedPhoto(photo)
      })
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)} flashMode={FlashMode.auto}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <Text style={styles.text}> Trocar </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              takePicture()
            }}>
            <Text style={styles.text} > Tirar Foto </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <Text style={styles.text}> Album </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      { capturedPhoto &&
        <Modal animationType='slide' transparent={false} visible={open}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
            <TouchableOpacity style={{margin: 10}} onPress={() => setOpen(false)}>
              <Text style={{fontSize: 24}}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      } 
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer:{
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  button: {
    flex: 0,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  }
});
