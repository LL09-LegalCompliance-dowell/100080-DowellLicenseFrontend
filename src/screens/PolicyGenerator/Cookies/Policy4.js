// export default Policy4;
import React from 'react';
import styles from './style';
import colors from '../../../../assets/colors/colors';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState, useEffect} from 'react';
import {email_validation} from '../validations';
import {post_agreement_compliance} from '../Api';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import AppLoader from '../../../components/AppLoader';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

const Policy4 = ({object}) => {
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState('');
  const [html_link, setHtml_link] = useState('');
  const [link, setLink] = useState('');
  const [policyName, setPolicyName] = useState('');
  const navigation = useNavigation();

  const copyToClipboard = () => {
    Clipboard.setString(flag);
    setLink(flag);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await post_agreement_compliance(object);
      if (result.data.length > 0) {
        setHtml_link(result.data[0].agreement.html_doc_url);
        setPolicyName(result.data[0].agreement.agreement_compliance_type);
        setFlag(result.data[0].agreement.html_doc_url);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw new Error('Failed to fetch agreement compliance');
    }
  };
  const downloadPolicy = async () => {
    setLoading(true);
    try {
      if (Platform.OS === 'ios') {
        let res = await axios.get(html_link);

        let options = {
          html: res.data,
          fileName: policyName,
          directory: 'Documents',
        };

        let file = await RNHTMLtoPDF.convert(options);
        setLoading(false);
        Alert.alert('PDF saved to following location', file.filePath);
      } else if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to download the file.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // let fileNumber = 0;
          // let fileName = policyName;
          // let destinationDirectory = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;

          // while (await RNFS.exists(destinationDirectory)) {
          //   fileNumber += 1;
          //   fileName = `${policyName}_${fileNumber}`;
          //   destinationDirectory = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;
          // }
          // let res = await axios.get(html_link);
          // const isDirectoryExists = await RNFetchBlob.fs.exists(
          //   destinationDirectory,
          // );
          // if (!isDirectoryExists) {
          //   await RNFetchBlob.fs.mkdir(destinationDirectory);
          // }
          // let options = {
          //   html: res.data,
          //   fileName: 'Policy',
          //   directory: 'Documents',
          // };

          // let file = await RNHTMLtoPDF.convert(options);
          // await RNFS.copyFile(file.filePath, destinationDirectory);
          // setLoading(false);
          // Alert.alert('PDF saved to following location', destinationDirectory);
          let fileNumber = 0;
          let fileName = policyName;
          let destinationFile = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;

          while (await RNFS.exists(destinationFile)) {
            fileNumber += 1;
            fileName = `${policyName}_${fileNumber}`;
            destinationFile = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;
          }

          let res = await axios.get(html_link);

          let options = {
            html: res.data,
            fileName: fileName,
            directory: RNFetchBlob.fs.dirs.DownloadDir,
          };

          let file = await RNHTMLtoPDF.convert(options);

          let destinationFilePath = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;
          await RNFS.copyFile(file.filePath, destinationFilePath);

          setLoading(false);
          Alert.alert(
            'PDF saved to the following location',
            destinationFilePath,
          );
        } else {
          Alert.alert(
            'Permission Denied',
            'Storage permission is required to download the file.',
          );
          console.log('File downloaded:', filePath);
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert('Download Error');
    }
  };
  // const downloadPolicy = async () => {
  //   setLoading(true);
  //   try {
  //     let fileNumber = 0;
  //     let fileName = policyName;
  //     let destinationFile = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;

  //     while (await RNFS.exists(destinationFile)) {
  //       fileNumber += 1;
  //       fileName = `${policyName}_${fileNumber}`;
  //       destinationFile = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;
  //     }

  //     let res = await axios.get(html_link);

  //     let options = {
  //       html: res.data,
  //       fileName: fileName,
  //       directory: RNFetchBlob.fs.dirs.DownloadDir,
  //     };

  //     let file = await RNHTMLtoPDF.convert(options);

  //     let destinationFilePath = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}.pdf`;
  //     await RNFS.copyFile(file.filePath, destinationFilePath);

  //     setLoading(false);
  //     Alert.alert('PDF saved to the following location', destinationFilePath);
  //   } catch (error) {
  //     setLoading(false);
  //     console.error(error);
  //     Alert.alert('Download Error');
  //   }
  // };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        {loading ? <AppLoader /> : null}
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          <View style={{alignItems: 'center', marginVertical: 30}}>
            <Image
              source={require('../../../../assets/images/TheLittleThingsWorking.png')}
              style={styles.blurImage}
            />
            {flag === '' ? null : (
              <>
                <Text
                  style={{
                    fontFamily: 'roboto',
                    fontSize: 18,
                    alignSelf: 'flex-start',
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  Share Link
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
                  <Text
                    numberOfLines={1}
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      color: 'gray',
                      fontSize: 12,
                    }}>
                    {flag}
                  </Text>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginHorizontal: Platform.OS === 'ios' ? 3 : 15,
                      marginEnd: Platform.OS === 'ios' ? 12 : 15,
                      marginInlineEnd: 8,
                    }}
                    onPress={copyToClipboard}>
                    {link === '' ? (
                      <Icon name="copy" size={20} color="black" />
                    ) : (
                      <Text
                        style={{color: colors.primary, fontFamily: 'roboto'}}>
                        Copied
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </>
            )}
            <TouchableOpacity onPress={downloadPolicy} style={styles.button_p4}>
              <AntDesign name="download" size={24} color={colors.primary} />
              <Text style={styles.text_b_p4}>Download Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_p4}
              onPress={async () => {
                setLoading(true);
                try {
                  navigation.navigate('PolicyWebView', {url: html_link});
                  setLoading(false);
                } catch (error) {
                  console.error(error);
                }
              }}>
              <AntDesign name="eye" size={24} color={colors.primary} />
              <Text style={styles.text_b_p4}>Preview Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Policy4;
