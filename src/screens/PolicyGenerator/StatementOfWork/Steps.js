import React, {useMemo, useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import { empty_validation,email_validation,number_validation } from '../validations';
const generate_date = (date)=>{
  const temp = date.split("/")
  return "20"+temp[2]+"-"+temp[0]+"-"+temp[1]
 }
const Steps = () => {
  const navigation = useNavigation();
  const [ orgId, setOrgId ] = useState("");
  const getOrgId = async () => {
    const org_id = await AsyncStorage.getItem("org_id");
    setOrgId(org_id)
  }
  useMemo(()=>getOrgId(),[])

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

      ////////////////////////////////////////////////////////1
      const [input1, setInput1] = useState('');
      const handle_input1 = (state)=> setInput1(state);
      const [input2, setInput2] = useState('');
      const handle_input2 = (state)=> setInput2(state);
      const [input3, setInput3] = useState('');
      const handle_input3 = (state)=> setInput3(state);
      const [date, setDate] = useState(new Date());
      const handle_date = (state)=> setDate(state);
      const [input4, setInput4] = useState('');
      const handle_input4 = (state)=> setInput4(state);
      var [isPress1, setIsPress1] = useState(false);
      const handle_isPress1 = (state)=> setIsPress1(state);
      var [isPress2, setIsPress2] = useState(false);
      const handle_isPress2 = (state)=> setIsPress2(state);
      var [isPress3, setIsPress3] = useState(false);
      const handle_isPress3 = (state)=> setIsPress3(state);
      var [isPress4, setIsPress4] = useState(false);
      const handle_isPress4 = (state)=> setIsPress4(state);

      const [input5, setInput5] = useState('');
      const handle_input5 = (state)=> setInput5(state);
      const [input6, setInput6] = useState('');
      const handle_input6 = (state)=> setInput6(state);
      const [input7, setInput7] = useState([]);
      const handle_input7_1 = (state)=> {
        setInput7([...input7,state])
      };
      const handle_input7_22 = (state)=> {
        setInput7(input7.filter((item)=>item!==state))
      };
      const [error_1, setError_1] = useState(false);
      const [empty_validationn, setempty_validation] = useState(true);
      const states= [input1,handle_input1,input2,handle_input2,input3,handle_input3,date,handle_date,input4,handle_input4,isPress1,handle_isPress1,isPress2,handle_isPress2,isPress3,handle_isPress3,isPress4,handle_isPress4,input5,handle_input5,input6,handle_input6,input7,handle_input7_1,handle_input7_22,empty_validationn]
      const inputs= [input1,input2,input3,input4,input5]

      ///////////////////////////////////////////////////////2
      const [input1_2, setInput1_2] = useState('');
      const handle_input1_2 = (state)=> setInput1_2(state);
      const [date_2, setDate_2] = useState(new Date());
      const handle_date_2 = (state)=> setDate_2(state);
      const [date1_2, setDate1_2] = useState(new Date());
      const handle_date1_2 = (state)=> setDate1_2(state);
      const [input2_2, setInput2_2] = useState('');
      const handle_input2_2 = (state)=> setInput2_2(state);

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
      const handle_radioButtons = (state)=> setRadioButtons(state);
      const [input3_2, setInput3_2] = useState('');
      const handle_input3_2 = (state)=> setInput3_2(state);
      const [input4_2, setInput4_2] = useState("USD");
      const handle_input4_2 = (state)=> setInput4_2(state);

      const [input5_2, setInput5_2] = useState('');
      const handle_input5_2 = (state)=> setInput5_2(state);
      const [input6_2, setInput6_2] = useState("USD");
      const handle_input6_2 = (state)=> setInput6_2(state);

      const [input7_2, setInput7_2] = useState('');
      const handle_input7_2 = (state)=> setInput7_2(state);
      const [input8_2, setInput8_2] = useState("USD");
      const handle_input8_2 = (state)=> setInput8_2(state);

      const [input9_2, setInput9_2] = useState('');
      const handle_input9_2 = (state)=> setInput9_2(state);

      const [date2_2, setDate2_2] = useState(new Date());
      const handle_date2_2 = (state)=> setDate2_2(state);
      const [date3_2, setDate3_2] = useState(new Date());
      const handle_date3_2 = (state)=> setDate3_2(state);
      

      const [error_2, setError_2] = useState(false);
      const [empty_validationn_2, setempty_validation_2] = useState(true);
      const states_2= [input1_2,handle_input1_2,date_2,handle_date_2,date1_2,handle_date1_2,input2_2,handle_input2_2,radioButtons,handle_radioButtons,input3_2,handle_input3_2,input4_2,handle_input4_2,input5_2,handle_input5_2,input6_2,handle_input6_2,input7_2,handle_input7_2,input8_2,handle_input8_2,input9_2,handle_input9_2,date2_2,handle_date2_2,date3_2,handle_date3_2,empty_validationn_2]
      const inputs_2= [input1_2,input2_2,input3_2,input5_2,input7_2,input9_2]
      
      ///////////////////////////////////////////////////////3
      const [input1_3, setInput1_3] = useState('');
      const handle_input1_3 = (state)=> setInput1_3(state);
    

      const [error_3, setError_3] = useState(false);
      const [empty_validationn_3, setempty_validation_3] = useState(true);
      const states_3= [input1_3,handle_input1_3,empty_validationn_3]
      const inputs_3= [input1_3,]


      const freelancer_access=[]
      if (isPress1=== true){
        freelancer_access.push("Client’s web hosting account (AWS)")
      }
      if (isPress2=== true){
        freelancer_access.push("Client’s source code repository (GitHub)")
      }
      if (isPress3=== true){
        freelancer_access.push("Client’s project management tool (Jira)")
      }
      if (isPress4=== true){
        freelancer_access.push("Client’s time management took (Everhour)")
      }
      let x
      if(radioButtons[0].selected ===true){
      x="Days"
      }
      else if(radioButtons[1].selected ===true){
        x="Months"
      }
    
      const request_object=
      {
        agreement_compliance_type: "statement-of-work",
        organization_id: orgId,
        client_full_name: input1,
        jurisdiction: input2,
        project_name: input3,
        effective_date: generate_date(date.toLocaleDateString()),
        freelancers_full_name:input4,
        freelancer_access:freelancer_access,
        what_is_the_goal_of_this_project: input5,
        deliverables_expected_in_this_scope_of_work: input7,
        mode_of_communication_between_the_parties: input1_2,
        when_will_the_freelancer_share_his_status_on_deliverables:  generate_date(date_2.toLocaleDateString()),
        when_will_the_progress_meetings_occur:  generate_date(date1_2.toLocaleDateString()),
        what_is_the_minimum_time_required_to_complete_this_project:  parseFloat(input2_2),
        what_is_the_minimum_time_required_to_complete_this_project_unit: x,
        what_is_value_in_respect_to_time_required: parseFloat(input3_2),
        what_is_value_in_respect_to_time_required_currency:input4_2 ,
        what_is_the_billing_rate: parseFloat(input5_2),
        what_is_the_billing_rate_currency: input6_2,
        what_is_the_charges_for_rush_work:  parseFloat(input7_2),
        what_is_the_charges_for_rush_work_currency:input8_2,
        whom_should_the_invoices_be_submitted_to: input9_2,
        whom_should_the_invoices_be_submitted_to_department_name: "nil",
        when_should_the_invoices_be_submitted:  generate_date(date2_2.toLocaleDateString()),
        when_will_the_invoices_be_payable_by_after_receipt:  generate_date(date3_2.toLocaleDateString())
    
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
                  setError_1(!(x) )
                  
                }}>
                <View >
                  <Policy1 list={states} />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                errors={error_2}
                onNext={()=>{
                  setempty_validation_2(empty_validation(inputs_2))
                  const x=(empty_validation(inputs_2))
                  const y= number_validation(input2_2)
                  const z= number_validation(input3_2)
                  const l= number_validation(input5_2)
                  const m= number_validation(input7_2)
                  setError_2(!(x&y&z&l&m) )
                  
                }}>
                <View >
                  <Policy2 list={states_2}/>
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                errors={error_3}
                onNext={()=>{
                  setempty_validation_3(empty_validation(inputs_3))
                  const x=(empty_validation(inputs_3))
                  setError_3(!(x) )
                  
                }}>
                <View >
                  <Policy3  list={states_3}/>
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                finishBtnText="Done"
                previousBtnStyle={previousButton}
                onSubmit={() => {
                  
                  const y = email_validation(input_1_4);
                  const z = !y;
                  if (z) {
                    alert('please enter valid email');
                  } else {
                    navigation.navigate('HomeScreen')
                  }
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