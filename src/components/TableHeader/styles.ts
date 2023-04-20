import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#333333',
    marginTop: 20,
  },
  classItem: {
    gap: 8,
    flexDirection: 'row',
  },
  created: {
    fontWeight: '700',
    color: '#4EA8DE',
    fontSize: 16,
  },
  done: {
    fontWeight: '700',
    color: '#8284FA',
    fontSize: 16,
  },
  quantidy: {
    color: '#F1F1F1',
    backgroundColor: '#333',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    fontWeight: 'bold',
  }
})