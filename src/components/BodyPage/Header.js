import React, {Component} from 'react';
import { StatusBar, View, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles/styles.js';

export default class Header extends Component{
  render() {
    return (
      <View>
        <StatusBar
        backgroundColor = '#5DADE2'
        />
      <TouchableOpacity onPress={() => {Alert.alert("Something")}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SSol</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
