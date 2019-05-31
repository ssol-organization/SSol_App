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
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  // titleCard: {
  //   top: -5,
  //   height: 40,
  // },
  contentCard: {
    marginTop: 15,
    width: width - 20,
    height: height-343,
    marginBottom: 20,
  },
  cardTitle: {
    marginTop: 10,
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
    borderRadius: 20
  },
  graphTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    margin: 10
  }
});

export default styles;
