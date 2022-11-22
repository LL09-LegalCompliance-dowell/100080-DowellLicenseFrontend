import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import ProgressSteps from './ProgressSteps';

const PolicyIndex = () => {
  return (
    <>
      <ProgressSteps />
      <View style={{display: 'flex', backgroundColor: 'white'}}></View>
    </>
  );
};

export default PolicyIndex;

const styles = StyleSheet.create({});
