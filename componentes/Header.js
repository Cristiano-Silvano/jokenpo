import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{flex:3, alignItems:'center'}}>
          <Text style={{fontSize:26,}}>JO_KEN_PO</Text>
        </View>   
      </View>
    );
  }
}
const styles = StyleSheet.create({
header: {
    flexDirection:'row',
    width: '100%',
    height: 70,
    backgroundColor: '#20B2AA',
    paddingTop: 25,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});