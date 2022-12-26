import React from 'react';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../../components/Header';
const images = [
  {
    props: {
      source: require('./images/1.png'),
    },
  },
  {
    props: {
      source: require('./images/2.png'),
    },
  },
];
const PolicyImage = () => {
  return (
    <>
      <Modal visible={true} transparent={true}>
        <ImageViewer
          imageUrls={images}
          renderHeader={() => <Header title="Policy Template" />}
        />
      </Modal>
    </>
  );
};

export default PolicyImage;
