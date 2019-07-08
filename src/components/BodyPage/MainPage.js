import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, Button, Alert} from 'react-native';
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
                  4: "https://calculusapi.herokuapp.com/get_diagram?tipo=5&p=",
                  5: "http://ssolimprocessing.herokuapp.com/current_image"};// <===== Bancada
// A imagem da bancada não esta sendo atualizada
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
    this.getValue = this.getValue.bind(this);
  }
  componentWillMount(){
    this.getValue();
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
    Alert.alert(
        'Como você quer tirar sua foto?',
        ' ',
        [
          {text: 'Usar a ESP', onPress: () => (this.setState({pressSSol: true}) && fetch("https://calculusapi.herokuapp.com/get_diagram?tipo=0&p="))},
          {text: 'Usar a Câmera', onPress: () => this.setState({showCamera: true})},
        ],
        {cancelable: true},
  );
    return finished = false;
  };

  questionsFinished = () => {
    this.refresh();
    return this.state.finished = true;
  };
  refresh = () =>{
    RNFetchBlob.fetch("GET", "https://calculusapi.herokuapp.com/generate_new");
    let num = (Math.random()+1)*4;
    num = Math.floor(num);
    for (var i = 0; i < 5 ; i++) {
      urlImages[i] = urlImages[i].concat(String(num));
    }
  }
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
          {(this.state.showStand?<CardStand urlImages = {urlImages}/> :
          ((this.state.showDiagrams && this.state.finished === true) ? <CardDiagram urlImages={urlImages} refresh={this.refresh}/> :
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
            <Text></Text>
        </View>}
      </View>
    );
  }
}
//
