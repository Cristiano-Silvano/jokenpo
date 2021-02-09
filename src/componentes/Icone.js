import React, { Component } from 'react';
import {Image, Text} from 'react-native';

const pedra = require('../images/pedra.png');
const papel = require('../images/papel.png');
const tesoura = require('../images/tesoura.png');



export default class Icone extends Component {
  render() {
    if (this.props.choose == 'pedra') {
        return(
            <Image source={pedra} style={{width:70, height:70}}/>
        );
    }if (this.props.choose == 'papel') {
        return(
            <Image source={papel} style={{width:70, height:70}}/>
        );     
    }if (this.props.choose == 'tesoura') {
        return(
            <Image source={tesoura} style={{width:70, height:70}}/>
        );    
    }

    return (
        <Text style={{fontSize:17}}>?</Text>
    );
  }
}
