import React, {Component} from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles/styles.js';

export default class Header extends Component{
  render() {
    return (
      <View>
        <StatusBar
        backgroundColor = '#5DADE2'
        />
      <TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>SSol</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
