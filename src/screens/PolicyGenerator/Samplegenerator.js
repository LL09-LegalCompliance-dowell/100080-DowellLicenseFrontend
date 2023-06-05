import React from 'react';
import {Dimensions, View} from 'react-native';
import Header from '../../components/Header';
import Pdf from 'react-native-pdf';

const Samplegenerator = ({sourcelink}) => {
  const source = {
    uri: sourcelink,
    cache: true,
  };
  return (
    <>
      <Header title="Policy Template" />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Pdf
          trustAllCerts={false}
          source={source}
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      </View>
    </>
  );
};

export default Samplegenerator;
