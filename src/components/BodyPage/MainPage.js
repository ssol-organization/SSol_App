import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Header from './Header.js';
import CardQuestions from '../Cards/Pages/CardQuestions';
import CardHelp from '../Cards/Pages/CardHelp.js';
import CardStand from '../Cards/Pages/CardStand.js';

import styles from './styles/styles.js';

export default class MainPage extends Component{
  constructor() {
    super();
    this.state = {
      showStand: false,
      showForm: false,
      showQuestions: false,
      showHelp: false,
      fotos: []
    };
  }
  showStandCard = () => {
    this.setState({ showStand: !this.state.showStand
      , showForm: false
      , showQuestions: false
      , showHelp: false});
  };
  showQuestionsCard = () => {
    this.setState({ showStand: false
      , showForm: false
      , showQuestions: !this.state.showQuestions
      , showHelp: false});
  };
  showHelpCard = () => {
    this.setState({ showStand: false,
      showForm: false,
      showQuestions: false,
      showHelp: !this.state.showHelp});
  };

  render() {
    return (
      <View style={styles.mainPage}>
        <Header/>
          <View style = {styles.mainPageCard}>
            {this.state.showStand ? <CardStand/> :
            (this.state.showForm ? <CardForm/> :
            (this.state.showQuestions ? <CardQuestions gameOn = {this.state.showQuestions}/> :
            (this.state.showHelp ? <CardHelp/> : null)))}
          </View>
          <View style = {styles.buttonPage}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={this.showStandCard}>
                  <Text style={styles.buttonText}>Bancadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showQuestionsCard}>
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
