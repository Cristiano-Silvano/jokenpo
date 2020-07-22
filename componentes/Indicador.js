import React, { Component } from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Indicador extends Component {
  render() {
    if (this.props.ganhador === 'Você ganhou') {
      return(
        <View>  
          <Icon 
            name="trophy" 
            size={15} 
            color="red" 
            style={{ marginRight:30, marginLeft:-50, borderRadius:10}} 
          />  
        </View>
      );
    }
    return false;
  }
}
