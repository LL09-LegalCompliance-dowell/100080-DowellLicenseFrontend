import React from 'react'
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../../components/Header';
const images = [ {
  props: {
  source: require('../../../../assets/images/ReturnsAndRefund/image56.png')
  }
},{
  props: {
  source: require('../../../../assets/images/ReturnsAndRefund/image57.png')
  }
}]
const PolicyImage = () => {
  return (
  <>
    
    <Modal visible={true} transparent={true}>
        
        <ImageViewer imageUrls={images}renderHeader={()=><Header title="Policy Template"/>}/> 
    </Modal>
  </>
)
}

export default PolicyImage