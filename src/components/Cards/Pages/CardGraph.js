import React, {Component} from 'react';
import { Text, View, Animated, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from '../styles/styles.js';

const nyanCat = require('../../../images/nyanCat.gif')
const sealJudging = require('../../../images/sealJudging.gif')

export default class CardGraph extends Component{
  constructor(){
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),
      error: false,
      pressed: false,
      buttonAnswer1: false,
      buttonAnswer2: false,
      buttonAnswer3: false,
      buttonNext: false
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,{
        toValue: 1,
        duration: 250,
      }
    ).start();
  };

  componentWillMount() {
    let num = Math.random()*3;
    num = Math.floor(num);
    switch (num) {
      case 0:
        this.setState({buttonAnswer1: true})
        break;
      case 1:
        this.setState({buttonAnswer2: true})
        break;
      case 2:
        this.setState({buttonAnswer3: true})
        break;
    };
  }
  buttonPress1 = () => {
    if(this.state.pressed === false){
      if(this.state.buttonAnswer1 === true){
        this.setState({
          pressed: true,
          error: false
        });
      } else  {
        this.setState({
          pressed: true,
          error: true
        });
      }
    }
  };

  buttonPress2 = () => {
    if(this.state.pressed === false){
      if(this.state.buttonAnswer2 === true){
        this.setState({
          pressed: true,
          error: false
        });
      } else  {
        this.setState({
          pressed: true,
          error: true
        });
      }
    }
  };

  buttonPress3 = () => {
    if(this.state.pressed === false){
      if(this.state.buttonAnswer3 === true){
        this.setState({
          pressed: true,
          error: false
        });
      } else  {
        this.setState({
          pressed: true,
          error: true
        });
      }
    }
  };

  buttonNextPress = () => {
    this.setState({
      buttonNext: true,
      buttonAnswer1: false,
      buttonAnswer2: false,
      buttonAnswer3: false,
      pressed: false
    });

    let num = Math.random()*3;
    num = Math.floor(num);
    switch (num) {
      case 0:
        this.setState({buttonAnswer1: true})
        break;
      case 1:
        this.setState({buttonAnswer2: true})
        break;
      case 2:
        this.setState({buttonAnswer3: true})
        break;
    };

  };

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View
          style={{
            ...this.props.style,
            opacity: fadeAnim,
          }}
        >
        <View style={styles.mainCard}>
          <Text style = {styles.cardTitle}>Diagramas</Text>
          <ScrollView style={styles.contentCard}>
            <View style={{justifyContent:'space-between'}}>
              <TouchableOpacity
                style={(this.state.pressed === true && this.state.buttonAnswer1 === true)?styles.botaoCerto:
                  ((this.state.pressed === true && this.state.buttonAnswer1 === false)?styles.botaoErrado:
                  styles.botaoQualquer)}
                onPress={this.buttonPress1}>
                <Text style={styles.cardTitle}>Botão 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={(this.state.pressed === true && this.state.buttonAnswer2 === true)?styles.botaoCerto:
                  ((this.state.pressed === true && this.state.buttonAnswer2 === false)?styles.botaoErrado:
                  styles.botaoQualquer)}
                onPress={this.buttonPress2}>
                <Text style={styles.cardTitle}>Botão 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={(this.state.pressed === true && this.state.buttonAnswer3 === true)?styles.botaoCerto:
                  ((this.state.pressed === true && this.state.buttonAnswer3 === false)?styles.botaoErrado:
                  styles.botaoQualquer)}
                onPress={this.buttonPress3}>
                <Text style={styles.cardTitle}>Botão 3</Text>
              </TouchableOpacity>
              <View>
                {this.state.pressed === false ? null:
                  (this.state.error === false ?
                    (<View>
                      <Image source={nyanCat} style={styles.imageShape}/>
                      <TouchableOpacity style={(this.state.buttonNext === false)?styles.cardText:styles.botao} onPress={this.buttonNextPress}>
                          <Text style={styles.cardTitle}>Next</Text>
                      </TouchableOpacity>
                    </View>
                    ):
                    <View>
                      <Image source={sealJudging} style={styles.imageShape}/>
                      <TouchableOpacity style={(this.state.buttonNext === false)?styles.cardText:styles.botao} onPress={this.buttonNextPress}>
                        <Text style={styles.cardTitle}>Next</Text>
                      </TouchableOpacity>
                    </View>
                )
                }
              </View>
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
}
