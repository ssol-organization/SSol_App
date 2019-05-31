import React, {Component} from 'react';
import { Text, View, Animated, Image, ScrollView } from 'react-native';

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
          <Text style = {styles.cardTitle}>Diagramas</Text>
          <ScrollView style={styles.contentCard}>
            <Text style={styles.graphTitle}>Diagrama Estrutural</Text>
            <Image source={{uri: "https://calculusapi.herokuapp.com/get_diagram?tipo=0"}}
              style={styles.imageShape}
            />
            <Text style={styles.graphTitle}>Forças de reação</Text>
            <Image source={{uri: "https://calculusapi.herokuapp.com/get_diagram?tipo=1"}}
              style={styles.imageShape}
            />
            <Text style={styles.graphTitle}>Axial</Text>
            <Image source={{uri: "https://calculusapi.herokuapp.com/get_diagram?tipo=2"}}
              style={styles.imageShape}
            />
            <Text style={styles.graphTitle}>Esforço Cortante</Text>
            <Image source={{uri: "https://calculusapi.herokuapp.com/get_diagram?tipo=3"}}
              style={styles.imageShape}
            />
            <Text style={styles.graphTitle}>Momento Fletor</Text>
            <Image source={{uri: "https://calculusapi.herokuapp.com/get_diagram?tipo=4"}}
              style={styles.imageShape}
            />
            <Text style={styles.graphTitle}>Deslocamento</Text>
            <Image source={{uri: "https://calculusapi.herokuapp.com/get_diagram?tipo=5"}}
              style={styles.imageShape}
            />
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
}
