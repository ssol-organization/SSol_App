import React, {Component} from 'react';
import { Text, View, Animated, ScrollView, Image } from 'react-native';

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
        <Text style = {styles.cardTitle}>Ajuda</Text>
        <ScrollView style={styles.contentCard}>
          <Text>Bem vindo ao aplicativo do projeto SSOL</Text>
          <Text>As instruções básicas para utilização são:</Text>
          <Text>1 - Ajuste os pesos na bancada</Text>
          <Text>2 - Aperte no botão SSOL na parte superior da tela para carregar uma nova imagem da sua bancada</Text>
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </View>
      </Animated.View>
    );
  }
}
