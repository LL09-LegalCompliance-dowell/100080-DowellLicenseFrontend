import {React,useEffect,useState,useMemo} from 'react'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import Header from '../../../components/Header';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from './Policy4';
import { empty_validation,email_validation,url_validation } from '../validations';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
       //////////////////////////////////////////////////////////////////////////1
       const [date, setDate] = useState(new Date());
       const handle_date = (state)=> setDate(state);
       const [name_entity, setName_entity] = useState("");
       const handle_entity = (state)=> setName_entity(state);
       const [input, setinput] = useState("");
       const handle_input = (state)=> setinput(state); 
     
       const [radioButtons, setRadioButtons] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         
         labelStyle:{color:"#585858"},
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true,
       }]);
       const handle_radiobuttons = (state)=> setRadioButtons(state);
     
       const [selected, setSelected] = useState([]);
       const handle_selected = (state)=> { 
         let flag =false
         for (let index = 0; index < selected.length; index++) {
           if (selected[index]===state) {
             flag=true
           }
         }
         if (!flag)
         setSelected([...selected,state])
       };
       const handle_selected_v2 = (state)=> {setSelected(selected.filter((item)=> item !== state))
     
        
     
       };
       const [radioButtons1, setRadioButtons1] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons1 = (state)=> setRadioButtons1(state);
       const [radioButtons2, setRadioButtons2] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons2 = (state)=> setRadioButtons2(state);
     
       const [radioButtons3, setRadioButtons3] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons3 = (state)=> setRadioButtons3(state);
     
       const [radioButtons4, setRadioButtons4] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons4 = (state)=> setRadioButtons4(state);
     
       const [radioButtons5, setRadioButtons5] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons5 = (state)=> setRadioButtons5(state);
     
       const [radioButtons6, setRadioButtons6] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons6 = (state)=> setRadioButtons6(state);
     
       const [selected1, setSelected1] = useState([]);
       const handle_selected1 = (state)=> { 
         let flag =false
         for (let index = 0; index < selected1.length; index++) {
           if (selected1[index]===state) {
             flag=true
           }
         }
         if (!flag)
         setSelected1([...selected1,state])
       };
       const handle_selected1_v2 = (state)=> {setSelected1(selected1.filter((item)=> item !== state))}
     
     
       const [error_1, setError_1] = useState(false);
       const [empty_validationn, setempty_validation] = useState(true);
       const inputs_1=[name_entity,input]
       const states= [date,handle_date,name_entity,handle_entity,radioButtons,handle_radiobuttons,handle_selected,selected,handle_selected_v2,input,handle_input,radioButtons1,handle_radiobuttons1,radioButtons2,handle_radiobuttons2,radioButtons3,handle_radiobuttons3,radioButtons4,handle_radiobuttons4,radioButtons5,handle_radiobuttons5,radioButtons6,handle_radiobuttons6,selected1,handle_selected1,handle_selected1_v2,empty_validationn]
       ////////////////////////////////////////////////////////////2
       const [input_1, setInput_1] = useState("");
       const handle_input_1 = (state)=> setInput_1(state);
       const [input_2, setInput_2] = useState("");
       const handle_input_2 = (state)=> setInput_2(state);
       const [input_3, setInput_3] = useState("");    
       const handle_input_3 = (state)=> setInput_3(state);
       const [radioButtons1_1, setRadioButtons1_1] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons1_1 = (state)=> setRadioButtons1_1(state);
       const [radioButtons2_1, setRadioButtons2_1] = useState([{
         id: '1',
         label: 'Yes',
         value: 'Yes',
         size: 18,
         color: '#489503',
         borderColor: '#C4C4C4',
         labelStyle:{color:"#585858"},
         
       },{
       id: '2',
       label: 'No',
       value: 'No',
       size: 18,
       color: '#489503',
       labelStyle:{color:"#585858"},
       borderColor: '#C4C4C4',
       selected: true
       }]);
       const handle_radiobuttons2_1 = (state)=> setRadioButtons2_1(state);
       var [ isPress1, setIsPress1 ] = useState(false);
       var [ isPress2, setIsPress2 ] = useState(false);
       const handle_isPress1 = (state)=> setIsPress1(state);
       const handle_isPress2 = (state)=> setIsPress2(state);
       const [error_2, setError_2] = useState(false);
       const [empty_validationn_1, setempty_validation_1] = useState(true);
       const states_1=[radioButtons1_1,handle_radiobuttons1_1,radioButtons2_1,handle_radiobuttons2_1,isPress1,handle_isPress1,isPress2,handle_isPress2,input_1,handle_input_1,input_2,handle_input_2,input_3,handle_input_3,empty_validationn_1]
       ///////////////////////////////////////////////////////////3
       const [input_2_1, setInput_2_1] = useState("");
       const handle_input_2_1 = (state)=> setInput_2_1(state);
       const [input_3_1, setInput_3_1] = useState("");
       const handle_input_3_1 = (state)=> setInput_3_1(state);
       const [error_3, setError_3] = useState(false);
       const [empty_validationn_2, setempty_validation_2] = useState(true);
       const inputs=[input_2_1,input_3_1]
       const states_2=[input_2_1,handle_input_2_1,input_3_1,handle_input_3_1,empty_validationn_2]
      
  useEffect(()=>{
    if(isPress1===false){
    setInput_1("")
  }
  if(isPress2===false){
    setInput_2("")
  }
 
},)
useEffect(()=>{
 
if(radioButtons[0].selected ===false){
  setSelected([])
}
},[radioButtons])
useEffect(()=>{
 
  if(radioButtons6[0].selected ===false){
    setSelected1([])
  }
  },[radioButtons6])
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
 

    


    let x= false

    if(radioButtons[0].selected ===true){
      x=true
    }
    else{
      x=false
      
    }

    let y= false

    if(radioButtons1[0].selected ===true){
      y=true
    }
    else{
      y=false
    }

    let z= false

    if(radioButtons2[0].selected ===true){
      z=true
    }
    else{
      z=false
    }

    let l= false

    if(radioButtons3[0].selected ===true){
      l=true
    }
    else{
      l=false
    }
    let m= false

    if(radioButtons4[0].selected ===true){
      m=true
    }
    else{
      m=false
    }
    let n= false

    if(radioButtons5[0].selected ===true){
      n=true
    }
    else{
      n=false
    }

    let o= false

    if(radioButtons6[0].selected ===true){
      o=true
    }
    else{
      o=false
    }

    let p= false

    if(radioButtons1_1[0].selected ===true){
      p=true
    }
    else{
      p=false
    }

    let q= false

    if(radioButtons2_1[0].selected ===true){
      q=true
    }
    else{
      q=false
    }
  const request_object={
    agreement_compliance_type: "cookie-policy",
    organization_id: orgId,
    date_of_execution_of_document: generate_date(date.toLocaleDateString()),
    party_full_name: name_entity,
    will_the_cookie_store_personal_information: x,
    type_of_personal_information_store_by_cookies: selected,
    other_type_of_personal_information_store_by_cookies: input,
    does_your_website_or_app_use_essential_cookies: y,
    does_your_website_or_app_use_any_perfomance_and_functionality_cookies: z,
    does_your_website_or_app_use_marketing_cookies: l,
    does_your_website_or_app_use_analytic_and_customization_cookies: m,
    does_your_website_or_app_use_marketing_social_media_cookies: n,
    does_your_website_or_app_use_third_party_cookies: o,
    personal_information_store_by_third_party_cookies: selected1,
    does_your_website_or_app_show_ads: p,
    website_uses_other_technologies_to_perform_other_functions_achieved_via_cookie: q,
    which_medium_can_website_users_raise_question_regarding_cookies: {
      email: input_1,
      website: input_2
  },
    provide_situations_where_cookies_may_be_collected_without_consent_of_users: input_3,
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
                  setempty_validation(empty_validation(inputs_1))
                  const x=(empty_validation(inputs_1))
                  setError_1(!(x) )
                  
                }}
                >
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
                  let y=true
                  let z=true
                  let l=true
                  if (isPress1==true && !empty_validation([input_1])){
                    y=false
                  }
                  if (isPress2==true && !empty_validation([input_2])){
                    z=false
                  }
                  if ( empty_validation([input_3])==false){
                    l=false
                  }
                  const x=y & z & l
                  setempty_validation_1(x)
                  let o= email_validation(input_1)
                  let m= url_validation(input_2)
                  if (!isPress1) {
                    o=true
                  }
                  if (!isPress2) {
                    m=true
                  }
                  if (isPress1 || isPress2){
                    setError_2(!(x&o&m) )
                  }
                  else{
                    setError_2(!(x) )
                  }
                  
                  
                }}
                >
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