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
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {email_validation} from '../validations';
import {post_agreement_compliance} from '../Api';
import {Linking} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import AppLoader from '../../../components/AppLoader';
import axios from 'axios';

const Policy4 = ({list, object}) => {
  const [valid_email, setValid_email] = useState(true);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(true);

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          color: colors.textDark,
          fontSize: 20,
          fontWeight: '400',
          marginTop: 20,
        }}>
        Finish Up:
      </Text>
      <View style={{paddingHorizontal: 11, paddingTop: 16}}>
        <Text style={{color: colors.textDark, fontSize: 18, fontWeight: '400'}}>
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
        </Text>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Image
            source={require('../../../../assets/images/TheLittleThingsWorking.png')}
            style={styles.blurImage}
          />
          <TouchableOpacity
            onPress={async () => {
              setLoading(true);
              try {
                const result = await post_agreement_compliance(object);
                const html_link = result.data[0].agreement.html_doc_url;

                let res = await axios.get(html_link);

                let options = {
                  html: res.data,
                  fileName: 'Policy',
                  directory: 'Documents',
                };

                let file = await RNHTMLtoPDF.convert(options);
                let filePath = RNFetchBlob.fs.dirs.DocumentDir + '/testPDF.pdf';

                RNFetchBlob.fs
                  .writeFile(filePath, file.base64, 'base64')
                  .then(response => {
                    console.log('success log', response);
                  })
                  .catch(error => {
                    console.log('Error log', error);
                  });

                // console.log(file.filePath);
                setLoading(false);
                // alert(file.filePath);
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
              try {
                setFlag(false);
                console.log(object);
                const result = await post_agreement_compliance(object);
                setFlag(true);
                const preview_link = result.data[0].agreement.html_doc_url;
                Linking.openURL(preview_link);
              } catch (error) {
                console.error(error);
              }
            }}>
            <AntDesign name="eye" size={24} color={colors.primary} />
            <Text style={styles.text_b_p4}>Preview Policy</Text>
          </TouchableOpacity>
          <Text
            style={
              flag
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please wait while generating policy{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Policy4;
