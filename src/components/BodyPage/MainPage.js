import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Header from './Header.js';
import CardQuestions from '../Cards/Pages/CardQuestions';
import CardHelp from '../Cards/Pages/CardHelp.js';
import CardStand from '../Cards/Pages/CardStand.js';
import CardDiagram from '../Cards/Pages/CardDiagram.js'

import styles from './styles/styles.js';

export default class MainPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showDiagrams: false,
      showStand: false,
      showQuestions: false,
      showHelp: false,
      fotos: [],
      count: 0,
      pressSSol: false,
      questionsAnswered: false
    };
    this.updateThisCounter = this.updateThisCounter.bind(this);
  }
  showStandCard = () => {
    this.setState({ showStand: !this.state.showStand
      , showDiagrams: false
      , showQuestions: false
      , showHelp: false});
  };
  showDiagramsCard = () => {
    this.setState({ showStand: false
      , showDiagrams: !this.state.showStand
      , showQuestions: false
      , showHelp: false});
  };
  showQuestionsCard = () => {
    this.setState({ showStand: false
      , showDiagrams: false
      , showQuestions: !this.state.showQuestions
      , showHelp: false});
  };
  showHelpCard = () => {
    this.setState({ showStand: false
      , showDiagrams: false
      , showQuestions: false
      , showHelp: !this.state.showHelp});
  };
  updateThisCounter = () => {
    if(this.state.pressSSol === false){
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count%2);
    }
    this.setState({
      pressSSol: true
    });
  };

  render() {
    return (
      <View style={styles.mainPage}>
        <Header triggerParentUpdate={this.updateThisCounter}/>
          <View style = {styles.mainPageCard}>
          {this.state.showStand ? <CardStand/> :
          (this.state.showDiagrams ? <CardDiagram/> :
          (this.state.showQuestions ? <CardQuestions/> :
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
                <TouchableOpacity style={styles.button} onPress={this.showDiagramsCard}>
                <Text style={styles.buttonText}>Diagramas</Text>
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
