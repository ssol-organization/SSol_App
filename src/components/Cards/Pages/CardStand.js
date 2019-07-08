import React, {Component} from 'react';
import { Text, View, Animated, Image, TouchableOpacity, Linking} from 'react-native';

import styles from '../styles/styles.js';

export default class CardStand extends Component{
  state = {
    fadeAnim: new Animated.Value(0),
    url: null
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
          <TouchableOpacity onPress={() => Linking.openURL(this.props.urlImages[5])} style={styles.anyButton}>
            <Text style={styles.buttonText}>Foto da bancada</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Animated.View>
    );
  }
}
