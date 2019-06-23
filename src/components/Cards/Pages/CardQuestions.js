import React, {Component} from 'react';
import { Text, View, Animated, Image, ScrollView, TouchableOpacity} from 'react-native';

import styles from '../styles/styles.js';

const nyanCat = require('../../../images/nyanCat.gif')
const sealJudging = require('../../../images/sealJudging.gif')

var buttonsChoices = {0:"", 1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:"", 10:"", 11:""};

var buttonsChoicesOne = {0:"10", 1:"5", 2:"2.5", 3:"0N, 20N e 5N", 4:"4.0625N, 0N e 20.9375N", 5:"20.9375N, 4.0625Nm e 0N", 6:"0.9375", 7:"0", 8:"2", 9:"O cortante deixaria de ser linear e seria uma cúbica e o momento seria uma parábola", 10:"O momento mudaria para uma cúbica e o cortante para uma parábola", 11:"Não haveriam mudanças nos gráficos"};
var buttonsChoicesTwo = {0:"A", 1:"B", 2:"C", 3:"D", 4:"E", 5:"F", 6:"G", 7:"H", 8:"I", 9:"J", 10:"K", 11:"L"};

var questionOne = {0:"No diagrama de corpo livre, qual seria o módulo da força concentrada da carga distribuída?",
                   1:"Quais os valores das reações dos apoios A e B?",
                   2:"Qual o valor do esforço cortante para o trecho à direita do apoio B?",
                   3:"Caso a carga distribuída mudasse de retangular para uma triangular, como ficariam os diagramas para o trecho dessa nova carga?"};

var questionTwo = {0:"Qual será o resultado da componente vertical do primeiro apoio?",
                   1:"Qual será o resultado da componente vertical do segundo apoio?",
                   2:"Como ficará o gráfico do esforço cortante?",
                   3:"Como ficará o gráfico do momento fletor?"};

var questionText = {0:"", 1:"", 2:"", 3:""};

export default class CardQuestions extends Component{
  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      error: false,
      buttonAnswer: {1: false,2: false, 3: false},
      buttonNext: false,
      buttonConfirm:false,
      buttonPosition: {1: "", 2: "", 3: ""},
      cardTitle:"",
      counter: 1,
      score: 0,
      showDiagrams: false,
      buttonSelected: {1: false, 2: false, 3: false},
      pressed: {1: false, 2: false, 3: false},
      question: "",
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
    if(this.props.counterBin === 0){
      this.setState({
        questions:questionOne[0],
      })
      for (var i = 1; i < 4; i++) {
        questionText[i] = questionOne[i];
      }
      for (var i = 0; i < 12; i++) {
        buttonsChoices[i]=buttonsChoicesOne[i]
      }
    } else {
      this.setState({
        questions:questionTwo[0],
      })
      for (var i = 1; i < 4; i++) {
        questionText[i] = questionTwo[i];
      }
      for (var i = 0; i < 12; i++) {
        buttonsChoices[i]=buttonsChoicesTwo[i]
      }
    }

