import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icone from './componentes/Icone';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Indicador from './componentes/Indicador';
import Indicador2 from './componentes/Indicador2';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: 'Resultado', counter: 0, counter2: 0};
    this.atualiza = this.atualiza.bind(this);
  }

  jokenpo(escolhaUsuario) {
    //gera número aleatório ( 0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';
    
    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';
    let counter = this.state.counter;
    let counter2 = this.state.counter2;

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Você ganhou';
        counter++;
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você perdeu';
        counter2++;
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou';
        counter++;
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Você perdeu';
        counter2++;
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou';
        counter++;
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Você perdeu';
        counter2++;
      }

    }            
    this.setState({ escolhaUsuario, escolhaComputador, resultado, counter, counter2 }); 

    if (counter === 5) {
      return(
        alert('VOCÊ GANHOU O JOGO!'),
        setTimeout(() => {
          this.atualiza() 
        }, 2500) 
      )  
    }
    if (counter2 === 5) {
      return(
        alert('VOCÊ PERDEU!'),
        setTimeout(() => {
          this.atualiza() 
        }, 2500) 
      )  
    }
  }
  atualiza() {
    this.setState({
      counter: 0,
      counter2: 0,
      escolhaComputador: '',
      escolhaUsuario: '',
      resultado: 'Resultado',
    });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'space-between'}}>  

        <Header/>
        <TouchableOpacity onPress={() => { this.atualiza(); }} style={{position: "absolute", paddingLeft: 300, paddingTop:38}}>
          <Icon name="refresh" size={19} color="white" />
        </TouchableOpacity>
        <View style={{width: '85%',height: 120, alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#00BFFF',
        borderWidth: 1, borderColor: 'black', paddingTop: 5}}>
          <View style={styles.palco}>
            <Text style={{fontSize: 22}}>Pontuação:</Text>
          </View>
          <View style={{
            width: '90%',
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={styles.palco}>
              <Text style={{fontSize: 16, fontFamily: 'monospace', color: '#4F4F4F'}}>Jogador</Text>
            </View>
            <View style={styles.palco}>
              <Text style={{fontSize: 16, fontFamily: 'monospace', color: '#4F4F4F'}}>Computador</Text>
            </View>
          </View>
          <View style={{
            width: '65%',
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <View style={styles.palco}>
              <Text style={{fontSize: 26}}>{this.state.counter}</Text>
            </View>
            <View style={styles.palco}>
              <Text style={{fontSize: 26}}>{this.state.counter2}</Text>
            </View>
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={{color: 'red', fontSize: 16}}>{this.state.resultado}</Text>
        </View>

        <View style={{
          width: '80%',
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center'
          
        }}>
          <View style={styles.btnEscolha}>
            <Icone  choose={this.state.escolhaUsuario} style={styles.txtResultado}/>
          </View>
          <Indicador ganhador={this.state.resultado}/>
          <Text>X</Text>
          <Indicador2 ganhador={this.state.resultado}/>
          <View style={styles.btnEscolha}>
            <Icone choose={this.state.escolhaComputador} style={styles.txtResultado}/>
          </View>
        </View>
        <View>
          <Text style={{paddingTop: 50, fontSize: 16}}>Escolha sua Jogada:</Text>
        </View>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <TouchableOpacity onPress={() => { this.jokenpo('pedra'); }} >
              <View>
                <Image source={ require('./pedra.png')} style={{width:70, height:70}}></Image>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.btnEscolha}>
            <TouchableOpacity onPress={() => { this.jokenpo('papel'); }} >
              <View>
                <Image source={ require('./papel.png')} style={{width:70, height:70}}></Image>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.btnEscolha}>
            <TouchableOpacity onPress={() => { this.jokenpo('tesoura'); }} >
              <View>
                <Image source={ require('./tesoura.png')} style={{width:70, height:70}}></Image>
              </View>
            </TouchableOpacity>
         </View>
        </View>

        <Footer/>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 80,
    height: 80,
    marginHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00BFFF',
    borderWidth: 1,
  },
  painelAcoes: {
    width:'85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  palco: {
    alignItems: 'center',
    marginTop: 5,
  },
  txtResultado: {
    color: '#4F4F4F',
    fontSize: 16,
    height: 60,
    paddingTop: 5,

  },
});
