import React, {Component} from 'react';
import { Text, View, Animated, Image} from 'react-native';

import styles from '../styles/styles.js';

export default class CardStand extends Component{
  state = {
    fadeAnim: new Animated.Value(0),
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 250,
      }
    ).start();
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
      <View style={styles.mainCard}>
        <Text style = {styles.cardTitle}>Bancadas</Text>
        <View style={styles.contentCard}>
          <Text style={styles.secondTitle}>Foto da bancada</Text>
          <Image source={{uri: this.props.urlImages[5]}} style={styles.graphShape}/>
        </View>
      </View>
      </Animated.View>
    );
  }
}
