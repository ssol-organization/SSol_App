import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, CameraRoll, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';

import MainPage from '../BodyPage/MainPage.js';

import styles from './styles/styles.js';

const SSolImage = require('../../images/SSolImage.png');

export default class Camera extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.setState({ path: null, back: false });
  }
  takePicture = async function() {
    if (this.camera) {
      var options = { base64: true, quality: 0.5, fixOrientation: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({ path: data.uri});
    }
  }
  acceptPhoto = () => {
    CameraRoll.saveToCameraRoll(this.state.path,"photo");

    this.callFetch();

    this.setState({back: true});
  }
  callFetch(){
    RNFetchBlob.fetch('POST', 'http://ssolimprocessing.herokuapp.com/receive', {
      Authorization : "Bearer access-token",
      otherHeader : "foo",
      'Content-Type' : 'multipart/form-data',
    },[
      { name : 'foto', filename : 'foto.png', type:'image/png', data: this.state.path},
    ]).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
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
        <StatusBar
          hidden
        />
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
      this.state.back?<MainPage/>:
      <View style={styles.container}>
        {this.state.path != null? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}
