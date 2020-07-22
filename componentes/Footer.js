import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
    <View style={styles.footer}>
      <Text style={{fontSize:15, color: 'red'}}>REGRAS DO JOGO:</Text>
      <Text style={{fontSize:15}}>O jogador que fizer os 5 primeiros pontos vence!</Text>
    </View>
    );
  }
}
const styles = StyleSheet.create({
footer: {
  width: '100%',
  height: 70,
  backgroundColor: '#20B2AA',
  paddingTop: 10,
  alignItems: 'center',
  borderTopColor: 'black',
  borderTopWidth: 1,
  }
});

