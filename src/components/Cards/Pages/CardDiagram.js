import React, {Component} from 'react';
import { Text, View, Animated, Image, ScrollView, Button, TouchableOpacity, Linking } from 'react-native';
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
            <TouchableOpacity onPress={() => Linking.openURL( this.props.urlImages[0])} style={styles.anyButton}>
              <Text style={styles.buttonText}>Estrutural</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL( this.props.urlImages[1])} style={styles.anyButton}>
              <Text style={styles.buttonText}>Forças de reação</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL( this.props.urlImages[2])} style={styles.anyButton}>
              <Text style={styles.buttonText}>Esforço Cortante</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL( this.props.urlImages[3])} style={styles.anyButton}>
              <Text style={styles.buttonText}>Momento Fletor</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL( this.props.urlImages[4])} style={styles.anyButton}>
              <Text style={styles.buttonText}>Deformação</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        </Animated.View>
    );
  }
}
