import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Login from './src/components/login';

import TaskList from './src/components/TaskList'

export default function App() {
  let tasks = [
    { key: '1', nome: 'Tomar café da manhã' },
    { key: '2', nome: 'Estudar JS' }
  ]

  const [user, setUser] = useState(null)
  const [newTask, setNewTask] = useState('')

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
      
      <TouchableOpacity style={styles.buttonAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
     </View>

     <FlatList 
      data={tasks}
      keyExtractor={ item => item.key }
      renderItem={({item}) => (
        <TaskList data={item}/>
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
