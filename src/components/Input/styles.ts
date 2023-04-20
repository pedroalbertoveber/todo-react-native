import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: -25,
  },
  input: {
    backgroundColor: '#262626',
    color: '#F2F2F2',
    padding: 16,
    borderRadius: 6,
    flex: 1,
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#1E6F9F',
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 18,
  }
})