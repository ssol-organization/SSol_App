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

var urlImages  = {0: "https://calculusapi.herokuapp.com/get_diagram?tipo=0",
                  1: "https://calculusapi.herokuapp.com/get_diagram?tipo=1",
                  2: "https://calculusapi.herokuapp.com/get_diagram?tipo=3",
                  3: "https://calculusapi.herokuapp.com/get_diagram?tipo=4",
                  4: "https://calculusapi.herokuapp.com/get_diagram?tipo=5",
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
  }
  componentWillMount(){
  }
  showStandCard = () => {
    if(this.state.pressSSol === false){
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
    if(this.state.pressSSol === false){
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
  ESP = () =>{
    this.setState({pressSSol: false});
    RNFetchBlob.fetch('GET', 'http://ssolimprocessing.herokuapp.com/espreceive',);
  }
  wasSSolpressed = () => {
    this.setState({
      count: (this.state.count+1)%2
    });
    console.log("Counter: "+this.state.count);
    Alert.alert(
        'Como você quer tirar sua foto?',
        ' ',
        [
          {text: 'Usar a ESP', onPress: () => this.ESP()},
          {text: 'Usar a Câmera', onPress: () => this.setState({showCamera: true})},
        ],
        {cancelable: true},
  );
    return finished = false;
  };

  questionsFinished = () => {
    this.refresh();
  };
  refresh = () => {
    console.log("Entrou");
    fetch("https://calculusapi.herokuapp.com/generate_new")
      .then((response) => {
            console.log("Generate_New fetch ====> "+ JSON.stringify(response));
            Alert.alert(
                'Os diagramas foram carregados',
                ' ',
                [
                  {text: 'OK', onPress: () => console.log("Terminou")}
                ],
            );
            return this.state.finished = true;
      }).catch((error) => {
        console.log("Generate_New error ====> "+error);
      });
  }
  render() {
    return (
      <View style={styles.mainPage}>
        {this.state.showCamera?<Camera/>:
        <View style={{flex:1}}>
        <Header SSolButton={this.wasSSolpressed}/>
          <View style = {styles.mainPageCard}>
          {(this.state.showStand?<CardStand urlImages = {urlImages}/> :
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
            <Text></Text>
        </View>}
      </View>
    );
  }
}
//
