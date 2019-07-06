import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, AsyncStorage, Button} from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';

import Header from './Header.js';
import CardQuestions from '../Cards/Pages/CardQuestions';
import CardHelp from '../Cards/Pages/CardHelp.js';
import CardStand from '../Cards/Pages/CardStand.js';
import CardDiagram from '../Cards/Pages/CardDiagram.js';
import Camera from '../Camera/Camera.js';

import styles from './styles/styles.js';

const SSolImage = require('../../images/SSolImage.png');

var urlImages  = {0: "https://calculusapi.herokuapp.com/get_diagram?tipo=0&p=",
                  1: "https://calculusapi.herokuapp.com/get_diagram?tipo=1&p=",
                  2: "https://calculusapi.herokuapp.com/get_diagram?tipo=3&p=",
                  3: "https://calculusapi.herokuapp.com/get_diagram?tipo=4&p=",
                  4: "https://calculusapi.herokuapp.com/get_diagram?tipo=5&p="};

export default class MainPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showDiagrams: false,
      showStand: false,
      showQuestions: false,
      showHelp: false,
      count: 0,
      pressSSol: false,
      finished: false,
      showCamera: false,
      photoAddress: '',
    };
    this.wasSSolpressed = this.wasSSolpressed.bind(this);
  }
  componentWillMount(){
  }
  showStandCard = () => {
    if(this.state.pressSSol === true){
      this.setState({ showStand: !this.state.showStand
        , showDiagrams: false
        , showQuestions: false
        , showHelp: false});
      }
  };
  showDiagramsCard = () => {
    if(this.state.finished === true){
      this.setState({ showStand: false
        , showDiagrams: !this.state.showDiagrams
        , showQuestions: false
        , showHelp: false});
    }
  };
  showQuestionsCard = () => {
    this.getValue();
    if(this.state.pressSSol === true){
      this.setState({ showStand: false
        , showDiagrams: false
        , showQuestions: !this.state.showQuestions
        , showHelp: false});
    }
  };
  showHelpCard = () => {
    this.setState({ showStand: false
      , showDiagrams: false
      , showQuestions: false
      , showHelp: !this.state.showHelp});
  };
  wasSSolpressed = () => {
    if(this.state.pressSSol === false){
      this.setState({
        count: (this.state.count+1)%2,
        pressSSol: true,
        showCamera: true
      })
    }
    else {
      this.setState({
        count: (this.state.count+1)%2,
        showDiagrams: false,
        showStand: false,
        showQuestions: false,
        showHelp: false,
        questionsAnswered: false,
        finished: false
      });

      let num = Math.random()*4;
      num = Math.floor(num);
      for (var i = 0; i < 5 ; i++) {
        urlImages[i] = urlImages[i].concat(String(num));
      }
    }
    return finished = false;
  };

  questionsFinished = () => {
    return this.state.finished = true;
  };

  getValue = () =>{
      RNFetchBlob.fetch('GET', 'http://ssolimprocessing.herokuapp.com/current_image', {
      Authorization : 'Bearer access-token...',
    }).then((response) => {
        let status = response.info().status;
        if(status == 200) {
          console.log('Foi');
          this.setState({pressSSol: true});
        }
        else {
          console.log(response);
        }
    }).catch((errorMessage, statusCode) => {
      console.log(errorMessage);
    })
  }

  render() {
    return (
      <View style={styles.mainPage}>
        {this.state.showCamera?<Camera/>:
        <View style={{flex:1}}>
        <Header SSolButton={this.wasSSolpressed}/>
          <View style = {styles.mainPageCard}>
          {(this.state.showStand?<CardStand/> :
          ((this.state.showDiagrams && this.state.finished === true) ? <CardDiagram urlImages={urlImages}/> :
          (this.state.showQuestions ? <CardQuestions counterBin = {this.state.count}
            finished = {this.questionsFinished}
            allDone={this.state.finished}/> :
            (this.state.showHelp ? <CardHelp/> : <Image source={SSolImage} style={styles.mainImage}/>))))}
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
        </View>}
      </View>
    );
  }
}
//
