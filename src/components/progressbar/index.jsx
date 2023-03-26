import React from 'react';
import { View,Text } from 'react-native';
import style from './style';

// import { Container } from './styles';

const progressbar = ({valor}) => {
  return <View style={style.container}>
    <Text style={style.value}>
      {valor.toFixed(0)}%
    </Text>
    <View style={style.tracker}>
      <View style={[style.progress,{width:`${valor}%`}]}/>
    </View>
  </View>;
}

export default progressbar;