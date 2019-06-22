import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    width: width - 20,
    height: height-270,
    top: -15,
    bottom: 70,
  },
  contentCard: {
    marginTop: 15,
    width: width - 20,
    height: height-343,
    marginBottom: 20,
  },
  cardTitle: {
    marginTop: 10,
    marginBottom: 15,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardText: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageShape: {
    width: '95%',
    height: 225,
    alignSelf: 'center',
  },
  graphTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    margin: 10
  },
  selectedButton: {
    backgroundColor: '#dddbdb',
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  anyButton:{
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  score:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 15
  },
  scoreText:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  questionText:{
    color:'#fff',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20
  }
});

export default styles;
