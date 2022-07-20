import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from 'react-native';
import Login from './src/components/login';

import TaskList from './src/components/TaskList'
import firebase from './src/services/firebaseConnection';

import { Feather } from '@expo/vector-icons';
export default function App() {
  const [user, setUser] = useState(null)
  const [tasks, setTasks] = useState([])
  const [key, setKey] = useState("")
  const inputRef = useRef(null)

  const [newTask, setNewTask] = useState('')

  function handleDelete(key){
    firebase.database().ref("tarefas").child(user).child(key).remove().then(() => {
      const findTasks = tasks.filter(item => item.key !== key)
      setTasks(findTasks)
    }).catch((e) => {
      alert("Nao foi possivel excluir sua tarefa")
    })
  }

  function handleEdit(data){
    setKey(data.key)
    setNewTask(data.nome)
    inputRef.current.focus()
  }

  function cancelEdit(){
    setKey("")
    setNewTask("")
    Keyboard.dismiss()
  }

  function handleAdd(){
    if(!newTask){
      return
    }
    
    if(key !== ''){
      firebase.database().ref('tarefas').child(user).child(key).update({
        nome: newTask
      }).then(() => {
        const taskIndex = tasks.findIndex(item => item.key === key)
        
        let taskClone = tasks
        taskClone[taskIndex].nome = newTask

        setTasks([...taskClone])
      })

      Keyboard.dismiss()
      setNewTask('')
      setKey('')
      return
    }

    let tarefas = firebase.database().ref("tarefas").child(user);
    let chave = tarefas.push().key

    tarefas.child(chave).set({
      nome: newTask
    }).then(()=> {
      const data = {
        key: chave,
        nome: newTask
      }

      setTasks(oldTasks => [...oldTasks, data])
    }).catch((err) => {
      alert("ERRO! Nao foi possivel criar sua tarefa.")
    })

    Keyboard.dismiss()
    setNewTask("")
  }

  useEffect(async () => {
    if(!user){
      return
    }

    await firebase.database().ref("tarefas").child(user).once("value", (snapshot) => {
      setTasks([])

      snapshot?.forEach((childItem) => {
        let data = {
          key: childItem.key,
          nome: childItem.val().nome
        }

        setTasks(oldTasks => [...oldTasks, data])
      })
    })
  }, [user])

  if(!user){
    return <Login changeStatus={(user) => setUser(user)}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      { key.length > 0 && (
        <View>
          <TouchableOpacity onPress={() => cancelEdit()}>
            <Feather name="x-circle" size={20} color={"#FF0000"}/>
          </TouchableOpacity>
          <Text style={{marginLeft: 5, color: '#FF00000'}}>Voce esta editando esta tarefa</Text>
        </View>
      )}
     

     <View style={styles.containerTask}>
      <TextInput 
      style={styles.input} 
      value={newTask} 
      placeholder={"O que vai fazer hoje?"}
      onChangeText={(text) => setNewTask(text)}
      ref={inputRef}
      />
      
      <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
     </View>

     <FlatList 
      data={tasks}
      keyExtractor={ item => item.key }
      renderItem={({item}) => (
        <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit}/>
      )}
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    marginHorizontal: 10,
    backgroundColor: "#F2F6FC"
  },
  containerTask: {
    flexDirection: "row"
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45
  },
  buttonAdd: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius: 4
  },
  buttonText:{
    color: '#FFF',
    fontSize: 22
  }
});
