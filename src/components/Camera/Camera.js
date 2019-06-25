import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';

import MainPage from '../BodyPage/MainPage.js';

import styles from './styles/styles.js';

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
      this.setState({back: false, photoAddress: data.uri});
      console.log(this.state.photoAddress);
      return data.uri;
      // console.log(this.props.showCamera);
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
