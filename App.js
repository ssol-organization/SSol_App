import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar, CameraRoll, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class Camera extends Component{
  constructor(props){
    super(props);
    // this.setState({ path: null });
  }
  componentWillMount(){
    this.setState({ path: null,back: true, photoAddress: ''})
  }
  takePicture = async function() {
    if (this.camera) {
      var options = { base64: true, quality: 0.5};
      const data = await this.camera.takePictureAsync(options);
      this.setState({ path: data.uri });
    }
  }
  acceptPhoto = () => {
    console.log("Foto: " + this.state.path);
    CameraRoll.saveToCameraRoll(this.state.path,"photo");
    this.callFetch();
    // this.setState({path: null});
  }
  callFetch = () => {
    // const form = new FormData();
    // form.append("foto", {uri: this.state.path});
    const form = JSON.stringify({"foto": this.state.path});
    console.log(form);
    const url = "http://ssolimprocessing.herokuapp.com/receive";
    var settings = {
      "method": "POST",
      "headers": {
        "Content-Type": "multipart/form-data"
      },
      body: form
    }
    const response = fetch(url, settings)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  renderCamera() {
    return (
      <RNCamera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        flashMode={RNCamera.Constants.FlashMode.off}
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
    );
  }
  renderImage() {
    return (
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
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },
  accept: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }
});