    let num = Math.random()*3;
    num = Math.floor(num);
    switch (num) {
      case 0:
        this.setState({
          buttonAnswer: {1: true, 2: this.state.buttonAnswer[2], 3: this.state.buttonAnswer[3]},
          buttonPosition:{1: buttonsChoices[num+1], 2: buttonsChoices[num], 3:buttonsChoices[num+2]}
        })
        break;
      case 1:
        this.setState({
          buttonAnswer: {1: this.state.buttonAnswer[1], 2: true, 3: this.state.buttonAnswer[3]},
          buttonPosition:{1: buttonsChoices[num+1], 2: buttonsChoices[num], 3:buttonsChoices[num-1]}
        })
        break;
      case 2:
        this.setState({
          buttonAnswer: {1: this.state.buttonAnswer[1], 2: this.state.buttonAnswer[2], 3: true},
          buttonPosition:{1: buttonsChoices[num-2], 2: buttonsChoices[num], 3:buttonsChoices[num-1]}
          })
        break;
    };
  }

  randomQuestion = () =>{
    let num = Math.random()*3;
    num = Math.floor(num);
    switch (num) {
      case 0:
        this.setState({
          buttonAnswer: {1: true, 2: false, 3: false},
          buttonPosition:{1: buttonsChoices[num+((this.state.counter)*3)+1],
                          2: buttonsChoices[num+((this.state.counter)*3)],
                          3: buttonsChoices[num+((this.state.counter)*3)+2]}
          })
      break;
      case 1:
        this.setState({
          buttonAnswer: {1: false, 2: true, 3: false},
          buttonPosition:{1: buttonsChoices[num+((this.state.counter)*3)+1],
                          2: buttonsChoices[num+((this.state.counter)*3)],
                          3: buttonsChoices[num+((this.state.counter)*3)-1]}
        })
      break;
      case 2:
        this.setState({
          buttonAnswer: {1: false, 2: false, 3: true},
          buttonPosition:{1: buttonsChoices[num+((this.state.counter)*3)-2],
                          2: buttonsChoices[num+((this.state.counter)*3)],
                          3: buttonsChoices[num+((this.state.counter)*3)-1]}
        })
      break;
      };
  }

  buttonNextPress = () => {
    this.setState({
      buttonNext: true,
      buttonConfirm: false,
      buttonAnswer: {1: false, 2: false, 3: false},
      buttonSelected: {1: false, 2: false, 3: false},
      pressed: {1: false, 2: false, 3: false},
      counter:this.state.counter+1,
      questions:questionText[this.state.counter],
    })

    this.randomQuestion();

    if(this.state.counter === 4){
      this.props.answeredAll = true;
    }
  };

  buttonConfirmPressed = () => {
    if(this.state.pressed[1] === false && this.state.pressed[2] === false && this.state.pressed[3] === false){
      null;
    }
    else {
      this.setState({
        buttonNext: true,
        buttonConfirm: true,
        buttonAnswer: {1: false, 2: false, 3: false},
        buttonSelected: {1: false, 2: false, 3: false},
        pressed: {1: false, 2: false, 3: false},
      });

      this.randomQuestion();

      if(this.state.buttonSelected[1] === true && this.state.buttonAnswer[1] === true){
        this.setState({
          error: false,
          score:this.state.score+1,
        })
      }
      else if(this.state.buttonSelected[2] === true && this.state.buttonAnswer[2] === true){
        this.setState({
          error: false,
          score:this.state.score+1,
        })
      }
      else if(this.state.buttonSelected[3] === true && this.state.buttonAnswer[3] === true){
        this.setState({
          error: false,
          score:this.state.score+1,
        })
      }
      else {
        this.setState({
          error: true,
        })
      }
    }
  };

  buttonSelected = (selectedButton) => {
    if(this.state.pressed[1] === false){
      if(selectedButton===1){
        this.setState({
          pressed: {1: true, 2: false, 3: false},
          buttonSelected: {1: true, 2: false, 3: false},
        })
      }
    }else{
      if(selectedButton===1){
        this.setState({
          pressed: {1: false, 2: this.state.pressed[2], 3: this.state.pressed[3]},
          buttonSelected: {1: false, 2: this.state.buttonSelected[2], 3: this.state.buttonSelected[3]}
        })
      }
    }
    if(this.state.pressed[2] === false){
      if(selectedButton===2){
        this.setState({
          pressed: {1: false, 2: true, 3: false},
          buttonSelected: {1: false, 2: true, 3: false}
        })
      }
    }else{
      if(selectedButton===2){
        this.setState({
          pressed: {1: this.state.pressed[1], 2: false, 3: this.state.pressed[3]},
          buttonSelected: {1: this.state.buttonSelected[1], 2: false, 3: this.state.buttonSelected[3]}
        })
      }
    }
    if(this.state.pressed[3] === false){
      if(selectedButton===3){
        this.setState({
          pressed: {1: false, 2: false, 3: true},
          buttonSelected: {1: false, 2: false, 3: true}
        })
      }
    }else{
      if(selectedButton===3){
        this.setState({
          pressed: {1: this.state.pressed[1], 2: this.state.pressed[2], 3: false},
          buttonSelected: {1: this.state.buttonSelected[1], 2: this.state.buttonSelected[2], 3: false}
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
        {this.state.buttonConfirm === false ?
          <View style={styles.mainCard}>
            <ScrollView style={styles.contentCard} showsVerticalScrollIndicator={false}>
            { this.state.counter < 5 ?
              <View>
                <Text style = {styles.cardTitle}>Questão {this.state.counter}</Text>
                <View style={{justifyContent:'space-between'}}>
                  <Text style={styles.plainText}>{this.state.questions}</Text>
                  <TouchableOpacity
                    style={(this.state.pressed[1] === true && this.state.buttonSelected[1] === true)?styles.selectedButton:styles.anyButton}
                    onPress={() => this.buttonSelected(1)}>
                    <Text style={styles.buttonText}>{this.state.buttonPosition[1]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={(this.state.pressed[2] === true && this.state.buttonSelected[2] === true)?styles.selectedButton:styles.anyButton}
                    onPress={() => this.buttonSelected(2)}>
                    <Text style={styles.buttonText}>{this.state.buttonPosition[2]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={(this.state.pressed[3] === true && this.state.buttonSelected[3] === true)?styles.selectedButton:styles.anyButton}
                    onPress={() => this.buttonSelected(3)}>
                    <Text style={styles.buttonText}>{this.state.buttonPosition[3]}</Text>
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity style={styles.anyButton} onPress={this.buttonConfirmPressed}>
                      <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            :
              <View>
                {this.props.finished()}
                <Text style={styles.cardTitle}>Pontuação Total</Text>
                  <View style={styles.score}>
                    <Text style={styles.scoreText}>{this.state.score}/4</Text>
                  </View>
              </View>}
            </ScrollView>
            </View>
          :
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
          }
      </Animated.View>
    );
  }
}
