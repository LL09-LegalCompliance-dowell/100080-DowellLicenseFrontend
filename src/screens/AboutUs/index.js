import {View, Text, FlatList, TouchableHighlight} from 'react-native';
import React from 'react';

import styles from './style';
import Header from '../../components/Header';
import colors from '../../../assets/colors/colors';


const About = () => {
  return (
    <View>
      <FlatList
        data={data}
        ketExtractor={item => item.id}
        renderItem={({item, index, separators}) => (
          <TouchableHighlight
            key={item.key}
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white'}}>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default About;


