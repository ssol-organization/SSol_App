import React, {Component} from 'react';
import { Text, View, Animated, ScrollView, Image} from 'react-native';


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
        <ScrollView style={styles.contentCard}>
          <Text style={{fontSize:96}}>Scroll me plz</Text>

        </ScrollView>
      </View>
      </Animated.View>
    );
  }
}
