import React, {useMemo, useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import PolicyHeader from '../../../components/PolicyHeader';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import { empty_validation, number_validation,email_validation } from '../validations';
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
  const [input_7, setInput_7] = useState("");
  const handle_input_7 = (state)=> setInput_7(state);
  const [input_8, setInput_8] = useState("");
  const handle_input_8 = (state)=> setInput_8(state);
  const [input_9, setInput_9] = useState("");
  const handle_input_9 = (state)=> setInput_9(state);
  const [input_10, setInput_10] = useState("");
  const handle_input_10 = (state)=> setInput_10(state);
  const [input_11, setInput_11] = useState("");
  const handle_input_11 = (state)=> setInput_11(state);
  const [input_12, setInput_12] = useState("");
  const handle_input_12 = (state)=> setInput_12(state);
  const [input_13, setInput_13] = useState("");
  const handle_input_13 = (state)=> setInput_13(state);
  const [input_14, setInput_14] = useState("");
  const handle_input_14 = (state)=> setInput_14(state);
  const [input_15, setInput_15] = useState("");
  const handle_input_15 = (state)=> setInput_15(state);
  const [input_16, setInput_16] = useState("");
  const handle_input_16 = (state)=> setInput_16(state);
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
      const [empty_validationn, setempty_validation] = useState(true);
      const states= [input_1,handle_input_1,input_2,handle_input_2,input_3,handle_input_3,input_4,handle_input_4,input_5,handle_input_5,input_6,handle_input_6,input_7,handle_input_7,input_8,handle_input_8,input_9,handle_input_9,input_10,handle_input_10,input_11,handle_input_11,input_12,handle_input_12,input_13,handle_input_13,input_14,handle_input_14,input_15,handle_input_15,input_16,handle_input_16,empty_validationn]
      const [error_1, setError_1] = useState(false);
      const inputs= [input_1,input_2,input_3,input_4,input_5,input_6,input_7,input_8,input_9,input_10,input_11,input_12,input_13,input_14,input_15,input_16]
      ////////////////////////////////////////////////////////2
      const [input_1_1, setInput_1_1] = useState("");
      const handle_input_1_1 = (state)=> setInput_1_1(state);
      const [input_2_1, setInput_2_1] = useState("");
      const handle_input_2_1 = (state)=> setInput_2_1(state);
      const [input_3_1, setInput_3_1] = useState("1");
      const handle_input_3_1 = (state)=> setInput_3_1(state);
      const [input_4_1, setInput_4_1] = useState("");
      const handle_input_4_1 = (state)=> setInput_4_1(state);
      const [prev_input_3, setprev_Input_3] = useState(1);
      const handle_prev_input_3 = (state)=> setprev_Input_3(state);
      const [witness, setWitness] =useState ([{id:0 , name:"" , address_1:"" , address_2:"" , address_3:""}])
      const handle_witness = (state)=> setWitness(state);
      const [date, setDate] = useState(new Date());
      const handle_date = (state)=> setDate(state);
      const [radioButtons, setRadioButtons] = useState([{
        id: '1',
        label: 'Days',
        value: 'Days',
        size: 12,
        color: '#489503',
        borderColor: '#C4C4C4',   
        labelStyle:{color:"#585858"},
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
      },{
        id: '3',
        label: 'Years',
        value: 'Years',
        size: 12,
        color: '#489503',
        borderColor: '#C4C4C4',
        containerStyle:{marginLeft:5},
        labelStyle:{color:"#585858"},  
        }]);
        const handle_radioButtons = (state)=> setRadioButtons(state);

      const [empty_validationn_1, setempty_validation_1] = useState(true);
      const states_1= [input_1_1,handle_input_1_1,input_2_1,handle_input_2_1,input_3_1,handle_input_3_1,prev_input_3,handle_prev_input_3,witness,handle_witness,date,handle_date,radioButtons,handle_radioButtons,empty_validationn_1,input_4_1,handle_input_4_1]
      const [error_2, setError_2] = useState(false);
      const inputs_1= [input_1_1,input_2_1,input_3_1]

      ////////////////////////////////////////////////////////3
      const [radioButtons_2, setRadioButtons_2] = useState([{
        id: '1',
        label: 'Yes',
        value: 'Yes',
        size: 18,
        color: '#489503',
        borderColor: '#C4C4C4',
        labelStyle:{color:"#585858"},
        selected: true,   
      },{
      id: '2',
      label: 'No',
      value: 'No',
      size: 18,
      color: '#489503',
      labelStyle:{color:"#585858"},
      borderColor: '#C4C4C4',
      
      }]);
      const handle_radioButtons_2 = (state)=> setRadioButtons_2(state);
      const [date_1, setDate_1] = useState(new Date());
      const handle_date_1 = (state)=> setDate_1(state);

      const [radioButtons1, setRadioButtons1] = useState([{
        id: '1',
        label: 'Yes, Exclusive',
        value: 'Yes, Exclusive',
        size: 18,
        color: '#489503',
        labelStyle:{color:"#585858"},
        borderColor: '#C4C4C4',
           
      },{
      id: '2',
      label: 'No',
      value: 'No',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle:{color:"#585858"},
      selected: true,
      
      }]);
      const handle_radioButtons1 = (state)=> setRadioButtons1(state);
      const [input_1_2, setInput_1_2] = useState("");
      const handle_input_1_2 = (state)=> setInput_1_2(state);
      const [radioButtons3, setRadioButtons3] = useState([{
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
      },{
        id: '3',
        label: 'Years',
        value: 'Years',
        size: 12,
        color: '#489503',
        borderColor: '#C4C4C4',
        labelStyle:{color:"#585858"},
        containerStyle:{marginLeft:5}  
        }]);
      const handle_radioButtons3 = (state)=> setRadioButtons3(state);
      const [radioButtons2, setRadioButtons2] = useState([{
        id: '1',
        label: 'Notice',
        value: 'Notice',
        size: 18,
        color: '#489503',
        borderColor: '#C4C4C4',
        labelStyle:{color:"#585858"},
        selected: true,   
      },{
      id: '2',
      label: 'Mutual agreement',
      value: 'Mutual agreement',
      size: 18,
      color: '#489503',
      labelStyle:{color:"#585858"},
      borderColor: '#C4C4C4',
      },{
        id: '3',
        label: 'Other',
        value: 'Other',
        size: 18,
        color: '#489503',
        labelStyle:{color:"#585858"},
        borderColor: '#C4C4C4',
        
        }]);
        const handle_radioButtons2 = (state)=> setRadioButtons2(state);
        const [input_2_2, setInput_2_2] = useState("");
        const handle_input_2_2 = (state)=> setInput_2_2(state);
        const [flag, setFlag] = useState(false);
        const handle_flag = (state)=> setFlag(state);
        const [flag1, setFlag1] = useState(false);
        const handle_flag1 = (state)=> setFlag1(state);
      const [empty_validationn_2, setempty_validation_2] = useState(true);
      const states_2= [radioButtons_2,handle_radioButtons_2,date_1,handle_date_1,radioButtons1,handle_radioButtons1,input_1_2,handle_input_1_2,radioButtons3,handle_radioButtons3,radioButtons2,handle_radioButtons2,input_2_2,handle_input_2_2,empty_validationn_2,flag,handle_flag,flag1,handle_flag1]
      const [error_3, setError_3] = useState(false);
      

      ////////////////////////////////////////////////////////4
      let x
      if(radioButtons[0].selected ===true){
      x="Days"
      }
      else if(radioButtons[1].selected ===true){
        x="Months"
      }
      else{
        x="Years"
      }

      let y 
      if (radioButtons_2[0].selected ===true){
        y=true
      }else{
        y= false
      }

      let z
      if (radioButtons1[0].selected ===true){
        z=true
      }else{
        z= false
      }

      let l
      if(radioButtons3[0].selected ===true){
      l="Days"
      }
      else if(radioButtons3[1].selected ===true){
        l="Months"
      }
      else{
        l="Years"
      }

      let m
      if(radioButtons2[0].selected ===true){
      m="Notice"
      }
      else if(radioButtons2[1].selected ===true){
        m="Mutual agreement"
      }
      else{
        m="Other"
      }
      let n = 0
      if (input_1_2 !==""){
        n=input_1_2
      }
      const witness_2 = witness.map((item)=>{
        return {
          full_name : item.name ,
          address_line_1: item.address_1,
          address_line_2: item.address_2,
          address_line_3: item.address_3
        }
      })
      
      const request_object={
        agreement_compliance_type: "nda",
        website_or_app_name: input_4_1,
        organization_id: orgId,
        party_1_full_name: input_1,
        party_1_address_line_1: input_2,
        party_1_address_line_2: input_3,
        party_1_address_line_3: input_4,
        party_1_country: input_8,
        party_1_city: input_6,
        party_1_state: input_7,
        party_1_zipcode: input_5,
        party_2_full_name: input_9,
        party_2_address_line_1: input_10,
        party_2_address_line_2: input_11,
        party_2_address_line_3: input_12,
        party_2_country: input_16,
        party_2_city:    input_14,
        party_2_state: input_15,
        party_2_zipcode: input_13,
        what_shall_be_the_of_term_this_agrement: parseFloat(input_1_1),
        what_shall_be_the_of_term_this_agrement_unit: x,
        what_shall_be_the_governing_this_law_this_agrement: input_2_1,
        date_of_execution_of_document: generate_date(date.toLocaleDateString()),
        number_of_witness: parseFloat(input_3_1),
        witnesses: witness_2,
        will_the_obligations_of_confidentiality_subsist_after_expiry: y,
        what_will_be_the_date_for_termination_of_this_nda: generate_date(date_1.toLocaleDateString()),
        will_the_party_be_allow_to_enter_into_similar_arragements_with_other_party: z,
        the_period_a_party_is_entitle_to_enter_into_similar_arragement_with_other_party:parseFloat(n),
        the_period_a_party_is_entitle_to_enter_into_similar_arragement_with_other_party_unit:l,
        how_will_the_agreement_be_terminated: m,
        other_medium_agreement_can_be_terminated: input_2_2
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
                  const x=(empty_validation(inputs_1))
                  const y= number_validation(input_1_1)
                  const z= number_validation(input_3_1)

                  setError_2(!(x & y &z ) )
                  
                }}>
                <View >
                  <Policy2 list={states_1 } />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                errors={error_3}
                onNext={()=>{
                  let x= true
                  if (radioButtons1[0].selected=== true && empty_validation([input_1_2])==false){
                    x=false
                  }


                  if( (radioButtons1[0].selected=== true && number_validation(input_1_2)==false) )
                  {
                    x=false
                  }

                  let y= true
                  if (radioButtons2[2].selected=== true && empty_validation([input_2_2])==false){
                    y=false
                  }

                  if ((radioButtons1[0].selected=== true && empty_validation([input_1_2])==false) ||  (radioButtons2[2].selected=== true && empty_validation([input_2_2])==false) ){
                    setempty_validation_2(false)
                  }
                  else{
                    setempty_validation_2(true)
                  }
                  console.log(x,y)

                  setError_3(!(x & y  ) )
                  
                }}>
                <View >
                  <Policy3 list={states_2 }/>
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