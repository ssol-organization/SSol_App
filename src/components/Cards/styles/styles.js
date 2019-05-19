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
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCard: {
    top: -5,
    height: 40,
  },
  contentCard: {
    top: 15,
    height: height-343,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardText: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
