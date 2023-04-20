import { View, Text } from "react-native";

import { styles } from "./styles";

import Checkbox from 'expo-checkbox'
import Ionicons from '@expo/vector-icons/Ionicons'

interface TaskProps {
  description: string,
  id: number,
  done: boolean,
  onCheck: (id: number) => void,
  onDelete: (id: number) => void,
}

export function Task({ description, done, id, onCheck, onDelete }: TaskProps) {


  return (
    <View style={styles.taskContainer} >
      <Checkbox 
        value={done} 
        onValueChange={() => onCheck(id)}
        color={'#1E6F9F'}
        style={styles.taskCompleted}  
      />

      <Text style={styles.taskDescription}>
        {description}
      </Text>

      <Ionicons 
        name="ios-trash-outline" 
        size={24}
        onPress={() => onDelete(id)}
        color={'#fff'}
        style={styles.taskDelete}
      />
    </View>
  )
}