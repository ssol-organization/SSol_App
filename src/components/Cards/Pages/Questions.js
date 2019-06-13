// import React, {Component} from 'react';
// import { Text, View, Animated, ScrollView,Image } from 'react-native';
//
// import styles from '../styles/styles.js';
//
// const nyanCat = require('../../../images/nyanCat.gif')
// const sealJudging = require('../../../images/sealJudging.gif')
// var buttonsText = {0:"A", 1:"B", 2:"C", 3:"D", 4:"E", 5:"F", 6:"G", 7:"H", 8:"I", 9:"J", 10:"K", 11:"L"};
//
// export default class CardGraph extends Component{
//   constructor(){
//     super();
//     this.state = {
//       fadeAnim: new Animated.Value(0),
//       error: false,
//       pressed: false,
//       buttonAnswer1: false,
//       buttonAnswer2: false,
//       buttonAnswer3: false,
//       buttonNext: false,
//       buttonNumber1:"",
//       buttonNumber2:"",
//       buttonNumber3:"",
//       cardTitle:"Questão ",
//       counterButtons:1,
//       counterAnswers:0,
//       score:0,
//       showDiagrams: false
//     }
//   }
//
//   componentDidMount() {
//     Animated.timing(
//       this.state.fadeAnim,{
//         toValue: 1,
//         duration: 250,
//       }
//     ).start();
//   };
//
//   componentWillMount() {
//     let num = Math.random()*3;
//     num = Math.floor(num);
//     switch (num) {
//       case 0:
//         this.setState({buttonAnswer1: true
//           , buttonNumber1:buttonsText[num+1]
//           , buttonNumber2:buttonsText[num]
//           , buttonNumber3:buttonsText[num+2]})
//         break;
//       case 1:
//         this.setState({buttonAnswer2: true
//           , buttonNumber1:buttonsText[num+1]
//           , buttonNumber2:buttonsText[num]
//           , buttonNumber3:buttonsText[num+2]})
//         break;
//       case 2:
//         this.setState({buttonAnswer3: true
//           , buttonNumber1:buttonsText[num+1]
//           , buttonNumber2:buttonsText[num]
//           , buttonNumber3:buttonsText[num+2]})
//         break;
//     };
//   }
//
//   buttonPress = (buttonPosition) => {
//     if(this.state.pressed === false){
//       if(this.state.buttonAnswer1 === true && buttonPosition === 1){
//         this.setState({
//           pressed: true,
//           error: false,
//           score:this.state.score + 1,
//         });
//       }
//       else if(this.state.buttonAnswer2 === true && buttonPosition === 2){
//         this.setState({
//           pressed: true,
//           error: false,
//           score:this.state.score + 1,
//         });
//       }
//       else if(this.state.buttonAnswer3 === true && buttonPosition === 3){
//         this.setState({
//           pressed: true,
//           error: false,
//           score:this.state.score + 1,
//         });
//       }
//       else {
//         this.setState({
//           pressed: true,
//           error: true,
//         });
//       }
//     }
//   };
//
//   buttonNextPress = () => {
//     this.setState({
//       buttonNext: true,
//       buttonAnswer1: false,
//       buttonAnswer2: false,
//       buttonAnswer3: false,
//       pressed: false,
//       counterButtons:this.state.counterButtons+1
//     })
//
//     if(this.state.counterAnswers === 4){
//       this.setState({
//         showDiagrams: true
//       });
//     };
//
//     let num = Math.random()*3;
//     num = Math.floor(num);
//     switch (num) {
//       case 0:
//         this.setState({buttonAnswer1: true
//                       ,buttonNumber1:buttonsText[num+((this.state.counterButtons)*3)+1]
//                       ,buttonNumber2:buttonsText[num+((this.state.counterButtons)*3)]
//                       ,buttonNumber3:buttonsText[num+((this.state.counterButtons)*3)+2]})
//         break;
//       case 1:
//         this.setState({buttonAnswer2: true
//                       ,buttonNumber1:buttonsText[num+((this.state.counterButtons)*3)+1]
//                       ,buttonNumber2:buttonsText[num+((this.state.counterButtons)*3)]
//                       ,buttonNumber3:buttonsText[num+((this.state.counterButtons)*3)-1]})
//         break;
//       case 2:
//         this.setState({buttonAnswer3: true
//                       ,buttonNumber1:buttonsText[num+((this.state.counterButtons)*3)-2]
//                       ,buttonNumber2:buttonsText[num+((this.state.counterButtons)*3)]
//                       ,buttonNumber3:buttonsText[num+((this.state.counterButtons)*3)-1]})
//         break;
//     };
// };
//
//   render() {
//     let { fadeAnim } = this.state;
//
//     return (
//       <Animated.View
//           style={{
//             ...this.props.style,
//             opacity: fadeAnim,
//           }}
//         >
//         <View style={styles.mainCard}>
//           { this.state.counterButtons < 5 ?
//             <Text style = {styles.cardTitle}>{this.state.cardTitle+this.state.counterButtons}</Text> :
//             <Text style = {styles.cardTitle}>Diagramas</Text>
//           }
//           <ScrollView style={styles.contentCard}>
//           { this.state.counterButtons < 5 ? (
//             <View style={{justifyContent:'space-between'}}>
//               <TouchableOpacity
//                 style={(this.state.pressed === true && this.state.buttonAnswer1 === true)?styles.correctButton:
//                   ((this.state.pressed === true && this.state.buttonAnswer1 === false)?styles.wrongButton:
//                   styles.anyButton)}
//                 onPress={() => this.buttonPress(1)}>
//                 <Text style={styles.cardTitle}>{this.state.buttonNumber1}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={(this.state.pressed === true && this.state.buttonAnswer2 === true)?styles.correctButton:
//                   ((this.state.pressed === true && this.state.buttonAnswer2 === false)?styles.wrongButton:
//                   styles.anyButton)}
//                 onPress={() => this.buttonPress(2)}>
//                 <Text style={styles.cardTitle}>{this.state.buttonNumber2}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={(this.state.pressed === true && this.state.buttonAnswer3 === true)?styles.correctButton:
//                   ((this.state.pressed === true && this.state.buttonAnswer3 === false)?styles.wrongButton:
//                   styles.anyButton)}
//                 onPress={() => this.buttonPress(3)}>
//                 <Text style={styles.cardTitle}>{this.state.buttonNumber3}</Text>
//               </TouchableOpacity>
//               <View>
//                 {this.state.pressed === false ? null:
//                   (this.state.error === false ?
//                     (<View>
//                       <Image source={nyanCat} style={styles.imageShape}/>
//                       <TouchableOpacity style={(this.state.buttonNext === false)?styles.cardText:styles.botao} onPress={this.buttonNextPress}>
//                           <Text style={styles.cardTitle}>Next</Text>
//                       </TouchableOpacity>
//                     </View>
//                     ):
//                     <View>
//                       <Image source={sealJudging} style={styles.imageShape}/>
//                       <TouchableOpacity style={(this.state.buttonNext === false)?styles.cardText:styles.botao} onPress={this.buttonNextPress}>
//                         <Text style={styles.cardTitle}>Next</Text>
//                       </TouchableOpacity>
//                     </View>
//                 )
//                 }
//               </View>
//             </View>
//           ):null}
//             <View style={styles.score}>
//               <Text style={styles.scoreText}>{this.state.score}/4</Text>
//             </View>
//           </ScrollView>
//         </View>
//       </Animated.View>
//     );
//   }
// }
