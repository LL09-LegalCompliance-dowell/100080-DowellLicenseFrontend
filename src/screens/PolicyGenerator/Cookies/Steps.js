import {React,useState} from 'react'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import Header from '../../../components/Header';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from './Policy4';
import { empty_validation,email_validation } from '../validations';
const generate_date = (date)=>{
  const temp = date.split("/")
  return "20"+temp[2]+"-"+temp[0]+"-"+temp[1]
 }
const Steps = () => {
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
      //////////////////////////////////////////////////////////////////////////1
  const [date, setDate] = useState(new Date());
  const handle_date = (state)=> setDate(state);
  const [name_entity, setName_entity] = useState("");
  const handle_entity = (state)=> setName_entity(state);
  var [ isPress1, setIsPress1 ] = useState(false);
  const handle_isPress1 = (state)=> setIsPress1(state);
  var [ isPress2, setIsPress2 ] = useState(false);
  const handle_isPress2 = (state)=> setIsPress2(state);
  var [ isPress3, setIsPress3 ] = useState(false);
  const handle_isPress3 = (state)=> setIsPress3(state);
  var [ isPress4, setIsPress4 ] = useState(false);
  const handle_isPress4 = (state)=> setIsPress4(state);
  var [ isPress5, setIsPress5 ] = useState(false);
  const handle_isPress5 = (state)=> setIsPress5(state);
  const [radioButtons, setRadioButtons] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    selected: true,
    labelStyle:{color:"#585858"},
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  labelStyle:{color:"#585858"},
  borderColor: '#C4C4C4',
  }]);
  const [radioButtons1, setRadioButtons1] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
    selected: true
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  labelStyle:{color:"#585858"},
  borderColor: '#C4C4C4',
  }]);
  const [radioButtons2, setRadioButtons2] = useState([{
    id: '1',
    label: 'Yes',
    value: 'Yes',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
    selected: true
  },{
  id: '2',
  label: 'No',
  value: 'No',
  size: 18,
  color: '#489503',
  labelStyle:{color:"#585858"},
  borderColor: '#C4C4C4',
  }]);
  const handle_radiobuttons1 = (state)=> setRadioButtons1(state);
  const handle_radiobuttons = (state)=> setRadioButtons(state);
  const handle_radiobuttons2 = (state)=> setRadioButtons2(state);
  const [error_1, setError_1] = useState(false);
  const [empty_validationn, setempty_validation] = useState(true);
  const states= [date,handle_date,name_entity,handle_entity,isPress1,handle_isPress1,isPress2,handle_isPress2,isPress3,handle_isPress3,isPress4,handle_isPress4,isPress5,handle_isPress5,radioButtons,handle_radiobuttons,radioButtons1,handle_radiobuttons1,radioButtons2,handle_radiobuttons2,empty_validationn]
  ////////////////////////////////////////////////////////////2
  const [input_1, setInput_1] = useState("");
  const handle_input_1 = (state)=> setInput_1(state);
  const [input_2, setInput_2] = useState("");
  const handle_input_2 = (state)=> setInput_2(state);
  const [input_3, setInput_3] = useState("");    
  const handle_input_3 = (state)=> setInput_3(state);
  const [error_2, setError_2] = useState(false);
  const [empty_validationn_1, setempty_validation_1] = useState(true);
  const states_1=[input_1,handle_input_1,input_2,handle_input_2,input_3,handle_input_3,empty_validationn_1]
  ///////////////////////////////////////////////////////////3
  const [input_1_1, setInput_1_1] = useState("");
  const handle_input_1_1 = (state)=> setInput_1_1(state);
  const [input_2_1, setInput_2_1] = useState("");
  const handle_input_2_1 = (state)=> setInput_2_1(state);
  const [input_3_1, setInput_3_1] = useState("");
  const handle_input_3_1 = (state)=> setInput_3_1(state);
  const [error_3, setError_3] = useState(false);
  const [empty_validationn_2, setempty_validation_2] = useState(true);
  const inputs=[input_1_1,input_2_1,input_3_1]
  const states_2=[input_1_1,handle_input_1_1,input_2_1,handle_input_2_1,input_3_1,handle_input_3_1,empty_validationn_2]
  ///////////////////////////////////////////////////////////4
    const [input_1_4, setInput_1_4] = useState("");
    const handle_input_1_4 = (state)=> setInput_1_4(state);
    const states_4= [input_1_4,handle_input_1_4]

    let x
    if(radioButtons[0].selected ===true){
      x=true
    }
    else{
      x=false
    }
    
    let y
    if(radioButtons1[0].selected ===true){
      y=true
    }
    else{
      y=false
    }

    let z
    if(radioButtons2[0].selected ===true){
      z=true
    }
    else{
      z=false
    }
    let types_personal_info=[]
    if (isPress3 == true) {
      types_personal_info.push("Address")
    }
    if (isPress4 == true) {
      types_personal_info.push("Contact Details")
    }
    if (isPress5 == true) {
      types_personal_info.push("IP Addresses")
    }

    const request_object={
        agreement_compliance_type: "cookie-policy",
        date_of_execution_of_document: generate_date(date.toLocaleDateString()),
        party_full_name: name_entity,
        website_has_a_data_protection_officer: x,
        which_medium_can_website_users_raise_question_regarding_cookies: "P.O.BOX 45, India",
        website_uses_other_technologies_to_perform_other_functions_achieved_via_cookie: y,
        will_the_cookie_store_personal_information: z,
        type_of_personal_information_store_by_cookie:types_personal_info,
        other_type_of_personal_information_store_by_cookie: input_1,
        website_privacy_document_hold: [
            {
                "name": "Privacy Policy",
                "location": "sample.com/privacy"
            },
            {
                "name": "Terms",
                "location": "sample.com/terms-and-condition"
            }
        ],
        provide_situations_where_cookies_may_be_collected_without_consent_of_users: input_3,
        detail_about_information_third_party_cookies_will_be_collecting_users: input_1_1,
        name_of_third_party_cookies: input_2_1,
        owner_of_third_party_cookies: input_3_1

    }
    return (
        <>
          <Header title="Generator" />
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
                  setempty_validation(empty_validation([name_entity]))
                  const x=(empty_validation([name_entity]))
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
                  setempty_validation_1(empty_validation([input_3]))
                  const x=(empty_validation([input_3]))
                  setError_2(!(x) )
                  
                }}>
                <View >
                  <Policy2 list={states_1}/>
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                errors={error_3}
                onNext={()=>{
                  setempty_validation_2(empty_validation(inputs))
                  const x=(empty_validation(inputs))
                  setError_3(!(x) )
                  
                }}>
                <View >
                  <Policy3 list={states_2}/>
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                finishBtnText="Done"
                previousBtnStyle={previousButton}
                onSubmit={()=>{
                  const y= email_validation(input_1_4)
                  const z= ( !y)
                  if (z){
                    alert("please enter valid email")
                  }
                  else{
                    //api
                  }
                  
                }}>
                <View >
                  <Policy4 list={states_4} object={request_object} />
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </>
      );
}

export default Steps