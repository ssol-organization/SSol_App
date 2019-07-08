import React, {Component} from 'react';
import { Text, View, Animated, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import {CachedImage, ImageCacheProvider} from 'react-native-cached-image';

import styles from '../styles/styles.js';

export default class CardGraph extends Component{
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
  componentWillMount() {
    // this.props.refresh;
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View style={{
            ...this.props.style,
            opacity: fadeAnim,
          }}
        >
        <View style={styles.mainCard}>
          <Text style = {styles.cardTitle}>Diagramas</Text>
          <ScrollView style={styles.contentCard} showsVerticalScrollIndicator={false}>
            <Text style={styles.secondTitle}>Diagrama Estrutural</Text>
            <Image source={{ uri: "https://calculusapi.herokuapp.com/get_diagram?tipo=0&0.976800591829772",
                 method: 'GET',
                 headers: { Pragma: 'no-cache'},}}
                 style={{width: 400, height: 400}} />
            <Text style={styles.secondTitle}>Forças de reação</Text>
            <Image source={{uri: this.props.urlImages[1]}}
              style={styles.graphShape}
            />
            <Text style={styles.secondTitle}>Esforço Cortante</Text>
            <Image source={{uri: this.props.urlImages[2]}}
              style={styles.graphShape}
            />
            <Text style={styles.secondTitle}>Momento Fletor</Text>
            <Image source={{uri: this.props.urlImages[3]}}
              style={styles.graphShape}
            />
            <Text style={styles.secondTitle}>Deflexão</Text>
            <Image source={{uri: this.props.urlImages[4]}}
              style={styles.graphShape}
            />
          </ScrollView>
        </View>
        </Animated.View>
    );
  }
}
