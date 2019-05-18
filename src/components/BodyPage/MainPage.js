import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Header from './Header.js';
import CardForm from '../Cards/Pages/CardForm.js';
import CardGraph from '../Cards/Pages/CardGraph.js';
import CardSettings from '../Cards/Pages/CardSettings.js';

import styles from './styles/styles.js';

export default class MainPage extends Component{
  constructor() {
    super();
    this.state = {
      showForm: false,
      showGraph: false,
      showSettings: false
    };
  }

  showFormCard = () => {
    if (this.state.showForm == false) {
      this.setState({ showForm: true, showGraph: false, showSettings: false});
    }
  };
  showGraphCard = () => {
    if (this.state.showGraph == false) {
      this.setState({ showForm: false, showGraph: true, showSettings: false});
    }
  };
  showSettingsCard = () => {
    if (this.state.showSettings == false) {
      this.setState({ showForm: false, showGraph: false, showSettings: true});
    }
  };

  render() {
    return (
      <View style={styles.mainPage}>
        <Header/>
          <View style = {styles.mainPageCard}>
            {this.state.showForm ? <CardForm/> :
            (this.state.showGraph ? <CardGraph/> :
            (this.state.showSettings ? <CardSettings/> : null))}
          </View>
          <View style = {styles.buttonPage}>
              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={this.showFormCard}>
                  <Text style={styles.buttonText}>Fórmulas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showGraphCard}>
                  <Text style={styles.buttonText}>Gráficos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.showSettingsCard}>
                  <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
              </View>
          </View>
      </View>
    );
  }
}
