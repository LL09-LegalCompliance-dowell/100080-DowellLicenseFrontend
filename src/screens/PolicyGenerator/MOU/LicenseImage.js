import React from 'react';
import {Dimensions, View} from 'react-native';
// import Header from '../../../components/Header';
import Pdf from 'react-native-pdf';


const PolicyImage = () => {
  const source = {
    uri: 'https://100080.pythonanywhere.com/media/doc/memorandum-of-understanding.pdf',
    cache: true,
  };
  return (
    <>
    {/* <Header title="Policy Template" /> */}
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
          // onLoadComplete={(numberOfPages, filePath) => {
          //   console.log(`Number of pages: ${numberOfPages}`);
          // }}
          // onPageChanged={(page, numberOfPages) => {
          //   console.log(`Current page: ${page}`);
          // }}
          // onError={error => {
          //   console.log(error);
          // }}
          // onPressLink={uri => {
          //   console.log(`Link pressed: ${uri}`);
          // }}
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

export default PolicyImage;
