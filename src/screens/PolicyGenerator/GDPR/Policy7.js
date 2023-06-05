import {React, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  email_validation,
  number_validation_1,
  url_validation,
} from '../validations';
import styles from '../Cookies/style';
import {ModalDatePicker} from 'react-native-material-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Date from '../Date';
const Policy7 = ({list}) => {
  const [valid_url, setValid_url] = useState(true);
  const [valid_url_1, setValid_url_1] = useState(true);
  const [valid_url_2, setValid_url_2] = useState(true);
  const [valid_email, setvalid_email] = useState(true);
  const [valid_email_1, setvalid_email_1] = useState(true);
  const [valid_email_2, setvalid_email_2] = useState(true);
  const [open, setOpen] = useState(false);
  const openHandler = state => {
    setOpen(state);
  };
  var touchProps1 = {
    style: list[12] ? styles.Pressed : styles.Normal,
    onPress: () => list[13](true),
  };
  var touchProps2 = {
    style: list[14] ? styles.Pressed : styles.Normal,
    onPress: () => list[15](true),
  };
  var touchProps3 = {
    style: list[16] ? styles.Pressed : styles.Normal,
    onPress: () => list[17](true),
  };
  var touchProps4 = {
    style: list[22] ? styles.Pressed : styles.Normal,
    onPress: () => list[23](true),
  };
  var touchProps5 = {
    style: list[24] ? styles.Pressed : styles.Normal,
    onPress: () => list[25](true),
  };
  var touchProps6 = {
    style: list[26] ? styles.Pressed : styles.Normal,
    onPress: () => list[27](true),
  };
  var touchProps7 = {
    style: list[28] ? styles.Pressed : styles.Normal,
    onPress: () => list[29](true),
  };
  var touchProps8 = {
    style: list[30] ? styles.Pressed : styles.Normal,
    onPress: () => list[31](true),
  };
  var touchProps9 = {
    style: list[32] ? styles.Pressed : styles.Normal,
    onPress: () => list[33](true),
  };
  var touchProps10 = {
    style: list[34] ? styles.Pressed : styles.Normal,
    onPress: () => list[35](true),
  };
  var touchProps11 = {
    style: list[42] ? styles.Pressed : styles.Normal,
    onPress: () => list[43](true),
  };
  var touchProps12 = {
    style: list[44] ? styles.Pressed : styles.Normal,
    onPress: () => list[45](true),
  };
  var touchProps13 = {
    style: list[46] ? styles.Pressed : styles.Normal,
    onPress: () => list[47](true),
  };
  return (
    <>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text
            style={
              list[list.length - 1]
                ? styles.hide
                : {color: 'red', textAlign: 'center', fontSize: 20}
            }>
            Please Check your inputs... You must fill all{' '}
          </Text>
          <Text style={styles.text_1}>Policy Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>
              How long will you store personal information you’ve collected from
              your users?
            </Text>
            <RadioGroup
              radioButtons={list[0]}
              onPress={data => list[1](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              What is the maximum time (no. of months) you will store personal
              information for before deleting it?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[2]}
              autoCapitalize="none"
              onChangeText={value => {
                if (value === '') {
                  list[5](true);
                } else {
                  number_validation_1(value) ? list[5](true) : list[5](false);
                }
                list[3](value);
              }}
              placeholder="Enter number of Months"
              keyboardType="numeric"
              placeholderTextColor="gray"
            />
            <Text style={list[4] ? styles.hide : styles.text_warning}>
              Please Enter valid number between 1 and 120
            </Text>
            <Text style={styles.text_2}>
              Is the person or company responsible for the protection of
              personal information (data protection officer, or DPO) different
              from the one that operates the mobile app?
            </Text>
            <RadioGroup
              radioButtons={list[6]}
              onPress={data => {
                list[7](data);
                if (data[0].selected == true) {
                  list[9](true);
                } else {
                  list[9](false);
                  list[11]('');
                  list[13](false);
                  list[15](false);
                  list[17](false);
                  list[19]('');
                }
              }}
              containerStyle={styles.radio_hm}
            />
            <View style={list[8] ? '' : styles.hide}>
              <Text style={styles.text_2}>What is your DPO’s name?</Text>
              <TextInput
                style={styles.input_vm}
                value={list[10]}
                autoCapitalize="none"
                onChangeText={value => list[11](value)}
                placeholder="Enter here"
                placeholderTextColor="gray"
              />
              <Text style={styles.text_2}>How can users contact your DPO?</Text>
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  marginVertical: 20,
                  marginHorizontal: 30,
                  justifyContent: 'space-between',
                }}>
                <TouchableHighlight {...touchProps1}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text style={{width: '90%', color: '#585858'}}>
                      Contact form
                    </Text>
                    <TouchableOpacity
                      style={list[12] ? {} : {display: 'none'}}
                      onPress={() => list[13](false)}>
                      <Text style={{color: '#585858'}}> x </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight {...touchProps2}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text style={{width: '90%', color: '#585858'}}>
                      Email address
                    </Text>
                    <TouchableOpacity
                      style={list[14] ? {} : {display: 'none'}}
                      onPress={() => list[15](false)}>
                      <Text style={{color: '#585858'}}> x </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight {...touchProps3}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <Text style={{width: '90%', color: '#585858'}}>
                      Business address
                    </Text>
                    <TouchableOpacity
                      style={list[16] ? {} : {display: 'none'}}
                      onPress={() => list[17](false)}>
                      <Text style={{color: '#585858'}}> x </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableHighlight>
              </View>
              <Text style={styles.text_2}>
                What is your DPO’s email address?
              </Text>
              <TextInput
                style={styles.input_vm}
                value={list[18]}
                autoCapitalize="none"
                onChangeText={value => {
                  if (value === '') {
                    setvalid_email_1(true);
                  } else {
                    email_validation(value)
                      ? setvalid_email_1(true)
                      : setvalid_email_1(false);
                  }
                  list[19](value);
                }}
                placeholder=" Enter here"
                placeholderTextColor="gray"
              />
            </View>
            <Text style={valid_email_1 ? styles.hide : styles.text_warning}>
              Please Enter valid email
            </Text>
            <Text style={styles.text_2}>
              Do you have security measures in place to protect personal
              information and keep it secure?
            </Text>
            <RadioGroup
              radioButtons={list[20]}
              onPress={data => list[21](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              What kind of responsive action will you take if you have a data
              breach?
            </Text>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginVertical: 20,
                marginHorizontal: 30,
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight {...touchProps4}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Post notifications in the mobile app.
                  </Text>
                  <TouchableOpacity
                    style={list[22] ? {} : {display: 'none'}}
                    onPress={() => list[23](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps5}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Notify users via email.
                  </Text>
                  <TouchableOpacity
                    style={list[24] ? {} : {display: 'none'}}
                    onPress={() => list[25](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps6}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Notify users via phone call.
                  </Text>
                  <TouchableOpacity
                    style={list[26] ? {} : {display: 'none'}}
                    onPress={() => list[27](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps7}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Send users a letter.
                  </Text>
                  <TouchableOpacity
                    style={list[28] ? {} : {display: 'none'}}
                    onPress={() => list[29](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            </View>
            <Text style={styles.text_2}>
              How can users contact you regarding this policy?
            </Text>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginVertical: 20,
                marginHorizontal: 30,
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight {...touchProps8}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Contact form
                  </Text>
                  <TouchableOpacity
                    style={list[30] ? {} : {display: 'none'}}
                    onPress={() => {
                      list[31](false);
                      list[37]('');
                    }}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps9}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Email address
                  </Text>
                  <TouchableOpacity
                    style={list[32] ? {} : {display: 'none'}}
                    onPress={() => {
                      list[33](false);
                      list[39]('');
                    }}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps10}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Business address
                  </Text>
                  <TouchableOpacity
                    style={list[34] ? {} : {display: 'none'}}
                    onPress={() => {
                      list[35](false);
                      list[41]('');
                    }}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            </View>
            <View style={list[30] ? {} : {display: 'none'}}>
              <Text style={styles.text_2}>
                What is the URL of your contact form?
              </Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={list[36]}
                placeholder=" e.g. https://www.website.com/contact/"
                placeholderTextColor="gray"
                onChangeText={value => {
                  if (value === '') {
                    setValid_url(true);
                  } else {
                    url_validation(value)
                      ? setValid_url(true)
                      : setValid_url(false);
                  }
                  list[37](value);
                }}
              />
              <Text style={valid_url ? styles.hide : styles.text_warning}>
                Please Enter valid URL
              </Text>
            </View>
            <View style={list[32] ? {} : {display: 'none'}}>
              <Text style={styles.text_2}>What is your email address?</Text>
              <TextInput
                style={styles.input}
                value={list[38]}
                autoCapitalize="none"
                onChangeText={value => {
                  if (value === '') {
                    setvalid_email(true);
                  } else {
                    email_validation(value)
                      ? setvalid_email(true)
                      : setvalid_email(false);
                  }
                  list[39](value);
                }}
                placeholder=" e.g.support@website.com"
                placeholderTextColor="gray"
              />
              <Text style={valid_email ? styles.hide : styles.text_warning}>
                Please Enter valid email
              </Text>
            </View>
            <View style={list[34] ? {} : {display: 'none'}}>
              <Text style={styles.text_2}>What is your business address?</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={list[40]}
                onChangeText={value => list[41](value)}
                placeholder=" e.g. 23 First St, New York, NY, 10010, USA"
                placeholderTextColor="gray"
              />
            </View>
            <Text style={styles.text_2}>
              How will you notify users of the updates to this policy?
            </Text>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginVertical: 20,
                marginHorizontal: 30,
                justifyContent: 'space-between',
              }}>
              <TouchableHighlight {...touchProps11}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Update the modification date at the bottom of the privacy
                    policy page.
                  </Text>
                  <TouchableOpacity
                    style={list[42] ? {} : {display: 'none'}}
                    onPress={() => list[43](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps12}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Post notifications in the mobile app.
                  </Text>
                  <TouchableOpacity
                    style={list[44] ? {} : {display: 'none'}}
                    onPress={() => list[45](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps13}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Notify users via email.
                  </Text>
                  <TouchableOpacity
                    style={list[46] ? {} : {display: 'none'}}
                    onPress={() => list[47](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{fontWeight: '400'}}>
              <Text style={styles.text_2}>
                Our Privacy Policy was last updated on:
              </Text>
              <Date
                date={list[48]}
                setDate={list[49]}
                open={open}
                openHandler={openHandler}
              />
            </View>
            <Text style={styles.text_2}>website_or_app_name</Text>
            <TextInput
              style={styles.input_vm}
              value={list[50]}
              autoCapitalize="none"
              onChangeText={value => list[51](value)}
              placeholder=""
              placeholderTextColor="gray"
            />
            <Text style={styles.text_2}>website_or_app_url</Text>
            <TextInput
              style={styles.input_vm}
              value={list[52]}
              autoCapitalize="none"
              placeholder=" e.g. https://www.website.com/contact/"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  setValid_url_1(true);
                } else {
                  url_validation(value)
                    ? setValid_url_1(true)
                    : setValid_url_1(false);
                }
                list[53](value);
              }}
            />
            <Text style={valid_url_1 ? styles.hide : styles.text_warning}>
              Please Enter valid URL
            </Text>
            <Text style={styles.text_2}>website_or_app_contact_page_url</Text>
            <TextInput
              style={styles.input_vm}
              value={list[54]}
              autoCapitalize="none"
              placeholder=" e.g. https://www.website.com/contact/"
              placeholderTextColor="gray"
              onChangeText={value => {
                if (value === '') {
                  setValid_url_2(true);
                } else {
                  url_validation(value)
                    ? setValid_url_2(true)
                    : setValid_url_2(false);
                }
                list[55](value);
              }}
            />
            <Text style={valid_url_2 ? styles.hide : styles.text_warning}>
              Please Enter valid URL
            </Text>
            <Text style={styles.text_2}>website_or_app_contact_email</Text>
            <TextInput
              style={styles.input_vm}
              autoCapitalize="none"
              value={list[56]}
              onChangeText={value => {
                if (value === '') {
                  setvalid_email_2(true);
                } else {
                  email_validation(value)
                    ? setvalid_email_2(true)
                    : setvalid_email_2(false);
                }
                list[57](value);
              }}
              placeholder=" e.g.support@website.com"
              placeholderTextColor="gray"
            />
            <Text style={valid_email_2 ? styles.hide : styles.text_warning}>
              Please Enter valid email
            </Text>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy7;
