import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './Header.js';
import CardForm from '../Cards/Pages/CardForm.js';
import CardGraph from '../Cards/Pages/CardGraph.js';
import CardSettings from '../Cards/Pages/CardSettings.js';
import CardStand from '../Cards/Pages/CardStand.js';

import styles from './styles/styles.js';

export default class MainPage extends Component{
  constructor() {
    super();
    this.state = {
      showStand: false,
      showForm: false,
      showGraph: false,
      showSettings: false
    };
  }

  showStandCard = () => {
    this.setState({ showStand: !this.state.showStand
      , showForm: false
      , showGraph: false
      , showSettings: false});
  };
  showFormCard = () => {
    this.setState({ showStand: false
      , showForm: !this.state.showForm
      , showGraph: false
      , showSettings: false});
  };
  showGraphCard = () => {
    this.setState({ showStand: false
      , showForm: false
      , showGraph: !this.state.showGraph
      , showSettings: false});
  };
  showSettingsCard = () => {
    this.setState({ showStand: false,
      showForm: false,
      showGraph: false,
      showSettings: !this.state.showSettings});
  };

  render() {
    return (
      <View style={styles.mainPage}>
        <Header/>
          <View style = {styles.mainPageCard}>
            {this.state.showStand ? <CardStand/> :
            (this.state.showForm ? <CardForm/> :
            (this.state.showGraph ? <CardGraph/> :
            (this.state.showSettings ? <CardSettings/> : null)))}
          </View>
          <View style = {styles.buttonPage}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={this.showStandCard}>
                  <Icon name="camera" size={24} color="#fff" />
                  <Text style={styles.buttonText}>Bancadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showFormCard}>
                  <Icon name="edit" size={24} color="#fff" />
                  <Text style={styles.buttonText}>Fórmulas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showGraphCard}>
                  <Icon name="heart" size={24} color="#fff" />
                  <Text style={styles.buttonText}>Diagramas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showSettingsCard}>
                  <Icon name="cog" size={24} color="#fff" />
                  <Text style={styles.buttonText}>Configurações</Text>
                </TouchableOpacity>
              </ScrollView>
          </View>
      </View>
    );
  }
}
