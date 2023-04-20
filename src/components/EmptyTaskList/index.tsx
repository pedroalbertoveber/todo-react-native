import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export function EmptyTaskList() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('C:/Users/Pedro Alberto Veber/Documents/programacao/cursos/escolas/rocketseat/ignite/mobile/atividades/todo-list/assets/Clipboard.png')}
      />
      <Text style={styles.mainText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.secondaryText}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}