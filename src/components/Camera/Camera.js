import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, CameraRoll } from 'react-native';
import { RNCamera } from 'react-native-camera';

import MainPage from '../BodyPage/MainPage.js';

import styles from './styles/styles.js';

const SSolImage = require('../../images/SSolImage.png');

export default class Camera extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.setState({ back: true, photoAddress: ''})
  }
  takePicture = async function() {
    if (this.camera) {
      var options = { base64: true };
      var data = await this.camera.takePictureAsync(options);
      CameraRoll.saveToCameraRoll(data.uri,"photo");

      this.props.getValue(data.uri);

      const formData = {"foto": data.uri};
      console.log(SSolImage);
      console.log("FormData: " + JSON.stringify(formData));

      var settings = {
        "async": true,
        "crossDomain": true,
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          // "Cache-Control": "no-cache",
          // "accept-encoding": "gzip, deflate",
          // "content-length": "11668",
          // "Connection": "keep-alive",
          // "cache-control": "no-cache"
        },
        "processData": false,
        "contentType": false,
        "body": "multipart/form-data",
        "data": formData
      }

    this.setState({back: false, photoAddress: data.uri});
    const test = await fetch("http://ssolimprocessing.herokuapp.com/receive", settings)
      // .then(response => response())
      .then(response => console.log(response))
      .catch(error => console.log(error));
      // .then(formData => console.log(formData))
      // console.log(this.state.photoAddress);
    }
  }
  render() {
    return (
      this.state.back?<View style={styles.container}>
        <StatusBar
          hidden
        />
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a câmera',
              message: 'Precisamos de permissão para usar sua câmera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}

        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
       >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>:<MainPage/>
    );
  }
}
