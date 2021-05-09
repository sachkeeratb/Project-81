import React from 'react';
import { View } from 'react-native';

export default class BarterAnimation extends React.Component {
  render() {
    return (
      <View
      source={require('../assets/animations/barter-animation.json')}
      style={{width:"90%",marginBottom:5}}
      ></View>
    )
  }
}
