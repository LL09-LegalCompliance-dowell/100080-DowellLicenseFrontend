// import React,{useRef,useState,createRef} from 'react'
// import { ScrollView,Image,Animated,View, Text, Dimensions  } from 'react-native'
// import { PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';
// import Header from '../../components/Header';
// import styles from './style';

// const PolicyImage = () => {
//   const [panEnabled, setPanEnabled] = useState(false);
//   const scale=useRef(new Animated.Value(1)).current
//   const translateX=useRef(new Animated.Value(0)).current
//   const translateY=useRef(new Animated.Value(0)).current
//   const pinchRef = createRef();
//   const panRef = createRef();
//   const onPinchEvent = Animated.event([{
//     nativeEvent: { scale }
//   }],
//     { useNativeDriver: true });

//   const onPanEvent = Animated.event([{
//     nativeEvent: {
//       translationX: translateX,
//       translationY: translateY
//     }
//   }],
//     { useNativeDriver: true });
//   const handlePinchStateChange = ({ nativeEvent }) => {
//       // enabled pan only after pinch-zoom
//       if (nativeEvent.state === State.ACTIVE) {
//         setPanEnabled(true);
//   }
//   const nScale = nativeEvent.scale;
//   if (nativeEvent.state === State.END) {
//     if (nScale < 1) {
//       Animated.spring(scale, {
//         toValue: 1,
//         useNativeDriver: true
//       }).start();
//       Animated.spring(translateX, {
//         toValue: 0,
//         useNativeDriver: true
//       }).start();
//       Animated.spring(translateY, {
//         toValue: 0,
//         useNativeDriver: true
//       }).start();

//       setPanEnabled(false);
//     }
//   }
// };
    
//   // 
//   return (
//     <View>
//       <PanGestureHandler
//         onGestureEvent={onPanEvent}
//         ref={panRef}
//         simultaneousHandlers={[pinchRef]}
//         enabled={panEnabled}
//         failOffsetX={[-1000, 1000]}
//         shouldCancelWhenOutside
//       >
//         <Animated.View>
//           <PinchGestureHandler
//             ref={pinchRef}
//             onGestureEvent={onPinchEvent}
//             simultaneousHandlers={[panRef]}
//             onHandlerStateChange={handlePinchStateChange}
//           >
//             <Animated.Image
//               source={require('../../../assets/images/cookiesPolices/image35.png')}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 transform: [{ scale }, { translateX }, { translateY }]
//               }}
//               resizeMode="contain"
//             />

//           </PinchGestureHandler>
//         </Animated.View>

//       </PanGestureHandler>
//     </View>
//   );
// }

// export default PolicyImage

import React from 'react'
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Header from '../../../components/Header';
const images = [ {
  props: {
      source: require('../../../../assets/images/cookiesPolices/image35.png')
  }
},{
  props: {
      source: require('../../../../assets/images/cookiesPolices/image36.png')
  }
},{
  props: {
      source: require('../../../../assets/images/cookiesPolices/image37.png')
  }
},{
  props: {
      source: require('../../../../assets/images/cookiesPolices/image38.png')
  }
},{
  props: {
      source: require('../../../../assets/images/cookiesPolices/image39.png')
  }
},{
  props: {
      source: require('../../../../assets/images/cookiesPolices/image40.png')
  }
},{
  props: {
      source: require('../../../../assets/images/cookiesPolices/image41.png')
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