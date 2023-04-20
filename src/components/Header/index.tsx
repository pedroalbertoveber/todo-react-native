import { View, Image } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={require('C:/Users/Pedro Alberto Veber/Documents/programacao/cursos/escolas/rocketseat/ignite/mobile/atividades/todo-list/assets/TodoLogo.png')}
      />
    </View>
  )
}