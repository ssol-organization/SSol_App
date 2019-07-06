import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, CameraRoll, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';
import ImageResizer from 'react-native-image-resizer';

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
      var options = { quality: 0.5, base64: true, orientation: "portrait", fixOrientation: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({ path: data.uri});
    }
  }
  acceptPhoto = () => {

    // Salvando img na galeria como png
    this.resizer(this.state.path);

    // Pegando img da galeria
    CameraRoll.getPhotos({
         first: 1,
         assetType: 'Photos',
       })
       .then(r => {
         this.setState({aux: r.edges})
         //Pegando URI da imagem da galeria
         this.state.aux.map((p,i) => {
           this.setState({path: p.node.image.uri});
           console.log("Na Galeria =========> " + this.state.path);
           this.callFetch(this.state.path);
         })
       })
       .catch((err) => {
         console.log(err);
       });

  }
  callFetch(path){
    RNFetchBlob.fetch('POST', 'http://ssolimprocessing.herokuapp.com/receive', {
      Authorization : "Bearer access-token",
      otherHeader : "foo",
      'Content-Type' : 'multipart/form-data',
    },[
      { name : 'foto', filename: 'foto.png', type:'image/foo', data: RNFetchBlob.wrap(path)},
    ]).then((response) => {
      console.log("Servidor ==========> " +  path);
      console.log("Resultado =========> " + response.data);
      console.log("Response =========> " + JSON.stringify(response));
    }).catch((error) => {
      console.log(error);
    })
    this.setState({back: true});
  }

  resizer(path){
    console.log("Resizer Fora =======> " + path);
    // Convertendo a img
    ImageResizer.createResizedImage(path, width, height, 'PNG', 100)
      .then((response) => {
        console.log("Resizer Dentro =========> " + JSON.stringify(response.uri));
        CameraRoll.saveToCameraRoll(response.uri, "photo");
      }).catch((err) => {
        console.log('err===>', err, '---err');
      });

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
//
