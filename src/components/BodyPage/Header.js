import React, {Component} from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles/styles.js';

export default class Header extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor = '#00A9EE'
        />
        <TouchableOpacity style={styles.header} onPress={this.props.SSolButton}>
            <Text style={styles.headerText}>SSol</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
