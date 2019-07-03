import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, CameraRoll, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

import MainPage from '../BodyPage/MainPage.js';

import styles from './styles/styles.js';

const SSolImage = require('../../images/SSolImage.png');

export default class Camera extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.setState({ path: null });
  }
  takePicture = async function() {
    if (this.camera) {
      var options = { base64: true, quality: 0.5, fixOrientation: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({ path: data.uri});
    }
  }
  acceptPhoto = () => {
    console.log("Foto: " + this.state.path);
    CameraRoll.saveToCameraRoll(this.state.path,"photo");
    this.callFetch();
    this.setState({path: null});
  }
  callFetch(){

  }
  renderCamera(){
    return(
      <View style={styles.container}>
        <StatusBar
          hidden
        />
        <RNCamera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos de permissão para usar sua câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          >
          <TouchableOpacity
            style={styles.capture}
            onPress={this.takePicture.bind(this)}
            underlayColor="rgba(255, 255, 255, 0.5)"
            >
            <View />
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
  renderImage(){
    return(
      <View style={{flex: 1}}>
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancelar
        </Text>
        <Text
          style={styles.accept}
          onPress={this.acceptPhoto}
        > Aceitar
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.path != null? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}
