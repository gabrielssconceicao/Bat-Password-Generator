import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'column',
    gap:5
  },
  checkboxContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    padding: 5,
    gap: 5,
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
  },
  text: {
    color: '#e5ef3c',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex:1,
    letterSpacing: 0.5
  }

});