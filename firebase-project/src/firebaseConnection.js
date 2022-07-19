import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCvATVaF-Qkmodx00i3QIg0tpCprvE-Pfs",
    authDomain: "native-app-2acae.firebaseapp.com",
    projectId: "native-app-2acae",
    storageBucket: "native-app-2acae.appspot.com",
    messagingSenderId: "485703102563",
    appId: "1:485703102563:web:e00f843823adb51c200856",
    measurementId: "G-0E6T5Z6G69"
};
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase