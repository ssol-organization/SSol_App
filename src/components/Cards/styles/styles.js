import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: '#7EBDE8',
    borderRadius: 5,
    width: width - 20,
    height: width,
    alignItems: 'center',
    elevation: 5
  },
  cardTitle: {
    color: '#fff',
    fontSize: 40
  },
  cardText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'}
});

export default styles;
