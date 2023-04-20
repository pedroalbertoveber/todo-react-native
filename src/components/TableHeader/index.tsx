import { Text, View } from "react-native";
import { styles } from "./styles";
import { TaskType } from "../../@types/Task";
import { useEffect, useState } from "react";

interface TableHeaderProps {
  taskList: TaskType[]
}

export function TableHeader({ taskList }: TableHeaderProps) {

  const [taskListLength, setTaskListLengt] = useState<number>(0)
  const [completedTasks, setCompletedTasks] = useState<number>(0)

  useEffect(() => {
    setTaskListLengt(taskList.length);
    setCompletedTasks(taskList.filter(task => task.done === true).length)
  }, [taskList])

  return (
    <View style={styles.container}>
      <View style={styles.classItem}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.quantidy}>{taskListLength}</Text>
      </View>
      <View style={styles.classItem}>
        <Text  style={styles.done}>Concluídas</Text>
        <Text style={styles.quantidy}>{completedTasks}</Text>
      </View>
    </View>
  )
}