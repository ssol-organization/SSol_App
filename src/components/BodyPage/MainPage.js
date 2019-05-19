import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Header from './Header.js';
import CardForm from '../Cards/Pages/CardForm.js';
import CardGraph from '../Cards/Pages/CardGraph.js';
import CardSettings from '../Cards/Pages/CardSettings.js';
import CardDiagrams from '../Cards/Pages/CardDiagrams.js';

import styles from './styles/styles.js';

export default class MainPage extends Component{
  constructor() {
    super();
    this.state = {
      showDiagrams: false,
      showForm: false,
      showGraph: false,
      showSettings: false
    };
  }

  showDiagramsCard = () => {
    this.setState({ showDiagrams: !this.state.showDiagrams, showForm: false, showGraph: false, showSettings: false});
  };
  showFormCard = () => {
    this.setState({ showDiagrams: false, showForm: !this.state.showForm, showGraph: false, showSettings: false});
  };
  showGraphCard = () => {
    this.setState({ showDiagrams: false, showForm: false, showGraph: !this.state.showGraph, showSettings: false});
  };
  showSettingsCard = () => {
    this.setState({ showDiagrams: false, showForm: false, showGraph: false, showSettings: !this.state.showSettings});
  };

  render() {
    return (
      <View style={styles.mainPage}>
        <Header/>
          <View style = {styles.mainPageCard}>
            {this.state.showDiagrams ? <CardDiagrams/> :
            (this.state.showForm ? <CardForm/> :
            (this.state.showGraph ? <CardGraph/> :
            (this.state.showSettings ? <CardSettings/> : null)))}
          </View>
          <View style = {styles.buttonPage}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={this.showDiagramsCard}>
                  <Text style={styles.buttonText}>Diagramas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showFormCard}>
                  <Text style={styles.buttonText}>Fórmulas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showGraphCard}>
                  <Text style={styles.buttonText}>Gráficos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showSettingsCard}>
                  <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
              </ScrollView>
          </View>
      </View>
    );
  }
}
