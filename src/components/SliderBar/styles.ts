import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#000',
    width: '100%',
    flexDirection: 'row',
    gap: 10
  },
  slider: {
    width: '90%',
    height: 40
  },
  text: {
    color: '#e5ef3c',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    letterSpacing: 0.5,
    flexGrow: 1,
    paddingVertical:10
  }
});
