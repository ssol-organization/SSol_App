import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    width: width - 20,
    height: height-270,
    top: -10,
    bottom: 70,
  },
  contentCard: {
    flexGrow: 1,
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
    top: 10,
    bottom: 10,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  secondTitle: {
    top: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    margin: 5
  },
  thirdTitle: {
    fontSize: 20,
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
    height: 170,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  graphShape: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    resizeMode:"center"
    // marginTop: 10,
    // marginBottom: 10,
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
  options:{
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
    height: 150,
  },
  score:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height-270,
    margin: 10,
    marginTop: 15,
    flex: 1,
  },
  scoreText:{
    fontSize: 90,
    fontWeight: 'bold',
    color: '#fff',
    right: 13,
    bottom: 100
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
