import React, {Component} from 'react';
import { StatusBar, View, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles/styles.js';

export default class Header extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <StatusBar
        backgroundColor = '#58A9EB'
        />
      <TouchableOpacity style={styles.header} onPress={this.props.SSolButton}>
          <Text style={styles.headerText}>SSol</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
