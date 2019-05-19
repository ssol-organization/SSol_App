import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    margin: 10,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    borderRadius: 5,
  },
  headerText: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  mainPage: {
    flex: 1,
    backgroundColor: '#5DADE2'
  },
  mainPageCard: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },

  buttonPage: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonView: {
    position: 'absolute',
    left: 5,
    right: 5,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 30,
    margin: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
    }
});

export default styles;
