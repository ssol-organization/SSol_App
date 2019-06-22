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
  contentHelpCard: {
    marginTop: 15,
    width: width - 20,
    height: height-343,
    marginBottom: 20,
    justifyContent:'space-around'
  },
  cardTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  secondTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    margin: 5
  },
  thirdTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 10
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
  plainText:{
    color:'#fff',
    fontSize: 15,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5
  }
});

export default styles;
