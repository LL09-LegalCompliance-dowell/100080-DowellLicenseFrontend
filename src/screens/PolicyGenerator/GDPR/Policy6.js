import React from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from '../Cookies/style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Policy6 = ({list}) => {
  var touchProps1 = {
    style: list[2] ? styles.Pressed : styles.Normal,
    onPress: () => list[3](true),
  };
  var touchProps2 = {
    style: list[4] ? styles.Pressed : styles.Normal,
    onPress: () => list[5](true),
  };
  var touchProps3 = {
    style: list[6] ? styles.Pressed : styles.Normal,
    onPress: () => list[7](true),
  };
  var touchProps4 = {
    style: list[8] ? styles.Pressed : styles.Normal,
    onPress: () => list[9](true),
  };
  var touchProps5 = {
    style: list[10] ? styles.Pressed : styles.Normal,
    onPress: () => list[11](true),
  };
  var touchProps6 = {
    style: list[12] ? styles.Pressed : styles.Normal,
    onPress: () => list[13](true),
  };
  var touchProps7 = {
    style: list[14] ? styles.Pressed : styles.Normal,
    onPress: () => list[15](true),
  };
  var touchProps8 = {
    style: list[16] ? styles.Pressed : styles.Normal,
    onPress: () => list[17](true),
  };
  var touchProps9 = {
    style: list[18] ? styles.Pressed : styles.Normal,
    onPress: () => list[19](true),
  };
  var touchProps10 = {
    style: list[20] ? styles.Pressed : styles.Normal,
    onPress: () => list[21](true),
  };
  var touchProps11 = {
    style: list[22] ? styles.Pressed : styles.Normal,
    onPress: () => list[23](true),
  };
  var touchProps12 = {
    style: list[24] ? styles.Pressed : styles.Normal,
    onPress: () => list[25](true),
  };
  var touchProps13 = {
    style: list[26] ? styles.Pressed : styles.Normal,
    onPress: () => list[27](true),
  };
  var touchProps14 = {
    style: list[28] ? styles.Pressed : styles.Normal,
    onPress: () => list[29](true),
  };
  var touchProps15 = {
    style: list[30] ? styles.Pressed : styles.Normal,
    onPress: () => list[31](true),
  };
  var touchProps16 = {
    style: list[32] ? styles.Pressed : styles.Normal,
    onPress: () => list[33](true),
  };

  var touchProps1_ = {
    style: list[40] ? styles.Pressed : styles.Normal,
    onPress: () => list[41](true),
  };
  var touchProps2_ = {
    style: list[42] ? styles.Pressed : styles.Normal,
    onPress: () => list[43](true),
  };
  var touchProps3_ = {
    style: list[44] ? styles.Pressed : styles.Normal,
    onPress: () => list[45](true),
  };
  var touchProps4_ = {
    style: list[46] ? styles.Pressed : styles.Normal,
    onPress: () => list[47](true),
  };
  var touchProps5_ = {
    style: list[48] ? styles.Pressed : styles.Normal,
    onPress: () => list[49](true),
  };
  var touchProps6_ = {
    style: list[50] ? styles.Pressed : styles.Normal,
    onPress: () => list[51](true),
  };
  var touchProps7_ = {
    style: list[52] ? styles.Pressed : styles.Normal,
    onPress: () => list[53](true),
  };
  var touchProps8_ = {
    style: list[54] ? styles.Pressed : styles.Normal,
    onPress: () => list[55](true),
  };
  var touchProps9_ = {
    style: list[56] ? styles.Pressed : styles.Normal,
    onPress: () => list[57](true),
  };
  var touchProps10_ = {
    style: list[58] ? styles.Pressed : styles.Normal,
    onPress: () => list[59](true),
  };
  var touchProps11_ = {
    style: list[60] ? styles.Pressed : styles.Normal,
    onPress: () => list[61](true),
  };
  var touchProps12_ = {
    style: list[62] ? styles.Pressed : styles.Normal,
    onPress: () => list[63](true),
  };
  var touchProps13_ = {
    style: list[64] ? styles.Pressed : styles.Normal,
    onPress: () => list[65](true),
  };
  var touchProps14_ = {
    style: list[66] ? styles.Pressed : styles.Normal,
    onPress: () => list[67](true),
  };
  var touchProps15_ = {
    style: list[68] ? styles.Pressed : styles.Normal,
    onPress: () => list[69](true),
  };
  var touchProps16_ = {
    style: list[70] ? styles.Pressed : styles.Normal,
    onPress: () => list[71](true),
  };
  return (
    <>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <Text style={styles.text_1}>Policy Details:</Text>
          <View style={{paddingHorizontal: 11, paddingTop: 16}}>
            <Text style={styles.text_2}>
              Do you collect users’ personal information from third-party
              sources (partnerships, social networks, etc)?
            </Text>
            <RadioGroup
              radioButtons={list[0]}
              onPress={data => list[1](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              What will you do with the information you collect?
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
              <TouchableHighlight {...touchProps1}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Create and manage user accounts
                  </Text>
                  <TouchableOpacity
                    style={list[2] ? {} : {display: 'none'}}
                    onPress={() => list[3](false)}>
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
                    Fulfill and manage orders
                  </Text>
                  <TouchableOpacity
                    style={list[4] ? {} : {display: 'none'}}
                    onPress={() => list[5](false)}>
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
                    Deliver products or services
                  </Text>
                  <TouchableOpacity
                    style={list[6] ? {} : {display: 'none'}}
                    onPress={() => list[7](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps4}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Improve products and services
                  </Text>
                  <TouchableOpacity
                    style={list[8] ? {} : {display: 'none'}}
                    onPress={() => list[9](false)}>
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
                    Send administrative information
                  </Text>
                  <TouchableOpacity
                    style={list[10] ? {} : {display: 'none'}}
                    onPress={() => list[11](false)}>
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
                    Send marketing and promotional communications
                  </Text>
                  <TouchableOpacity
                    style={list[12] ? {} : {display: 'none'}}
                    onPress={() => list[13](false)}>
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
                    Send product and service updates
                  </Text>
                  <TouchableOpacity
                    style={list[14] ? {} : {display: 'none'}}
                    onPress={() => list[15](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps8}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Respond to inquiries and offer support
                  </Text>
                  <TouchableOpacity
                    style={list[16] ? {} : {display: 'none'}}
                    onPress={() => list[17](false)}>
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
                    Request user feedback
                  </Text>
                  <TouchableOpacity
                    style={list[18] ? {} : {display: 'none'}}
                    onPress={() => list[19](false)}>
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
                    Improve user experience
                  </Text>
                  <TouchableOpacity
                    style={list[20] ? {} : {display: 'none'}}
                    onPress={() => list[21](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps11}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Post customer testimonials
                  </Text>
                  <TouchableOpacity
                    style={list[22] ? {} : {display: 'none'}}
                    onPress={() => list[23](false)}>
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
                    Deliver targeted advertising
                  </Text>
                  <TouchableOpacity
                    style={list[24] ? {} : {display: 'none'}}
                    onPress={() => list[25](false)}>
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
                    Administer prize draws and competitions
                  </Text>
                  <TouchableOpacity
                    style={list[26] ? {} : {display: 'none'}}
                    onPress={() => list[27](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps14}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Enforce terms and conditions and policies
                  </Text>
                  <TouchableOpacity
                    style={list[28] ? {} : {display: 'none'}}
                    onPress={() => list[29](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps15}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Protect from abuse and malicious users
                  </Text>
                  <TouchableOpacity
                    style={list[30] ? {} : {display: 'none'}}
                    onPress={() => list[31](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps16}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Respond to legal requests and prevent harm
                  </Text>
                  <TouchableOpacity
                    style={list[32] ? {} : {display: 'none'}}
                    onPress={() => list[33](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            </View>
            <Text style={styles.text_2}>
              Do you combine different bits of personal information (such as
              age, location, etc) into consumer profiles to help get a broader
              picture about your users?
            </Text>
            <RadioGroup
              radioButtons={list[34]}
              onPress={data => list[35](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              Will you disclose personal information to business affiliates
              (parent company, subsidiaries, joint venture partners, etc)?
            </Text>
            <RadioGroup
              radioButtons={list[36]}
              onPress={data => list[37](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              Will you disclose personal information to third parties?
            </Text>
            <RadioGroup
              radioButtons={list[38]}
              onPress={data => list[39](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              What are the categories of third parties you may disclose personal
              information to?
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
              <TouchableHighlight {...touchProps1_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Advertising networks
                  </Text>
                  <TouchableOpacity
                    style={list[40] ? {} : {display: 'none'}}
                    onPress={() => list[41](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps2_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Affiliate programs
                  </Text>
                  <TouchableOpacity
                    style={list[42] ? {} : {display: 'none'}}
                    onPress={() => list[43](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps3_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Cloud computing services
                  </Text>
                  <TouchableOpacity
                    style={list[44] ? {} : {display: 'none'}}
                    onPress={() => list[45](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps4_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Communication and collaboration services
                  </Text>
                  <TouchableOpacity
                    style={list[46] ? {} : {display: 'none'}}
                    onPress={() => list[47](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps5_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Data analytics services
                  </Text>
                  <TouchableOpacity
                    style={list[48] ? {} : {display: 'none'}}
                    onPress={() => list[49](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps6_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Data storage services
                  </Text>
                  <TouchableOpacity
                    style={list[50] ? {} : {display: 'none'}}
                    onPress={() => list[51](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps7_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Financial services
                  </Text>
                  <TouchableOpacity
                    style={list[52] ? {} : {display: 'none'}}
                    onPress={() => list[53](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps8_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Government agencies
                  </Text>
                  <TouchableOpacity
                    style={list[54] ? {} : {display: 'none'}}
                    onPress={() => list[55](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps9_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Order fulfillment services
                  </Text>
                  <TouchableOpacity
                    style={list[56] ? {} : {display: 'none'}}
                    onPress={() => list[57](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps10_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Payment processors
                  </Text>
                  <TouchableOpacity
                    style={list[58] ? {} : {display: 'none'}}
                    onPress={() => list[59](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps11_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Performance monitoring services
                  </Text>
                  <TouchableOpacity
                    style={list[60] ? {} : {display: 'none'}}
                    onPress={() => list[61](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps12_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Product engineering and design services
                  </Text>
                  <TouchableOpacity
                    style={list[62] ? {} : {display: 'none'}}
                    onPress={() => list[63](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps13_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Sales and marketing services
                  </Text>
                  <TouchableOpacity
                    style={list[64] ? {} : {display: 'none'}}
                    onPress={() => list[65](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps14_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Social networks
                  </Text>
                  <TouchableOpacity
                    style={list[66] ? {} : {display: 'none'}}
                    onPress={() => list[67](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps15_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    User authentication services
                  </Text>
                  <TouchableOpacity
                    style={list[68] ? {} : {display: 'none'}}
                    onPress={() => list[69](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps16_}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text style={{width: '90%', color: '#585858'}}>
                    Website hosting service providers
                  </Text>
                  <TouchableOpacity
                    style={list[70] ? {} : {display: 'none'}}
                    onPress={() => list[71](false)}>
                    <Text style={{color: '#585858'}}> x </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            </View>
            <Text style={styles.text_2}>
              Will the information disclosed to third parties contain any
              personally identifiable details?
            </Text>
            <RadioGroup
              radioButtons={list[72]}
              onPress={data => list[73](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              Will you disclose personal information in the event of a business
              sale or merger?
            </Text>
            <RadioGroup
              radioButtons={list[74]}
              onPress={data => list[75](data)}
              containerStyle={styles.radio_hm}
            />
            <Text style={styles.text_2}>
              Will you disclose personal information to law enforcement agencies
              upon lawful requests?
            </Text>
            <RadioGroup
              radioButtons={list[76]}
              onPress={data => list[77](data)}
              containerStyle={styles.radio_hm}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Policy6;
