import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

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
    backgroundColor: '#00A9EE'
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
    flexDirection: 'row',
    left: 5,
    right: 5,
    flex: 1
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: 80,
    width: width/3 -13,
    margin: 5,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center'
  },
  mainImage: {
    width: 400,
    height: 300, 
    bottom: 45
  }
});

export default styles;
