import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const Header = ({title}) => {
  const { textSize, viewStyle } = styles;
  return (
  <View style={viewStyle}>
    <Text style={textSize}>{title}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  textSize: {
    fontSize : 20
  },
  viewStyle: {
    backgroundColor : '#F8F8F8',
    paddingTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#555',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.3,
    elevation: 3,
  }
});

export { Header };

