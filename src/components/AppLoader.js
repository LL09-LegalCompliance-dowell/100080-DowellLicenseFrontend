import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Lottie source={require('../../assets/loading.json')} autoPlay loop />
    </View>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ImageBackground: 'rgba(0,0,0, 0.3)',
    zIndex: 10,
  },
});
