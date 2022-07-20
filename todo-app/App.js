import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from 'react-native';
import Login from './src/components/login';

import TaskList from './src/components/TaskList'
import firebase from './src/services/firebaseConnection';

export default function App() {
  const [user, setUser] = useState(null)
  const [tasks, setTasks] = useState([])

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
    console.log(data)
  }

  function handleAdd(){
    if(!newTask){
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
     <View style={styles.containerTask}>
      <TextInput 
      style={styles.input} 
      value={newTask} 
      placeholder={"O que vai fazer hoje?"}
      onChangeText={(text) => setNewTask(text)}
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
