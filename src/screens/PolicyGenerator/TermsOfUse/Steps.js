import React, {useMemo, useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import { empty_validation,email_validation, url_validation } from '../validations';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const generate_date = (date)=>{
  const temp = date.split("/")
  return "20"+temp[2]+"-"+temp[0]+"-"+temp[1]
 }
const Steps = () => {
  const [ orgId, setOrgId ] = useState("");
  const getOrgId = async () => {
    const org_id = await AsyncStorage.getItem("org_id");
    setOrgId(org_id)
  }
  useMemo(()=>getOrgId(),[])

  const navigation = useNavigation();
    const nextButton = {
        backgroundColor: '#489503',
        paddingHorizontal: 5,
        borderRadius: 15,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        elevation: 3,
        alignSelf: 'center',
      };
    
      const previousButton = {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        borderColor: '#489503',
        borderWidth: 2,
        borderRadius: 15,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        alignSelf: 'center',
      };
      ///////////////////////////////////////////////////////////////////////////1
      const [date, setDate] = useState(new Date());
      const handle_date = (state)=> setDate(state);
      const [input_1, setInput_1] = useState("");
      const handle_input_1 = (state)=> setInput_1(state);
      const [input_2, setInput_2] = useState("");
      const handle_input_2 = (state)=> setInput_2(state);
      const [input_3, setInput_3] = useState("");
      const handle_input_3 = (state)=> setInput_3(state);
      const [input_4, setInput_4] = useState("");
      const handle_input_4 = (state)=> setInput_4(state);
      const [input_5, setInput_5] = useState("");
      const handle_input_5 = (state)=> setInput_5(state);
      const [empty_validationn, setempty_validation] = useState(true);
      const states= [date,handle_date,input_1,handle_input_1,input_2,handle_input_2,input_3,handle_input_3,input_4,handle_input_4,empty_validationn,input_5,handle_input_5]
      const [error_1, setError_1] = useState(false);
      const inputs= [input_1,input_2,input_3,input_4]
      ////////////////////////////////////////////////////////////////////////////2
      const [input_1_1, setInput_1_1] = useState('');
      const handle_input_1_1 = (state)=> setInput_1_1(state);
      const [input_2_1, setInput_2_1] = useState('EUR');
      const handle_input_2_1 = (state)=> setInput_2_1(state);
      const [input_3_1, setInput_3_1] = useState('');
      const handle_input_3_1 = (state)=> setInput_3_1(state);
      const [input_4_1, setInput_4_1] = useState('EUR');
      const handle_input_4_1 = (state)=> setInput_4_1(state);
      const [error_2, setError_2] = useState(false);
      const [empty_validationn_1, setempty_validation_1] = useState(true);
      const [valid_number , setValid_number]=useState(true);
      const handle_valid_number = (state)=> setValid_number(state);
      const [valid_number1 , setValid_number1]=useState(true);
      const handle_valid_number1 = (state)=> setValid_number1(state);
      const states_1= [input_1_1,handle_input_1_1,handle_input_2_1,input_3_1,handle_input_3_1,handle_input_4_1,empty_validationn_1,valid_number,handle_valid_number,valid_number1,handle_valid_number1,input_2_1,input_4_1]
      const inputs_1= [input_1_1,input_3_1]
      /////////////////////////////////////////////////////////////////////////////3
      const [input_1_2, setInput_1_2] = useState("");
      const handle_input_1_2 = (state)=> setInput_1_2(state);
      const [error_3, setError_3] = useState(false);
      const [empty_validationn_2, setempty_validation_2] = useState(true);
      const states_2= [input_1_2,handle_input_1_2,empty_validationn_2]
      /////////////////////////////////////////////////////////////////////////////4
    
      const request_object={
        agreement_compliance_type: "website-terms-of-use",
        organization_id: orgId,
        website_or_app_name: input_5,
        terms_last_updated: generate_date(date.toLocaleDateString()),
        full_name_of_the_party: input_1,
        website_url: input_2,
        email_id: input_3,
        email_id_for_acquiring_written_permission: input_4,
        liability_limit_amount: input_1_1,
        liability_limit_amount_currency: input_2_1,
        liability_must_not_exceed_amount: input_3_1,
        liability_must_not_exceed_amount_currency: input_4_1,
        email_id_for_requesting_access_or_correction_of_personal_info: input_1_2
      }
    return (
        <>
          <PolicyHeader title="Generator" />
          <View
            style={{
              flex: 1,
              paddingTop: 45,
              backgroundColor: 'white',
              paddingHorizontal:15,
            }}>
            <ProgressSteps
              style={{width: '100px'}}
              marginBottom={15}
              nextBtnTextStyle={{color: 'white', fontSize: 18}}>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                errors={error_1}
                onNext={()=>{
                  setempty_validation(empty_validation(inputs))
                  const x=(empty_validation(inputs))
                  const y= email_validation(input_3)
                  const z= email_validation(input_4)
                  const l= url_validation(input_2)
                  setError_1(!(x & y & z & l) )
                  
                }}>
                <View >
                  <Policy1 list={states}/>
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                errors={error_2}
                onNext={()=>{
                  setempty_validation_1(empty_validation(inputs_1))
                  const x= empty_validation(inputs_1)
                  setError_2(!(x & valid_number & valid_number1) )
                  
                }}>
                  
                <View >
                  <Policy2 list={states_1} />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                errors={error_3}
                onNext={()=>{
                  setempty_validation_2(empty_validation([input_1_2]))
                  const x= empty_validation([input_1_2])
                  const y= email_validation(input_1_2)
                  setError_3(!(x & y) )
                }}
                >
                <View >
                  <Policy3 list={states_2} />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                finishBtnText="Done"
                previousBtnStyle={previousButton}
                previousBtnDisabled={true}
                onSubmit={()=>{
                    navigation.navigate('HomeScreen');
                }}>
                <View >
                  <Policy4 object={request_object} />
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </>
      );
}

export default Steps