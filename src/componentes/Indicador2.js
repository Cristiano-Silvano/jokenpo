import React, { Component } from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Indicador extends Component {
  render() {
    if (this.props.ganhador === 'Você perdeu') {
      return(
        <View>        
          <Icon 
            name="trophy"
            size={15} 
            color="red" 
            style={{ marginRight:-50, marginLeft:30, borderRadius:10}} 
          />    
        </View>
      );
    }
    return false;
  }
}
