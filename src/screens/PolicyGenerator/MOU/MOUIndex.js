import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import ProgressSteps from './ProgressSteps';

const MOUIndex = () => {
  return (
    <>
      <ProgressSteps />
      <View style={{display: 'flex', backgroundColor: 'white'}}></View>
    </>
  );
};

export default MOUIndex;

const styles = StyleSheet.create({});
