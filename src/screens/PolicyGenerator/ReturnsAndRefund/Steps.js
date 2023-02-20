import React, {useMemo, useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy4 from '../Cookies/Policy4';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { email_validation,empty_validation, number_validation,url_validation } from '../validations';
import {useNavigation} from '@react-navigation/native';
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
      /////////////////////////////////1
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
      const [input_6, setInput_6] = useState("");
      const handle_input_6 = (state)=> setInput_6(state);
      const [input_7, setInput_7] = useState('EUR');
      const handle_input_7 = (state)=> setInput_7(state);
      const [radioButtons, setRadioButtons] = useState([{
          id: '1',
          label: 'Days',
          value: 'Days',
          size: 12,
          color: '#489503',
          labelStyle:{color:"#585858"},
          borderColor: '#C4C4C4',   
        },{
        id: '2',
        label: 'Months',
        value: 'Months',
        size: 12,
        color: '#489503',
        borderColor: '#C4C4C4',
        containerStyle:{marginLeft:5}  ,
        labelStyle:{color:"#585858"},
        selected: true,
        }]);
        const handle_radiobuttons = (state)=> setRadioButtons(state);

        const [error_1, setError_1] = useState(false);
        const [empty_validationn, setempty_validation] = useState(true);
        const states= [date,handle_date,input_1,handle_input_1,input_2,handle_input_2,input_3,handle_input_3,input_4,handle_input_4,radioButtons,handle_radiobuttons,input_5,handle_input_5,input_6,handle_input_6,empty_validationn,input_7,handle_input_7]
        const inputs=[input_1,input_2,input_3,input_4,input_5,input_6]

      /////////////////////////////////4
      let x
      if(radioButtons[0].selected ===true){
      x="Days"
      }
      else{
        x="Months"
      }
      const request_object={
        
          agreement_compliance_type: "return-and-refund",
          organization_id: orgId,
          date: generate_date(date.toLocaleDateString()),
          website_or_app_name: input_1,
          company_info: input_2,
          website_url: input_3,
          cancellation_right_of_order: parseFloat(input_4),
          cancellation_right_of_order_unit: x,
          reimbursement_of_cancellation_money: parseFloat(input_5),
          reimbursement_of_cancellation_money_currency: input_7,
          website_contact_email: input_6
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
                  const y= email_validation(input_6)
                  const z= number_validation(input_4)
                  const l= number_validation(input_5)
                  const m= url_validation(input_3)

                  setError_1(!(x & y & z & l &m) )
                  
                }}>
                <View >
                  <Policy1 list={states} />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                finishBtnText="Done"
                previousBtnStyle={previousButton}
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