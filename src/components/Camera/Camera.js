import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, CameraRoll, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';

import MainPage from '../BodyPage/MainPage.js';

import styles from './styles/styles.js';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Camera extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.setState({ path: null, back: false, data: null, aux: null});
  }
  takePicture = async function() {
    if (this.camera) {
      var options = { base64: true, fixOrientation: true , skipProcessing: true, width: width, height: height};
      const data = await this.camera.takePictureAsync(options);
      this.setState({ path: data.uri});
    }
  }
  acceptPhoto = () => {
    this.callFetch(this.state.path);
  }
  callFetch(path){
    RNFetchBlob.fetch('POST', 'http://ssolimprocessing.herokuapp.com/receive', {
      Authorization : "Bearer access-token",
      otherHeader : "foo",
      'Content-Type' : 'multipart/form-data',
    },[
      { name : 'foto', filename: 'foto.jpg', type:'image/foo', data: RNFetchBlob.wrap(path)},
    ]).then((response) => {
      console.log("Servidor ==========> " +  path);
      console.log("Resultado =========> " + response.data);
      console.log("Response =========> " + JSON.stringify(response));
    }).catch((error) => {
      console.log(error);
    })
    this.setState({back: true});
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
          style={styles.previewCamera}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
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
      <View style={styles.container}>
        <StatusBar
          hidden
        />
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
          <View >
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
//
