import {React} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {ScrollView, View, Text, TextInput} from 'react-native';
import styles from '../Cookies/style';
const Policy2 = ({list}) => {
  return (
    <>
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
            What will this privacy policy be used for?
          </Text>
          <RadioGroup
            radioButtons={list[0]}
            onPress={data => list[1](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>
            Would you like to create a premium privacy policy with additional
            clauses and provisions?
          </Text>
          <RadioGroup
            radioButtons={list[2]}
            onPress={data => list[3](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>
            Do you operate your mobile app under a company name?
          </Text>
          <RadioGroup
            radioButtons={list[4]}
            onPress={data => {
              list[5](data);
              if (data[0].selected == true) {
                list[25](true);
              } else {
                list[25](false);
                list[7]('');
              }
            }}
            containerStyle={styles.radio_hm}
          />
          <View style={list[24] ? '' : styles.hide}>
            <Text style={styles.text_2}>What is your company name?</Text>
            <TextInput
              style={styles.input_vm}
              value={list[6]}
              onChangeText={value => list[7](value)}
              placeholder="Enter here"
              placeholderTextColor="gray"
            />
          </View>
          <Text style={styles.text_2}>
            Does your company have a short or trade name (also known as a DBA)?
          </Text>
          <RadioGroup
            radioButtons={list[8]}
            onPress={data => {
              list[9](data);
              if (data[0].selected == true) {
                list[27](true);
              } else {
                list[27](false);
                list[11]('');
              }
            }}
            containerStyle={styles.radio_hm}
          />
          <View style={list[26] ? '' : styles.hide}>
            <Text style={styles.text_2}>
              What is the short or trade name of your company?
            </Text>
            <TextInput
              style={styles.input_vm}
              value={list[10]}
              onChangeText={value => list[11](value)}
              placeholder="Enter here"
              placeholderTextColor="gray"
            />
          </View>
          <Text style={styles.text_2}>
            Can users sign up and create an account in your mobile app?
          </Text>
          <RadioGroup
            radioButtons={list[12]}
            onPress={data => list[13](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>
            Can users sign up using social media or other third-party services
            (Facebook, Google, Twitter, etc)?
          </Text>
          <RadioGroup
            radioButtons={list[14]}
            onPress={data => list[15](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>
            Can users view and change their personal information?
          </Text>
          <RadioGroup
            radioButtons={list[16]}
            onPress={data => list[17](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>
            Can users delete their accounts and personal information in your
            mobile app?
          </Text>
          <RadioGroup
            radioButtons={list[18]}
            onPress={data => {
              list[19](data);
              if (data[0].selected == true) {
                list[29](true);
              } else {
                list[29](false);
                list[21]([
                  {
                    id: '1',
                    label:
                      'They can log in to their account settings page to delete it.',
                    value:
                      'They can log in to their account settings page to delete it.',
                    size: 18,
                    color: '#489503',
                    borderColor: '#C4C4C4',
                    labelStyle: {color: '#585858'},
                    selected: false,
                  },
                  {
                    id: '2',
                    label: 'They can contact us to submit a deletion request.',
                    value: 'They can contact us to submit a deletion request.',
                    size: 18,
                    color: '#489503',
                    borderColor: '#C4C4C4',
                    labelStyle: {color: '#585858'},
                    selected: false,
                  },
                ]);
              }
            }}
            containerStyle={styles.radio_hm}
          />
          <View style={list[28] ? '' : styles.hide}>
            <Text style={styles.text_2}>
              How can users delete their accounts or personal information?
            </Text>
            <RadioGroup
              radioButtons={list[20]}
              onPress={data => list[21](data)}
              containerStyle={styles.radio_hm}
            />
          </View>
          <Text style={styles.text_2}>
            Can users publish anything in your mobile app (articles, comments,
            images, videos, etc)?
          </Text>
          <RadioGroup
            radioButtons={list[22]}
            onPress={data => list[23](data)}
            containerStyle={styles.radio_hm}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Policy2;
