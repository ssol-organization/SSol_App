import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Header from './Header.js';
import CardGraph from '../Cards/Pages/CardGraph.js';
import CardHelp from '../Cards/Pages/CardHelp.js';
import CardStand from '../Cards/Pages/CardStand.js';

import styles from './styles/styles.js';

export default class MainPage extends Component{
  constructor() {
    super();
    this.state = {
      showStand: false,
      showForm: false,
      showGraph: false,
      showHelp: false,
      fotos: []
    };
  }
  showStandCard = () => {
    this.setState({ showStand: !this.state.showStand
      , showForm: false
      , showGraph: false
      , showHelp: false});
  };
  showGraphCard = () => {
    this.setState({ showStand: false
      , showForm: false
      , showGraph: !this.state.showGraph
      , showHelp: false});
  };
  showHelpCard = () => {
    this.setState({ showStand: false,
      showForm: false,
      showGraph: false,
      showHelp: !this.state.showHelp});
  };

  render() {
    return (
      <View style={styles.mainPage}>
        <Header/>
          <View style = {styles.mainPageCard}>
            {this.state.showStand ? <CardStand/> :
            (this.state.showForm ? <CardForm/> :
            (this.state.showGraph ? <CardGraph gameOn = {this.state.showGraph}/> :
            (this.state.showHelp ? <CardHelp/> : null)))}
          </View>
          <View style = {styles.buttonPage}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={this.showStandCard}>
                  <Text style={styles.buttonText}>Bancadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showGraphCard}>
                  <Text style={styles.buttonText}>Questionário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showHelpCard}>
                  <Text style={styles.buttonText}>Ajuda</Text>
                </TouchableOpacity>
              </ScrollView>
          </View>
      </View>
    );
  }
}
