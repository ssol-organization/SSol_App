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
        <View style={styles.contentHelpCard}>
          <Text style={styles.secondTitle}>Bem vindo ao aplicativo do projeto SSOL</Text>
          <Text style={styles.secondTitle}>As instruções básicas são:</Text>
          <Text style={styles.plainText}>1 - Ajuste os pesos na bancada</Text>
          <Text style={styles.plainText}>2 - Aperte no botão SSOL, na parte superior da tela, para carregar uma nova imagem da sua bancada</Text>
          <Text style={styles.plainText}>3 - As funções Bancada e Questionario só estarão disponíveis após o botão SSOL ser pressionado</Text>
          <Text style={styles.plainText}>4 - A função Diagramas só estará disponível após o termino do questionario</Text>
        </View>
      </View>
      </Animated.View>
    );
  }
}
