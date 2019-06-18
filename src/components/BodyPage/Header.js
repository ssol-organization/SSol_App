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
        backgroundColor = '#5DADE2'
        />
      <TouchableOpacity onPress={this.props.triggerParentUpdate}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SSol</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
