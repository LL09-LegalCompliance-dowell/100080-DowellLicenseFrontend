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

  const make_room = async () => {
    try {
      setLoading(true);
      const session_id = await AsyncStorage.getItem('session_id');
      console.log(session_id);
      const result = await make_room_api(session_id);

      setMessages_api(result.messages);
      console.log(result.messages);
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
                  return item.read === true ? (
                    <View key={index} style={{display: 'flex', flexDirection: 'row'}}>
                      <MaterialCommunityIcons
                        name="android"
                        size={25}
                        backgroundColor="#078F04"
                        color="#078F04"
                      />
                      <View  style={{width:"90%"}}>
                      <Message
                        key={index}
                        Message={item.message}
                        customer_app="app"
                      />
                      </View>
                    </View>
                  ) : (
                    <View key={index} style={{alignSelf: 'flex-end'}}>
                      <Message Message={item.message} customer_app="customer" />
                    </View>
                  );
                })}

                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="android"
                    size={25}
                    backgroundColor="#078F04"
                    color="#078F04"
                  />
                  <View  style={{width:"90%"}}>
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
                    <View  style={{width:"90%"}}>
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
                        <View style={{width:"90%"}}>
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
                        <View style={{width:"90%"}}>
                          <Message
                            Message="License Compatibility is a compatibility test between two licenses."
                            customer_app="app"
                          />
                          <Message
                            Message="It gives you a test result where it shows whether you can use those two compared licenses in your application."
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
                        <View  style={{width:"90%"}}>
                          <Message
                            Message="You can find a tutorial on how to check compatibility on the compatibility test page"
                            customer_app="app"
                          />
                          <Message
                            Message="We have described it in step by step manner"
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
                        <View  style={{width:"90%"}}>
                          <Message
                            Message="Recommendation percentage is a approximate number of how much compatible are those licenses"
                            customer_app="app"
                          />
                          <Message
                            Message="Also it checks whether you can use them in your application"
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
                        <View  style={{width:"90%"}}>
                          <Message
                            Message="Recommendation percentage is calculated by using different parameters i.e. versions, limitations, permissions, conditions, warranty disclaimers, etc."
                            customer_app="app"
                          />
                          <Message
                            Message="So considering these factors recommendation percentage is pretty accurate"
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
                        <View  style={{width:"90%"}}>
                          <Message
                            Message="No, license compatibility is totally free to use. You do not need to pay anything"
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
                        <View  style={{width:"90%"}}>
                          <Message
                            Message="Full in depth comparison is provided after the results from the check are displayed"
                            customer_app="app"
                          />
                          <Message
                            Message="Click on “read more” below the result to find out"
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
                        <View  style={{width:"90%"}}>
                          <Message
                            Message="Yes. You can set up a personal account or an account for your organization"
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
                          <View  style={{width:"90%"}}>
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
                        <View  style={{width:"90%"}}>
                        <Message
                          Message="Identify your query from these options."
                          customer_app="app"
                        />
                        </View>
                      </View>
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
                        <View  style={{width:"90%"}}>
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
                        <View  style={{width:"90%"}}>
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
                          <View  style={{width:"90%"}}>
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
                        <View  style={{width:"90%"}}>
                        <Message
                          Message="Identify your query from these options."
                          customer_app="app"
                        />
                        </View>
                      </View>
                    )}

                    {software_license !== '' && (
                      <View style={{alignSelf: 'flex-end'}}>
                        <Message
                          Message={software_license}
                          customer_app="customer"
                        />
                      </View>
                    )}
                    {software_license === 'What is software license?' && (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <MaterialCommunityIcons
                          name="android"
                          size={25}
                          backgroundColor="#078F04"
                          color="#078F04"
                        />
                        <View  style={{width:"90%"}}>
                          <Message
                            Message="A software license is a document that provides legally binding guidelines for the use and distribution of software."
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
                          <View  style={{width:"90%"}}>
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
                          <View  style={{width:"90%"}}>
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
                {query === 'Software License' &&
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
                      items={['What is software license?']}
                    />
                  )}
                {query === 'Agreement Compliance' &&
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
                        'How to generate an agreement compliance?',
                        'Is agreement compliance policy same for all website and apps?',
                      ]}
                    />
                  )}
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
    flex:2,
    
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
