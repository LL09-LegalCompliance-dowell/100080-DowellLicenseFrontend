import {React,useState} from 'react'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import Header from '../../../components/Header';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import Policy5 from './Policy5';
import Policy6 from './Policy6';
import Policy7 from './Policy7';
import { empty_validation,email_validation } from '../validations';
import {useNavigation} from '@react-navigation/native';

const generate_date = (date)=>{
 const temp = date.split("/")
 return "20"+temp[2]+"-"+temp[0]+"-"+temp[1]
}
const Steps = () => {
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
      //////////////////////////////////////1
      const [input_1, setInput_1] = useState('');
      const handle_input_1 = (state)=> setInput_1(state);
      const [input_2, setInput_2] = useState('');
      const handle_input_2 = (state)=> setInput_2(state);
      const [error_1, setError_1] = useState(false);
      const [empty_validationn, setempty_validation] = useState(true);
      const states= [input_1,handle_input_1,input_2,handle_input_2,empty_validationn]
      const inputs= [input_1,input_2]
      //////////////////////////////////////2
      const [radioButtons, setRadioButtons] = useState([{
        id: '1',
        label: 'Mobile App',
        value: 'Mobile App',
        size: 18,
        color: '#489503',
        borderColor: '#C4C4C4',
        labelStyle:{color:"#585858"},
        selected: true
      },{
      id: '2',
      label: 'Website',
      value: 'Website',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle:{color:"#585858"},
      selected: false
    },{
      id: '3',
      label: 'Both',
      value: 'Both',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle:{color:"#585858"},
      selected: false
    }]);
    const handle_radiobuttons = (state)=> setRadioButtons(state);
    const [radioButtons_1, setRadioButtons_1] = useState([{
      id: '1',
      label: 'Yes, I would like to create a premium privacy policy.',
      value: 'Yes, I would like to create a premium privacy policy.',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle:{color:"#585858"},
      selected: true
    },{
    id: '2',
    label: 'No, basic policy is fine.',
    value: 'No, basic policy is fine.',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
    selected: false
  }]);
  const handle_radiobuttons_1 = (state)=> setRadioButtons_1(state);
  const [radioButtons_2, setRadioButtons_2] = useState([{
    id: '1',
    label: 'Yes, it’s operated under a company name.',
    value: 'Yes, it’s operated under a company name.',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
   
  },{
  id: '2',
  label: 'No, it’s operated by an individual.',
  value: 'No, it’s operated by an individual.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected:true
 
}]);
const handle_radiobuttons_2 = (state)=> setRadioButtons_2(state);
const [input_1_2, setInput_1_2] = useState('');
const handle_input_1_2 = (state)=> setInput_1_2(state);
const [radioButtons_3, setRadioButtons_3] = useState([{
  id: '1',
  label: 'Yes, the company has a different short or trade name.',
  value: 'Yes, the company has a different short or trade name.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
 
},{
id: '2',
label: 'No, the company doesn’t have a trade name.',
value: 'No, the company doesn’t have a trade name.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected:true

}]);
const handle_radiobuttons_3 = (state)=> setRadioButtons_3(state);
const [input_2_2, setInput_2_2] = useState('');
const handle_input_2_2 = (state)=> setInput_2_2(state);
const [radioButtons_4, setRadioButtons_4] = useState([{
  id: '1',
  label: 'Yes, users can sign up for an account.',
  value: 'Yes, users can sign up for an account.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
 
},{
id: '2',
label: 'No, users can’t sign up or create an account.',
value: 'No, users can’t sign up or create an account.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected:true

}]);
const handle_radiobuttons_4 = (state)=> setRadioButtons_4(state);
const [radioButtons_5, setRadioButtons_5] = useState([{
  id: '1',
  label: 'Yes, users can sign up using third-party services.',
  value: 'Yes, users can sign up using third-party services.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
 
},{
id: '2',
label: 'No, users can’t sign up using third-party services.',
value: 'No, users can’t sign up using third-party services.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected:true

}]);
const handle_radiobuttons_5 = (state)=> setRadioButtons_5(state);
const [radioButtons_6, setRadioButtons_6] = useState([{
  id: '1',
  label: 'Yes, users have full access to their personal information.',
  value: 'Yes, users have full access to their personal information.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
 
},{
id: '2',
label: 'No, users don’t have access to their information.',
value: 'No, users don’t have access to their information.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected:true

}]);
const handle_radiobuttons_6 = (state)=> setRadioButtons_6(state);
const [radioButtons_7, setRadioButtons_7] = useState([{
  id: '1',
  label: 'Yes, users can delete their accounts and personal information at any time.',
  value: 'Yes, users can delete their accounts and personal information at any time.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
 
},{
id: '2',
label: 'No, user accounts and personal information cannot be deleted.',
value: 'No, user accounts and personal information cannot be deleted.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected:true

}]);
const handle_radiobuttons_7 = (state)=> setRadioButtons_7(state);
const [radioButtons_8, setRadioButtons_8] = useState([{
  id: '1',
  label: 'They can log in to their account settings page to delete it.',
  value: 'They can log in to their account settings page to delete it.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected:false
 
},{
id: '2',
label: 'They can contact us to submit a deletion request.',
value: 'They can contact us to submit a deletion request.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected:false

}]);
const handle_radiobuttons_8 = (state)=> setRadioButtons_8(state);
const [radioButtons_9, setRadioButtons_9] = useState([{
  id: '1',
  label: 'Yes, users can submit and publish their own content.',
  value: 'Yes, users can submit and publish their own content.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
 
},{
id: '2',
label: 'No, users can’t publish anything.',
value: 'No, users can’t publish anything.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected:true

}]);
const handle_radiobuttons_9 = (state)=> setRadioButtons_9(state);
const [flag, setflag] = useState(false);
const handle_flag = (state)=> setflag(state);
const [flag_1, setflag_1] = useState(false);
const handle_flag_1 = (state)=> setflag_1(state);
const [flag_2, setflag_2] = useState(false);
const handle_flag_2 = (state)=> setflag_2(state);

const [error_2, setError_2] = useState(false);
const [empty_validationn_2, setempty_validation_2] = useState(true);
const states_2= [radioButtons,handle_radiobuttons,radioButtons_1,handle_radiobuttons_1,radioButtons_2,handle_radiobuttons_2,input_1_2,handle_input_1_2,radioButtons_3,handle_radiobuttons_3,input_2_2,handle_input_2_2,radioButtons_4,handle_radiobuttons_4,radioButtons_5,handle_radiobuttons_5,radioButtons_6,handle_radiobuttons_6,radioButtons_7,handle_radiobuttons_7,radioButtons_8,handle_radiobuttons_8,radioButtons_9,handle_radiobuttons_9,flag,handle_flag,flag_1,handle_flag_1,flag_2,handle_flag_2,empty_validationn_2]
 ///////////////////////////////////////////////////////////////////3
 const [radioButtons_1_3, setRadioButtons_1_3] = useState([{
  id: '1',
  label: 'Yes, content can be shared on social networks.',
  value: 'Yes, content can be shared on social networks.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: true
},{
id: '2',
label: 'No, users can’t share content on social networks.',
value: 'No, users can’t share content on social networks.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_1_3 = (state)=> setRadioButtons_1_3(state);
const [radioButtons_2_3, setRadioButtons_2_3] = useState([{
  id: '1',
  label: 'Yes, users can interact with each other (via comments, messages, etc).',
  value: 'Yes, users can interact with each other (via comments, messages, etc).',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: true
},{
id: '2',
label: 'No, users cannot interact with each other.',
value: 'No, users cannot interact with each other.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_2_3 = (state)=> setRadioButtons_2_3(state);

const [radioButtons_3_3, setRadioButtons_3_3] = useState([{
  id: '1',
  label: 'Yes, personally identifiable information may be displayed.',
  value: 'Yes, personally identifiable information may be displayed.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: true
},{
id: '2',
label: 'No, users remain completely anonymous.',
value: 'No, users remain completely anonymous.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_3_3 = (state)=> setRadioButtons_3_3(state);
const [radioButtons_4_3, setRadioButtons_4_3] = useState([{
  id: '1',
  label: 'Yes, our target audience or users may include residents of California (required for the CCPA compliance).',
  value: 'Yes, our target audience or users may include residents of California (required for the CCPA compliance).',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: true
},{
id: '2',
label: 'No, we don’t target anyone in California.',
value: 'No, we don’t target anyone in California.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_4_3 = (state)=> setRadioButtons_4_3(state);
const [radioButtons_5_3, setRadioButtons_5_3] = useState([{
  id: '1',
  label: 'Yes, our target audience or users may include residents in the European Union (required for the GDPR compliance).',
  value: 'Yes, our target audience or users may include residents in the European Union (required for the GDPR compliance).',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: true
},{
id: '2',
label: 'No, we don’t target anyone in the European Union.',
value: 'No, we don’t target anyone in the European Union.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_5_3 = (state)=> setRadioButtons_5_3(state);
const [radioButtons_6_3, setRadioButtons_6_3] = useState([{
  id: '1',
  label: 'Yes, our target audience or users may include those under the age of 18.',
  value: 'Yes, our target audience or users may include those under the age of 18.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, we don’t target anyone under the age of 18.',
value: 'No, we don’t target anyone under the age of 18.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: true
}]);
const handle_radiobuttons_6_3 = (state)=> setRadioButtons_6_3(state);
const [flag_1_3, setflag_1_3] = useState(false);
const handle_flag_1_3 = (state)=> setflag_1_3(state);
const [radioButtons_7_3, setRadioButtons_7_3] = useState([{
  id: '1',
  label: 'Yes, our target audience or users may include children under the age of 13.',
  value: 'Yes, our target audience or users may include children under the age of 13.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, we don’t target anyone under the age of 13.',
value: 'No, we don’t target anyone under the age of 13.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_7_3 = (state)=> setRadioButtons_7_3(state);
const [radioButtons_8_3, setRadioButtons_8_3] = useState([{
  id: '1',
  label: 'Yes, we may collect certain information from children.',
  value: 'Yes, we may collect certain information from children.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, we don’t collect anything from children.',
value: 'No, we don’t collect anything from children.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_8_3 = (state)=> setRadioButtons_8_3(state);
const [radioButtons_9_3, setRadioButtons_9_3] = useState([{
  id: '1',
  label: 'Yes, submitted information will be publicly available to anyone.',
  value: 'Yes, submitted information will be publicly available to anyone.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, submitted information will not be publicly available.',
value: 'No, submitted information will not be publicly available.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_9_3 = (state)=> setRadioButtons_9_3(state);
const [radioButtons_10_3, setRadioButtons_10_3] = useState([{
  id: '1',
  label: 'Yes, submitted information can be hidden from public access.',
  value: 'Yes, submitted information can be hidden from public access.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, there’s no such option available.',
value: 'No, there’s no such option available.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: false
}]);
const handle_radiobuttons_10_3 = (state)=> setRadioButtons_10_3(state);
var [ isPress1, setIsPress1 ] = useState(false);
var [ isPress2, setIsPress2 ] = useState(false);
var [ isPress3, setIsPress3 ] = useState(false);

const handle_isPress1 = (state)=> setIsPress1(state);
const handle_isPress2 = (state)=> setIsPress2(state);
const handle_isPress3 = (state)=> setIsPress3(state);

const [radioButtons_11_3, setRadioButtons_11_3] = useState([{
  id: '1',
  label: 'Yes, we sell products or services or plan to sell in the future.',
  value: 'Yes, we sell products or services or plan to sell in the future.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, we do not and will not sell anything.',
value: 'No, we do not and will not sell anything.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: true
}]);
const handle_radiobuttons_11_3 = (state)=> setRadioButtons_11_3(state);
const [radioButtons_12_3, setRadioButtons_12_3] = useState([{
  id: '1',
  label: 'Yes, we offer products or services provided by third-party companies.',
  value: 'Yes, we offer products or services provided by third-party companies.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, all products and services are provided by us.',
value: 'No, all products and services are provided by us.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: true
}]);
const handle_radiobuttons_12_3 = (state)=> setRadioButtons_12_3(state);
const [radioButtons_13_3, setRadioButtons_13_3] = useState([{
  id: '1',
  label: 'Yes, we’ve taken all the necessary measures to keep sensitive payment information secure.',
  value: 'Yes, we’ve taken all the necessary measures to keep sensitive payment information secure.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, some of the sensitive payment information may not be processed or stored securely (not recommended).',
value: 'No, some of the sensitive payment information may not be processed or stored securely (not recommended).',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: true
}]);
const handle_radiobuttons_13_3 = (state)=> setRadioButtons_13_3(state);
const [radioButtons_14_3, setRadioButtons_14_3] = useState([{
  id: '1',
  label: 'Yes, we may store payment information for future purchases or recurring billing (such as credit card numbers or tokens).',
  value: 'Yes, we may store payment information for future purchases or recurring billing (such as credit card numbers or tokens).',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, we don’t store any sensitive payment information.',
value: 'No, we don’t store any sensitive payment information.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: true
}]);
const handle_radiobuttons_14_3 = (state)=> setRadioButtons_14_3(state);
const [radioButtons_15_3, setRadioButtons_15_3] = useState([{
  id: '1',
  label: 'Yes, we may perform credit checks.',
  value: 'Yes, we may perform credit checks.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, we don’t perform credit checks.',
value: 'No, we don’t perform credit checks.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: true
}]);
const handle_radiobuttons_15_3 = (state)=> setRadioButtons_15_3(state);
const [radioButtons_16_3, setRadioButtons_16_3] = useState([{
  id: '1',
  label: 'Yes, we use third-party analytics tools.',
  value: 'Yes, we use third-party analytics tools.',
  size: 18,
  color: '#489503',
  borderColor: '#C4C4C4',
  labelStyle:{color:"#585858"},
  selected: false
},{
id: '2',
label: 'No, we don’t use any third-party analytics tools.',
value: 'No, we don’t use any third-party analytics tools.',
size: 18,
color: '#489503',
borderColor: '#C4C4C4',
labelStyle:{color:"#585858"},
selected: true
}]);
const handle_radiobuttons_16_3 = (state)=> setRadioButtons_16_3(state);

const states_3= [radioButtons_1_3,handle_radiobuttons_1_3,radioButtons_2_3,handle_radiobuttons_2_3,radioButtons_3_3,handle_radiobuttons_3_3,radioButtons_4_3,handle_radiobuttons_4_3,radioButtons_5_3,handle_radiobuttons_5_3,radioButtons_6_3,handle_radiobuttons_6_3,flag_1_3,handle_flag_1_3,radioButtons_7_3,handle_radiobuttons_7_3,radioButtons_8_3,handle_radiobuttons_8_3,radioButtons_9_3,handle_radiobuttons_9_3,radioButtons_10_3,handle_radiobuttons_10_3,isPress1,handle_isPress1,isPress2,handle_isPress2,isPress3,handle_isPress3,radioButtons_11_3,handle_radiobuttons_11_3,radioButtons_12_3,handle_radiobuttons_12_3,radioButtons_13_3,handle_radiobuttons_13_3,radioButtons_14_3,handle_radiobuttons_14_3,radioButtons_15_3,handle_radiobuttons_15_3,radioButtons_16_3,handle_radiobuttons_16_3]

    

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
                  setempty_validation(empty_validation(inputs))
                  const x=(empty_validation(inputs))
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
                  let x =true
                  if((radioButtons_2[0].selected===true && empty_validation([input_1_2])=== false)|| (radioButtons_3[0].selected===true && empty_validation([input_2_2])===false)){
                    setempty_validation_2(false) 
                    x= false
                  }
                  else{
                    x=true
                    setempty_validation_2(true) 
                  }
                  
                  
                  setError_2(!(x) )
                  
                }}
                >
                <View >
                  <Policy2 list={states_2}  />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                >
                <View >
                  <Policy3 list={states_3}  />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                >
                <View >
                  <Policy5  />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                >
                <View >
                  <Policy6  />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                >
                <View >
                  <Policy7  />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                finishBtnText="Done"
                previousBtnStyle={previousButton}
                // onSubmit={()=>{
                //   const y= email_validation(input_1_4)
                //   const z= ( !y)
                //   if (z){
                //     alert("please enter valid email")
                //   }
                //   else{
                //     navigation.navigate('HomeScreen');
                //   }
                  
                // }}
                >
                <View >
                  <Policy4  />
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </>
      );
}

export default Steps