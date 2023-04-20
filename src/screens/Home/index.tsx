import { Alert, FlatList, View } from 'react-native'
import { useState } from 'react'

import { Header } from '../../components/Header'
import { styles } from './styles'
import { Input } from '../../components/Input'
import { TableHeader } from '../../components/TableHeader'
import { EmptyTaskList } from '../../components/EmptyTaskList'
import { TaskType } from '../../@types/Task'
import { Task } from '../../components/Task'

export function Home() {

  const [taskList, setTaskList] = useState<TaskType[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState('')

  function handleChangeNewTaskDescriptionValue(newValue: string) {
    return setNewTaskDescription(newValue)
  }

  function handleAddNewTask() {

    if (newTaskDescription === '') {
      return Alert.alert('Erro', 'Você precisa informar a descrição da atividade!')
    }

    const newTask:TaskType = {
      id: Math.random() * 100,
      description: newTaskDescription,
      done: false,
    }
    
    setNewTaskDescription('')
    return setTaskList(prevState => [...prevState, newTask])
  }

  function handleDeleteTask(id: number) {
    return setTaskList(prevState => prevState.filter(item => item.id !== id))
  }

  function handleCompleteTask(id: number) {
    const selectedTaskindex = taskList.findIndex(task => task.id === id)

    if (selectedTaskindex < 0) {
      Alert.alert('Tarefa não localizada!', 'Verifique se a tarefa completada está cadastrada')
      return
    }

    setTaskList(prevState => prevState.map((task) => {
      if (task.id === id) {
        task = {...task, done: !task.done }
      }
      return task
    }))
  }

  return (
    <View style={styles.container}>

      <Header />

      <Input 
        handleChange={handleChangeNewTaskDescriptionValue} 
        newTaskDescription={newTaskDescription}
        handleSubmit={handleAddNewTask}
      />

      <TableHeader 
        taskList={taskList}
      />
      
      <FlatList 
        data={taskList}
        renderItem={({ item }) => (
          <Task 
            key={item.id} 
            description={item.description} 
            done={item.done}
            id={item.id}
            onCheck={handleCompleteTask}
            onDelete={handleDeleteTask} 
          />
        )}
        ListEmptyComponent={<EmptyTaskList />}
      />

    </View>
  )
}
