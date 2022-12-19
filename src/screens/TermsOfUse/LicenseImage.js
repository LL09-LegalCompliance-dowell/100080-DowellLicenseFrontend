import React from 'react'
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../components/Header';
const images = [ {
  props: {
      source: require('../../../assets/images/WebsiteTermsOfUse/image50.png')
  }
},{
  props: {
    source: require('../../../assets/images/WebsiteTermsOfUse/image51.png')
  }
},{
  props: {
    source: require('../../../assets/images/WebsiteTermsOfUse/image52.png')
  }
},{
  props: {
    source: require('../../../assets/images/WebsiteTermsOfUse/image53.png')
  }
},{ props: {
  source: require('../../../assets/images/WebsiteTermsOfUse/image54.png')
}
},{ props: {
  source: require('../../../assets/images/WebsiteTermsOfUse/image55.png')
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