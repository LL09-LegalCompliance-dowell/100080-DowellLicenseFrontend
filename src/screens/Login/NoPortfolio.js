import {Text, View, StatusBar,Image, Linking, Alert, Button, Share } from 'react-native'
import React, {useCallback, useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';

const NoPortfolio = ({navigation, route}) => {
  const [link, setLink] = useState('');
  const params= route.params;
  const {session_id, username} = route.params;
  const url = `https://100093.pythonanywhere.com/new/?session_id=${session_id}`
  //console.log(params)
  const goToBrowser = () => {
    try{
     Linking.openURL(url);
    }catch(error){
      Alert.alert(`Unable to open this URL: ${url}`);
    }
  }

  const copyToClipboard = () => {
    Clipboard.setString(url);
    setLink(url);
  }
  const goToCreatePortfolio = () => {
    navigation.navigate("CreatePortfolio", {"session_id":session_id})
  }
  return (
    <View contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.introLogoTop}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.topLogo}
          />
        </View>

      <Text style={styles.noPortfolioText}>Hello {username}.</Text>
      <Text style={styles.noPortfolioText}>You do not have a portfolio </Text>
      <TouchableOpacity style={styles.createPortfolio} onPress={goToCreatePortfolio}>
        <Text style={styles.createPortfolioText}>Create One</Text>
      </TouchableOpacity>
      <Text style={[styles.noPortfolioText, {marginVertical:0, paddingBottom:0}]}>OR</Text>
      <TouchableOpacity style={styles.createPortfolio} onPress={goToBrowser}>
          <Text style={styles.createPortfolioText}>Go to Browser</Text>
      </TouchableOpacity>
  
      <View style={{marginHorizontal:20}}>
        <Text style={[styles.noPortfolioText, {marginLeft:10, marginTop:30, fontSize:22, fontWeight:"bold"}]}>          
          Copy and Paste Link in Your Browser
        </Text>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderColor: '585858',
            borderWidth: 0.9,
            borderRadius: 17,
            marginBottom: 30,
            marginTop: 10,
            alignItems: 'center',
          }}>
            
          <Text numberOfLines={1} style={{marginHorizontal: 10, flex:9}}>
            {url}
          </Text>
          <TouchableOpacity
            style={{
              flex:1.5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 15,
            }}
            onPress={copyToClipboard}>
            {link === '' ? (
              <Fontisto name="copy" size={20} color="black" />
            ) : (
              <Text style={{color:"#FF5733", fontFamily:'roboto'}}>Copied</Text>
            )}
          </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default NoPortfolio

//const styles = StyleSheet.create({})


// const onShare = async () => {
//   try {
//     const result = await Share.share({
//       message:url,
//     });
//     if (result.action === Share.sharedAction) {
//       if (result.activityType) {
//         // shared with activity type of result.activityType
//       } else {
//         // shared
//       }
//     } else if (result.action === Share.dismissedAction) {
//       // dismissed
//     }
//   } catch (error) {
//     Alert.alert(error.message);
//   }
// };
// <View style={{marginTop: 40, height:100}}>
// <Button onPress={onShare} title="Copy/Share Link" />
// </View>