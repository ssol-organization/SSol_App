import React, {Component} from 'react';
import { Text, View, Animated, Image, ScrollView, Button, TouchableOpacity } from 'react-native';

import styles from '../styles/styles.js';

export default class CardGraph extends Component{
  state = {
    url0: null,
    url1: null,
    url2: null,
    url3: null,
    url4: null,
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
    this.props.refresh;
    this.setState({
      url0: this.props.urlImages[0],
      url1: this.props.urlImages[1],
      url2: this.props.urlImages[2],
      url3: this.props.urlImages[3],
      url4: this.props.urlImages[4],
    });
    console.log("URL0 ======> " + this.props.urlImages[0]);
    console.log("URL1 ======> " + this.props.urlImages[1]);
    console.log("URL2 ======> " + this.props.urlImages[2]);
    console.log("URL3 ======> " + this.props.urlImages[3]);
    console.log("URL4 ======> " + this.props.urlImages[4]);
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
            <Image source={{uri: this.state.url0}}
              style={styles.graphShape}
            />
            <Text style={styles.secondTitle}>Forças de reação</Text>
            <Image source={{uri: this.state.url1}}
              style={styles.graphShape}
            />
            <Text style={styles.secondTitle}>Esforço Cortante</Text>
            <Image source={{uri: this.state.url2}}
              style={styles.graphShape}
            />
            <Text style={styles.secondTitle}>Momento Fletor</Text>
            <Image source={{uri: this.state.url3}}
              style={styles.graphShape}
            />
            <Text style={styles.secondTitle}>Deflexão</Text>
            <Image source={{uri: this.state.url4}}
              style={styles.graphShape}
            />
          </ScrollView>
          <TouchableOpacity style={styles.anyButton} onPress={this.props.refresh}>
            <Text style={styles.buttonText}>Recarregar</Text>
          </TouchableOpacity>
        </View>
        </Animated.View>
    );
  }
}
