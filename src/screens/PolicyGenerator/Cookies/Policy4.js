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
    //   try {
    //     console.log(object);
    //     const result = await post_agreement_compliance(object);
    //     if (result) {
    //       console.log('result', result);
    //       setHtml_link(result.data[0].agreement.html_doc_url);
    //       console.log(result.data[0].agreement.html_doc_url);
    //       setPolicyName(result.data[0].agreement.agreement_compliance_type);
    //       setFlag(result.data[0].agreement.html_doc_url);
    //     }
    //     setLoading(false);
    //   } catch (error) {
    //     //  console.error(error);
    //     setLoading(false);
    //     console.error(error);
    //   }
    // };
    try {
      console.log(object);
      const result = await post_agreement_compliance(object);
      console.log(`result ${Platform.OS}`, result);
      if (result.data.length > 0) {
        setHtml_link(result.data[0].agreement.html_doc_url);
        console.log(result.data[0].agreement.html_doc_url);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        {loading ? <AppLoader /> : null}
        {/* <Text
        style={{
          color: colors.textDark,
          fontSize: 20,
          fontWeight: '400',
          marginTop: 20,
        }}>
        Finish Up:
      </Text> */}
        <View style={{paddingHorizontal: 11, paddingTop: 16}}>
          {/* <Text style={{color: colors.textDark, fontSize: 18, fontWeight: '400'}}>
          Enter Your Email address to receive the policy:
        </Text>
        <TextInput
          style={styles.input}
          value={list[0]}
          placeholder="Eg. johndoe@mail.com"
          placeholderTextColor="gray"
          onChangeText={value => {
            if (value === '') {
              setValid_email(true);
            } else {
              email_validation(value)
                ? setValid_email(true)
                : setValid_email(false);
            }
            list[1](value);
          }}
        />
        <Text style={valid_email ? styles.hide : styles.text_warning}>
          Please Enter valid email
        </Text>
        <Text style={{color: '#585858', fontSize: 18, fontWeight: '300'}}>
          You will receive the policy to the entered email.
        </Text> */}
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
                    // alignSelf: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    // style={{marginHorizontal: 10, color: 'gray'}}>
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
                      // borderLeftColor: '585858',
                      // borderLeftWidth: 0.9,
                      // padding: 6,
                      // alignSelf: 'center',
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

            <TouchableOpacity
              onPress={async () => {
                setLoading(true);
                try {
                  let res = await axios.get(html_link);
                  let options = {
                    html: res.data,
                    fileName: policyName,
                    directory: 'Documents',
                  };
                  let file = await RNHTMLtoPDF.convert(options);
                  setLoading(false);
                  Alert.alert('PDF saved to following location', file.filePath);
                } catch (error) {
                  console.error(error);
                }
              }}
              style={styles.button_p4}>
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
