import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import IoniMaterialCommunityIconscons from 'react-native-vector-icons/AntDesign';
import AppLoader from '../../components/AppLoader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import make_room_api from './HelpApi';
import {send_message} from './HelpApi';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from './HelpComponents/Message';
import LanguageSelect from './HelpComponents/LanguageSelect';
import Queryselect from './HelpComponents/Queryselect';
import RBSheet from 'react-native-raw-bottom-sheet';
import LanguageSlider from './HelpComponents/LanguageSlider';
const Help = ({navigation}) => {
  const refRBSheet = useRef();
  const scrollViewRef = useRef();
  const [flag, setFlag] = useState(false);
  const [full_height, setfull_height] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messages_api, setMessages_api] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState('');
  const [room_pk, set_room_pk] = useState();
  const [user_id, set_user_id] = useState();
  const [show_picker, set_show_picker] = useState(true);
  const [language, setlangauge] = useState('English');

  const language_handler = language => {
    setlangauge(language);
  };
  const [query, setquery] = useState('');
  const query_handler = query => {
    setquery(query);
  };

  const [license_compatibility, set_license_compatibility] = useState('');
  const license_compatibility_handler = state => {
    set_license_compatibility(state);
  };

  const [agreement_compliance, set_agreement_compliance] = useState('');
  const agreement_compliance_handler = state => {
    set_agreement_compliance(state);
  };

  const [software_license, set_software_license] = useState('');
  const software_license_handler = state => {
    set_software_license(state);
  };

  const [moreq, set_moreq] = useState('');
  const moreq_handler = state => {
    set_moreq(state);
  };
  const add_message_handler = message => {
    setMessages([...messages, message]);
  };

  // const keyboardHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     () => {

  //     }
  // );
  console.log(full_height);
  useEffect(() => {
    if (moreq === 'Yes') {
      setquery('');
      set_license_compatibility('');
      set_agreement_compliance('');
      set_software_license('');
      set_moreq('');
    } else if (moreq === 'No') {
      set_moreq('');
      navigation.navigate('HomeScreen');
    }
  }, [moreq]);
  useEffect(() => {
    if (
      agreement_compliance !== '' ||
      software_license !== '' ||
      license_compatibility !== '' ||
      query === 'License Compatibility' ||
      query === 'Agreement Compliance' ||
      query === 'Software License' ||
      show_picker === false
    ) {
      setfull_height(true);
    } else {
      setfull_height(false);
    }
  }, [
    agreement_compliance,
    software_license,
    license_compatibility,
    query,
    show_picker,
  ]);
  function convertTo12HourFormat(timestampString) {
    const date = new Date(timestampString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${date.toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}  ${formattedHours}:${formattedMinutes} ${period}`;
  }

  const make_room = async () => {
    try {
      setLoading(true);
      const session_id = await AsyncStorage.getItem('session_id');

      const result = await make_room_api(session_id);
      console.log(result.messages);
      setMessages_api(result.messages);

      // convertTo12HourFormat(result.messages[0].timestamp);
      set_room_pk(result.room_pk);
      set_user_id(result.portfolio);
      setLoading(false);
    } catch (error) {
      navigation.navigate('HomeScreen');
      alert('Something went wrong, please try again later');
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        set_show_picker(false);
        scrollViewRef.current.scrollToEnd({animated: true});
      },
    );

    make_room();
    return () => keyboardDidShowListener.remove();
  }, []);

  return (
    <>
      <View style={styles.modal}>
        {flag && <View style={styles.overlay} />}
        {loading ? <AppLoader /> : null}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 0,
            paddingHorizontal: 8,
            backgroundColor: '#078F04',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <IoniMaterialCommunityIconscons
              name="arrowleft"
              size={45}
              color="white"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 26,
              fontFamily: 'Roboto',
              fontWeight: '400',
              color: '#FFFFFF',
            }}>
            HELPBOT
          </Text>
          <TouchableOpacity
          // onPress={() => {
          //   setFlag(true);
          //   refRBSheet.current.open();
          // }}
          >
            {/* <Image
              style={{height: 50, width: 50, resizeMode: 'contain'}}
              source={require('./images/clarity_language-solid.png')}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 2.2,
            paddingTop: 10,
            paddingHorizontal: 5,
          }}>
          <View style={{height: '98%', backgroundColor: 'white'}}>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() =>
                scrollViewRef.current.scrollToEnd({animated: true})
              }>
              <View>
                {messages_api.map((item, index) => {
                  console.log(item.timestamp);
                  return item.read === true ? (
                    <View key={index}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            key={index}
                            Message={item.message}
                            customer_app="app"
                          />
                        </View>
                      </View>
                      <Text style={{textAlign: 'left'}}>
                        {convertTo12HourFormat(item.timestamp)}
                      </Text>
                    </View>
                  ) : (
                    <>
                      <View key={index} style={{alignSelf: 'flex-end'}}>
                        <Message
                          Message={item.message}
                          customer_app="customer"
                        />
                      </View>
                      <Text style={{textAlign: 'right'}}>
                        {convertTo12HourFormat(item.timestamp)}
                      </Text>
                    </>
                  );
                })}

                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="android"
                    size={25}
                    backgroundColor="#078F04"
                    color="#078F04"
                  />
                  <View style={{width: '90%'}}>
                    <Message
                      Message="Hi, we 're here to help you."
                      customer_app="app"
                    />
                    {/* <Message Message="please select your preferred language." customer_app ="app"/> */}
                  </View>
                </View>
                {language === '' && (
                  <LanguageSelect language_handler={language_handler} />
                )}
                {/* {language!=="" && <View style={{alignSelf:'flex-end'}}><Message Message={language} customer_app ="customer" /></View>} */}
                {language !== '' && (show_picker || query !== '') && (
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <MaterialCommunityIcons
                      name="android"
                      size={25}
                      backgroundColor="#078F04"
                      color="#078F04"
                    />
                    <View style={{width: '90%'}}>
                      <Message
                        Message="Select your query."
                        customer_app="app"
                      />
                    </View>
                  </View>
                )}

                {query !== '' && (
                  <View style={{alignSelf: 'flex-end'}}>
                    <Message Message={query} customer_app="customer" />
                  </View>
                )}
                {query === 'License Compatibility' && (
                  <>
                    {(show_picker || license_compatibility !== '') && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Identify your query from these options."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility === '' && show_picker && (
                      <Queryselect
                        handler={license_compatibility_handler}
                        items={[
                          'What is License Compatibility?',
                          'How to check the compatibility of two licenses?',
                          'What is recommendation percentage?',
                          'How much accurate is recommendation percentage?',
                          'Do I need to pay to check license compatibility?',
                          'Can I compare any two licenses?',
                          'Would I be able to know why licenses are compatible or not?',
                          'Can I use this Legalzard for my organization or company?',
                        ]}
                      />
                    )}
                    {license_compatibility !== '' && (
                      <View style={{alignSelf: 'flex-end'}}>
                        <Message
                          Message={license_compatibility}
                          customer_app="customer"
                          top={license_compatibility.length}
                        />
                      </View>
                    )}
                    {license_compatibility ===
                      'What is License Compatibility?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="It ensures that different software licenses can coexist within the same project or distribution without violating their terms. This is crucial for open-source developers and users aiming to integrate various components. Compatible licenses have harmonious requirements, enabling smooth integration, while incompatible ones may impose contradictory conditions, hindering code combination. Understanding compatibility ensures legal compliance, respects intellectual property, and fosters collaboration in the open-source community"
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility ===
                      'How to check the compatibility of two licenses?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="To check the compatibility of the two licenses, you need to compare their terms and conditions carefully. Look for any conflicting or contradictory clauses that may prevent their combination. If the licenses have compatible terms and do not impose restrictions on each other, they are likely to be compatible. You can also refer to resources or tools that provide license compatibility information to ensure a smooth integration of open-source components in your project. Always seek legal advice if you are uncertain about license compatibility to avoid potential legal issues."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility ===
                      'What is recommendation percentage?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="The recommendation percentage for comparing licenses indicates their compatibility. A higher percentage signals strong compatibility, allowing smooth integration. A lower percentage suggests potential conflicts and limitations, requiring careful evaluation. This percentage aids users in making informed decisions for compliance with open-source software requirements."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility ===
                      'How much accurate is recommendation percentage?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="The recommendation percentage is meticulously calculated by our experts for accuracy and reliability. With a database of 500+ licenses, our platform ensures a seamless user experience. Comprehensive information, from descriptions to disclaimers, is presented in a user-friendly manner, eliminating confusion in your licensing journey. Our mission is to simplify and empower your open-source software experience."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility ===
                      'Do I need to pay to check license compatibility?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="You can freely check license compatibility up to a specific threshold. Our basic compatibility checking is offered at no charge. For more advanced features or extensive use, premium options may be available, offering extra advantages. We aim to cater to diverse user needs while ensuring access to vital compatibility information."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility ===
                      'Can I compare any two licenses?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Yes, you can compare any two licenses using our platform. Simply enter the names or types of the licenses you want to compare, and our system will provide you with insights into their compatibility and recommendations. This enables you to make informed decisions about using different licenses in your projects."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility ===
                      'Would I be able to know why licenses are compatible or not?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Certainly! Our platform offers both the compatibility percentage and detailed insights into why licenses are compatible or not. You'll understand specific conditions, permissions, and limitations influencing compatibility, aiding informed decision-making for your projects."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility ===
                      'Can I use this Legalzard for my organization or company?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Absolutely! Our platform not only provides you with the compatibility percentage between two licenses but also offers detailed information about why licenses are considered compatible or not. You'll receive insights into the specific conditions, permissions, and limitations that contribute to their compatibility status. This transparency allows you to understand the intricacies of license compatibility and make well-informed choices for your projects."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {license_compatibility !== '' && show_picker && (
                      <>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <MaterialCommunityIcons
                            name="android"
                            size={25}
                            backgroundColor="#078F04"
                            color="#078F04"
                          />
                          <View style={{width: '90%'}}>
                            <Message
                              Message="Do you need more questions? "
                              customer_app="app"
                            />
                          </View>
                        </View>
                        <Queryselect
                          handler={moreq_handler}
                          items={['Yes', 'No']}
                        />
                      </>
                    )}
                  </>
                )}
                {query === 'Agreement Compliance' && (
                  <>
                    {(show_picker || agreement_compliance !== '') && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Identify your query from these options."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}
                    {agreement_compliance === '' && show_picker && (
                      <Queryselect
                        handler={agreement_compliance_handler}
                        items={[
                          'What is agreement compliance?',
                          'Why is agreement compliance important for businesses?',
                          "Are all websites' agreement compliance the same?",
                          'How can businesses ensure agreement compliance?',
                          'Can agreement compliance minimize risks for businesses?',
                          'What are the consequences of non-compliance with agreements?',
                          'How can businesses streamline agreement compliance?',
                        ]}
                      />
                    )}
                    {agreement_compliance !== '' && (
                      <View style={{alignSelf: 'flex-end'}}>
                        <Message
                          Message={agreement_compliance}
                          customer_app="customer"
                        />
                      </View>
                    )}
                    {agreement_compliance ===
                      'How to generate an agreement compliance?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="First step is select the policy you want to generate then click on start generating button"
                            customer_app="app"
                          />
                          <Message
                            Message="Then fill the input fields and click on next button and download or share the agreement through link."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}
                    {agreement_compliance ===
                      'Is agreement compliance policy same for all website and apps?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Yes agreement compliance policy is same for all websites and apps"
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}
                    {agreement_compliance !== '' && show_picker && (
                      <>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <MaterialCommunityIcons
                            name="android"
                            size={25}
                            backgroundColor="#078F04"
                            color="#078F04"
                          />
                          <View style={{width: '90%'}}>
                            <Message
                              Message="Do you need more questions? "
                              customer_app="app"
                            />
                          </View>
                        </View>
                        <Queryselect
                          handler={moreq_handler}
                          items={['Yes', 'No']}
                        />
                      </>
                    )}
                  </>
                )}
                {query === 'Software License' && (
                  <>
                    {(show_picker || software_license !== '') && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Identify your query from these options."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}
                    {software_license === '' && show_picker && (
                      <Queryselect
                        handler={software_license_handler}
                        items={[
                          'What is software licensing?',
                          'How Open software licensing will empower users?',
                          'Why is it important for software people?',
                        ]}
                      />
                    )}

                    {software_license !== '' && (
                      <View style={{alignSelf: 'flex-end'}}>
                        <Message
                          Message={software_license}
                          customer_app="customer"
                        />
                      </View>
                    )}
                    {software_license === 'What is software licensing?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Software licensing is a formal and legally binding agreement between a user and a software provider, outlining the granted authority to utilize the software with specific privileges. This license serves as a comprehensive guide for users to adhere to, preventing any violations of copyrights and other intellectual property rights."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {software_license ===
                      'How Open software licensing will empower users?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Open-source software licensing empowers users through free access, modification, and distribution of source code, encouraging customization and collaboration. It enables contribution, avoids IP issues, promotes transparency, and spurs innovation. Users can tailor the software to their needs."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {software_license ===
                      'Why is it important for software people?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View style={{width: '90%'}}>
                          <Message
                            Message="Software licensing will ensure that the software is being used legally and that every business is paying for the tools that they are using. It will also ensure that your business is protected from cyber threats and unethical operations."
                            customer_app="app"
                          />
                        </View>
                      </View>
                    )}

                    {software_license !== '' && show_picker && (
                      <>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <MaterialCommunityIcons
                            name="android"
                            size={25}
                            backgroundColor="#078F04"
                            color="#078F04"
                          />
                          <View style={{width: '90%'}}>
                            <Message
                              Message="Do you need more questions? "
                              customer_app="app"
                            />
                          </View>
                        </View>
                        <Queryselect
                          handler={moreq_handler}
                          items={['Yes', 'No']}
                        />
                      </>
                    )}
                  </>
                )}
                {messages.length > 0 &&
                  !show_picker &&
                  messages.map((item, index) => {
                    return (
                      <View key={index} style={{marginTop: 0}}>
                        <View style={{alignSelf: 'flex-end'}}>
                          <Message Message={item} customer_app="customer" />
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 5,
                          }}>
                          <MaterialCommunityIcons
                            name="android"
                            size={25}
                            backgroundColor="#078F04"
                            color="#078F04"
                          />
                          <View style={{width: '90%'}}>
                            <Message
                              Message="We have received your message, Our customer support team will respond to you within next 24 hours"
                              customer_app="app"
                            />
                          </View>
                        </View>
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
          </View>
        </View>

        {!full_height && (
          <View>
            <ScrollView
              style={
                query === 'Software License'
                  ? {
                      backgroundColor: 'white',
                      paddingVertical: 10,
                      width: '100%',
                      height: '14%',
                      minHeight: '14%',
                    }
                  : {
                      backgroundColor: 'white',
                      paddingVertical: 10,
                      width: '100%',
                      height: '26%',
                      minHeight: '14%',
                    }
              }>
              <View>
                {query === '' && language !== '' && show_picker && (
                  <Queryselect
                    style={{
                      backgroundColor: '#078F04',
                      borderRadius: 40,
                      paddingTop: 25,
                      paddingBottom: 25,
                      paddingLeft: 38,
                      paddingRight: 38,
                      maxWidth: '85%',
                      marginLeft: 'auto',
                      marginRight: 'auto',

                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    handler={query_handler}
                    items={[
                      'Agreement Compliance',
                      'License Compatibility',
                      'Software License',
                    ]}
                  />
                )}
                {/* {query === 'Software License' &&
                  software_license === '' &&
                  show_picker && (
                    <Queryselect
                      style={{
                        backgroundColor: '#078F04',
                        borderRadius: 40,
                        paddingTop: 25,
                        paddingBottom: 25,
                        paddingLeft: 38,
                        paddingRight: 38,
                        maxWidth: '85%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      handler={software_license_handler}
                      items={[
                        'What is software licensing?',
                        'How Open software licensing will users?',
                        'Why is it important for software people?',
                      ]}
                    />
                  )} */}
                {/* {query === 'Agreement Compliance' &&
                  agreement_compliance === '' &&
                  show_picker && (
                    <Queryselect
                      style={{
                        backgroundColor: '#078F04',
                        borderRadius: 40,
                        paddingTop: 25,
                        paddingBottom: 25,
                        paddingLeft: 38,
                        paddingRight: 38,
                        maxWidth: '85%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      handler={agreement_compliance_handler}
                      items={[
                        'What is agreement compliance?',
                        'Why is agreement compliance important for businesses?',
                        "Are all websites' agreement compliance the same?",
                        'How can businesses ensure agreement compliance?',
                        'Can agreement compliance minimize risks for businesses?',
                        'What are the consequences of non-compliance with agreements?',
                        'How can businesses streamline agreement compliance?',
                      ]}
                    />
                  )} */}
              </View>
            </ScrollView>
          </View>
        )}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',

            alignItems: 'center',
            width: '100%',
            paddingVertical: 12,
            backgroundColor: 'white',
            height: 75,
          }}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              set_show_picker(true);
            }}>
            <Image
              style={{height: 40, width: 40, resizeMode: 'contain'}}
              source={require('./images/Vector_1.png')}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            value={data}
            onChangeText={value => setdata(value)}
            placeholder="  Type your message here..."
            placeholderTextColor="gray"
          />

          <TouchableOpacity
            onPress={async () => {
              if (data !== '') {
                setLoading(true);
                const status = await send_message(
                  room_pk,
                  user_id.toString(),
                  data,
                );
                if (status === 200) {
                  setdata('');
                  add_message_handler(data);
                  setLoading(false);
                } else {
                  alert('Error while sending message');
                  setLoading(false);
                }
              }
            }}>
            <Image
              style={{height: 40, width: 35, resizeMode: 'contain'}}
              source={require('./images/Vector.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        onClose={() => setFlag(false)}
        height={330}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 10,
          },
          draggableIcon: {
            backgroundColor: '#000',
            width: 100,
          },
        }}>
        <LanguageSlider />
      </RBSheet>
    </>
  );
};

export default Help;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    zIndex: 100,
    opacity: 0.4,
  },
  input: {
    height: 51,
    flex: 2,

    marginLeft: 4,
    marginVertical: 0,
    marginRight: 4,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#C4C4C4',
    padding: 10,
    backgroundColor: '#D8D8D8',
    fontSize: 16,
    color: '#585858',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
