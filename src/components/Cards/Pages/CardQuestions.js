import React, {Component} from 'react';
import { Text, View, Animated, Image, ScrollView, TouchableOpacity} from 'react-native';

import styles from '../styles/styles.js';

const nyanCat = require('../../../images/nyanCat.gif')
const sealJudging = require('../../../images/sealJudging.gif')
var buttonsChoices = {0:"A", 1:"B", 2:"C", 3:"D", 4:"E", 5:"F", 6:"G", 7:"H", 8:"I", 9:"J", 10:"K", 11:"L"};
var questionsTitles = {0:"Questão 1", 1:"Questão 2", 2:"Questão 3", 3:"Questão 4"};
var questionsAnswers = {0:"", 1:"A resposta correta é:", 2:"Resposta 3", 3:"Resposta 4"};

export default class CardGraph extends Component{
  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      error: false,
      buttonAnswer1: false,
      buttonAnswer2: false,
      buttonAnswer3: false,
      buttonNext: false,
      buttonConfirm:false,
      buttonNumber1: "",
      buttonNumber2: "",
      buttonNumber3: "",
      cardTitle:"",
      counterButtons: 1,
      score: 0,
      showDiagrams: false,
      answers: "",
      buttonSelected1: false,
      buttonSelected2: false,
      buttonSelected3: false,
      pressed1: false,
      pressed2: false,
      pressed3: false,
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,{
        toValue: 1,
        duration: 250,
      }
    ).start();
  };

  componentWillMount() {
    let num = Math.random()*3;
    num = Math.floor(num);
    switch (num) {
      case 0:
        this.setState({buttonAnswer1: true
          , buttonNumber1:buttonsChoices[num+1]
          , buttonNumber2:buttonsChoices[num]
          , buttonNumber3:buttonsChoices[num+2]})
        break;
      case 1:
        this.setState({buttonAnswer2: true
          , buttonNumber1:buttonsChoices[num+1]
          , buttonNumber2:buttonsChoices[num]
          , buttonNumber3:buttonsChoices[num-1]})
        break;
      case 2:
        this.setState({buttonAnswer3: true
          , buttonNumber1:buttonsChoices[num-2]
          , buttonNumber2:buttonsChoices[num]
          , buttonNumber3:buttonsChoices[num-1]})
        break;
    };

    this.setState({
      cardTitle:questionsTitles[this.state.counterButtons-1],
      answers:questionsAnswers[this.state.counterButtons-1],
    })
  }

  randomQuestion = () =>{
    let num = Math.random()*3;
    num = Math.floor(num);
    switch (num) {
      case 0:
        this.setState({buttonAnswer1: true
          ,buttonNumber1:buttonsChoices[num+((this.state.counterButtons)*3)+1]
          ,buttonNumber2:buttonsChoices[num+((this.state.counterButtons)*3)]
          ,buttonNumber3:buttonsChoices[num+((this.state.counterButtons)*3)+2]})
      break;
      case 1:
        this.setState({buttonAnswer2: true
          ,buttonNumber1:buttonsChoices[num+((this.state.counterButtons)*3)+1]
          ,buttonNumber2:buttonsChoices[num+((this.state.counterButtons)*3)]
          ,buttonNumber3:buttonsChoices[num+((this.state.counterButtons)*3)-1]})
      break;
      case 2:
        this.setState({buttonAnswer3: true
          ,buttonNumber1:buttonsChoices[num+((this.state.counterButtons)*3)-2]
          ,buttonNumber2:buttonsChoices[num+((this.state.counterButtons)*3)]
          ,buttonNumber3:buttonsChoices[num+((this.state.counterButtons)*3)-1]})
      break;
      };
  }

  buttonNextPress = () => {
    this.setState({
      buttonNext: true,
      buttonConfirm: false,
      buttonAnswer1: false,
      buttonAnswer2: false,
      buttonAnswer3: false,
      counterButtons:this.state.counterButtons+1,
      cardTitle:questionsTitles[this.state.counterButtons],
      buttonSelected1: false,
      buttonSelected2: false,
      buttonSelected3: false,
      pressed1: false,
      pressed2: false,
      pressed3: false,
      answers:questionsAnswers[this.state.counterButtons],
    })

    this.randomQuestion();

    if(this.state.counterButtons === 4){
      this.props.answeredAll = true;
    }
  };

  buttonConfirmPressed = () => {
    if(this.state.pressed1 === false && this.state.pressed2 === false && this.state.pressed3 === false){
      null;
    } else {
      this.setState({
        buttonNext: true,
        buttonConfirm: true,
        buttonAnswer1: false,
        buttonAnswer2: false,
        buttonAnswer3: false,
        buttonSelected1: false,
        buttonSelected2: false,
        buttonSelected3: false,
        pressed1: false,
        pressed2: false,
        pressed3: false,
      });

      this.randomQuestion();

      if(this.state.buttonSelected1 === true && this.state.buttonAnswer1 === true){
        this.setState({
          error: false,
          score:this.state.score+1,
        })
      }else if(this.state.buttonSelected2 === true && this.state.buttonAnswer2 === true){
        this.setState({
          error: false,
          score:this.state.score+1,
        })
      }else if(this.state.buttonSelected3 === true && this.state.buttonAnswer3 === true){
        this.setState({
          error: false,
          score:this.state.score+1,
        })
      }else{
      this.setState({
        error: true,
      })
    }
    }
  };

  buttonSelected = (selectedButton) => {
    if(this.state.pressed1 === false){
      if(selectedButton===1){
        this.setState({
          pressed1: true,
          pressed2: false,
          pressed3: false,
          buttonSelected1: true,
          buttonSelected2: false,
          buttonSelected3: false,
        })
      }
    }else{
      if(selectedButton===1){
        this.setState({
          pressed1: false,
          buttonSelected1: false,
        })
      }
    }
    if(this.state.pressed2 === false){
      if(selectedButton===2){
        this.setState({
          pressed1: false,
          pressed2: true,
          pressed3: false,
          buttonSelected1: false,
          buttonSelected2: true,
          buttonSelected3: false,
        })
      }
    }else{
      if(selectedButton===2){
        this.setState({
          pressed2: false,
          buttonSelected2: false,
        })
      }
    }
    if(this.state.pressed3 === false){
      if(selectedButton===3){
        this.setState({
          pressed1: false,
          pressed2: false,
          pressed3: true,
          buttonSelected1: false,
          buttonSelected2: false,
          buttonSelected3: true,
        })
      }
    }else{
      if(selectedButton===3){
        this.setState({
          pressed3: false,
          buttonSelected3: false,
        })
      }
    }
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
          style={{
            ...this.props.style,
            opacity: fadeAnim,
          }}
        >
        {this.state.buttonConfirm === false ? (
          <View style={styles.mainCard}>
            <Text style = {styles.cardTitle}>{this.state.cardTitle}</Text>
            <ScrollView style={styles.contentCard} showsVerticalScrollIndicator={false}>
            { this.state.counterButtons < 5 ? (
              <View style={{justifyContent:'space-between'}}>
                <TouchableOpacity
                  style={(this.state.pressed1 === true && this.state.buttonSelected1 === true)?styles.selectedButton:styles.anyButton}
                  onPress={() => this.buttonSelected(1)}>
                  <Text style={styles.buttonText}>{this.state.buttonNumber1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={(this.state.pressed2 === true && this.state.buttonSelected2 === true)?styles.selectedButton:styles.anyButton}
                  onPress={() => this.buttonSelected(2)}>
                  <Text style={styles.buttonText}>{this.state.buttonNumber2}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={(this.state.pressed3 === true && this.state.buttonSelected3 === true)?styles.selectedButton:styles.anyButton}
                  onPress={() => this.buttonSelected(3)}>
                  <Text style={styles.buttonText}>{this.state.buttonNumber3}</Text>
                </TouchableOpacity>
                <View>
                  <TouchableOpacity style={styles.anyButton} onPress={this.buttonConfirmPressed}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.score}>
                  <Text style={styles.scoreText}>{this.state.score}/4</Text>
                </View>
              </View>
            )
            :
            null}
            </ScrollView>
          </View>)
          :
          (
          <View style={styles.mainCard}>
            <View>
              {this.state.error === false ?(
                <View>
                  <Text style={styles.cardTitle}>Você Acertou</Text>
                  <Image source={nyanCat} style={styles.imageShape}/>
                  <TouchableOpacity style={styles.anyButton} onPress={this.buttonNextPress}>
                    <Text style={styles.buttonText}>Próximo</Text>
                  </TouchableOpacity>
                </View>):
              <View>
                <Text style={styles.cardTitle}>Você Errou</Text>
                <Image source={sealJudging} style={styles.imageShape}/>
                <View>
                  <Text style={styles.cardTitle}>A resposta correta é:</Text>
                </View>
                <TouchableOpacity style={styles.anyButton} onPress={this.buttonNextPress}>
                  <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>
              </View>
              }
            </View>
          </View>
          )
          }
      </Animated.View>
    );
  }
}
