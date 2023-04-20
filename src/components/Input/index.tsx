import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface InputProps {
  handleChange: (value: string) => void;
  newTaskDescription: string;
  handleSubmit: () => void;
}

export function Input({ handleChange, newTaskDescription, handleSubmit }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
        style={styles.input}
        onChangeText={handleChange}
        value={newTaskDescription}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}