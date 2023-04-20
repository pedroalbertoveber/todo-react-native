import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  taskContainer : {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 12,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 12,
    backgroundColor: '#333333',
    marginBottom: 8,
  },
  taskDescription: {
    color: '#f1f1f1',
    flex: 1,
  },
  taskDelete: {
    color: '#808080',
  },
  taskCompleted: {
    borderRadius: 10,
    borderColor: '#4EA8DE',
  }
})