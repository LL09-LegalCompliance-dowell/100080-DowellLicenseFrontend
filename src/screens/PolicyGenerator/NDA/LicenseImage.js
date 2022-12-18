import React from 'react'
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../../components/Header';
const images = [ {
  props: {
  source: require('../../../../assets/images/NDA/image11.png')
  }
},{
  props: {
  source: require('../../../../assets/images/NDA/image12.png')
  }
},{
  props: {
  source: require('../../../../assets/images/NDA/image13.png')
  }
},{
  props: {
  source: require('../../../../assets/images/NDA/image14.png')
  }
},{ props: {
  source: require('../../../../assets/images/NDA/image15.png')
}
},{ props: {
  source: require('../../../../assets/images/NDA/image16.png')
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