import React, {Component} from 'react';
import { Text, View, Animated } from 'react-native';

import styles from '../styles/styles.js';

export default class CardSettings extends Component{
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
        <Text style = {styles.cardTitle}>Configurações</Text>
        <View style={styles.cardText}>
              <Text style={styles.buttonText}>CONFIGURAÇÕES AQUI</Text>
        </View>
      </View>
      </Animated.View>
    );
  }
}
