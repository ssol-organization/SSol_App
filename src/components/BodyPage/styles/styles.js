import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    margin: 10,
    height: 60,
    backgroundColor: '#7EBDE8',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 10
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
    justifyContent: 'center'
  },

  buttonPage: {
    backgroundColor: '#5DADE2',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonView: {
    flexDirection:'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#7EBDE8',
    padding: 30,
    margin: 5,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 15
  },
  buttonText: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
    }
});

export default styles;
