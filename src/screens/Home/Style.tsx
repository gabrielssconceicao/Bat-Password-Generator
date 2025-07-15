import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    marginBottom: 60,
    backgroundColor: '#4d4d4d'
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
  }
});

export default styles