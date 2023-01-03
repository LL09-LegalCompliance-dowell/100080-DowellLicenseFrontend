import {React,useState} from 'react'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import Header from '../../../components/Header';
import Policy1 from './Policy1';
import Policy2 from './Policy2';
import Policy3 from './Policy3';
import Policy4 from '../Cookies/Policy4';
import { empty_validation,email_validation } from '../validations';
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
      //1
      const [date, setDate] = useState(new Date());
      const handle_date = (state)=> setDate(state);
      const [input_1, setInput_1] = useState('');
      const handle_input_1 = (state)=> setInput_1(state);
      const [input_2, setInput_2] = useState('');
      const handle_input_2 = (state)=> setInput_2(state);
      const [input_3, setInput_3] = useState('');
      const handle_input_3 = (state)=> setInput_3(state);
      const [input_4, setInput_4] = useState('');
      const handle_input_4 = (state)=> setInput_4(state);
      const [input_5, setInput_5] = useState('');
      const handle_input_5 = (state)=> setInput_5(state);
      const [input_6, setInput_6] = useState('');
      const handle_input_6 = (state)=> setInput_6(state);
      const [input_7, setInput_7] = useState('');
      const handle_input_7 = (state)=> setInput_7(state);
      const [input_8, setInput_8] = useState('');
      const handle_input_8 = (state)=> setInput_8(state);
      const [input_9, setInput_9] = useState('');
      const handle_input_9 = (state)=> setInput_9(state);
      const [input_10, setInput_10] = useState('');
      const handle_input_10 = (state)=> setInput_10(state);
      const [error_1, setError_1] = useState(false);
      const [empty_validationn, setempty_validation] = useState(true);
      const states= [date,handle_date,input_1,handle_input_1,input_2,handle_input_2,input_3,handle_input_3,input_4,handle_input_4,input_5,handle_input_5,input_6,handle_input_6,input_7,handle_input_7,input_8,handle_input_8,input_9,handle_input_9,input_10,handle_input_10,empty_validationn]
      const inputs= [input_1,input_2,input_3,input_4,input_5,input_6,input_7,input_8,input_9,input_10]
      //2
      const [radioButtons, setRadioButtons] = useState([{
          id: '1',
          label: 'Individual',
          value: 'Individual',
          size: 18,
          color: '#489503',
          borderColor: '#C4C4C4',
          labelStyle:{color:"#585858"},
          selected: true
        },{
        id: '2',
        label: 'Entity',
        value: 'Entity',
        size: 18,
        color: '#489503',
        borderColor: '#C4C4C4',
        labelStyle:{color:"#585858"},
      }]);
      const handle_radiobuttons = (state)=> setRadioButtons(state);
      const [input_1_1, setInput_1_1] = useState('');
      const handle_input_1_1 = (state)=> setInput_1_1(state);
      const [input_2_1, setInput_2_1] = useState('');
      const handle_input_2_1 = (state)=> setInput_2_1(state);
      const [input_3_1, setInput_3_1] = useState('');
      const handle_input_3_1 = (state)=> setInput_3_1(state);
      const [input_4_1, setInput_4_1] = useState('');
      const handle_input_4_1 = (state)=> setInput_4_1(state);
      const [input_5_1, setInput_5_1] = useState('');
      const handle_input_5_1 = (state)=> setInput_5_1(state);
      const [error_2, setError_2] = useState(false);
      const [empty_validationn_1, setempty_validation_1] = useState(true);
      const states_1= [radioButtons,handle_radiobuttons,input_1_1,handle_input_1_1,input_2_1,handle_input_2_1,handle_input_3_1,handle_input_4_1,handle_input_5_1,input_3_1,input_4_1,input_5_1,empty_validationn_1]
      const inputs_1= [input_1_1,input_2_1,input_3_1,input_4_1,input_5_1]
     //3
     const [date_2, setDate_2] = useState(new Date());
     const handle_date_2 = (state)=> setDate_2(state);
     const [radioButtons1, setRadioButtons1] = useState([{
      id: '1',
      label: 'Yes',
      value: 'Yes',
      size: 18,
      labelStyle:{color:"#585858"},
      borderColor: '#C4C4C4',
      color: '#489503',
      
    },{
    id: '2',
    label: 'No',
    value: 'No',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
    selected: true
    }]);
    const [radioButtons2, setRadioButtons2] = useState([{
      id: '1',
      label: 'When they download ',
      value: 'When they download ',
      size: 18,
      color: '#489503',
      borderColor: '#C4C4C4',
      labelStyle:{color:"#585858"},
    },{
    id: '2',
    label: 'When they open the package',
    value: 'When they open the package',
    size: 18,
    color: '#489503',
    borderColor: '#C4C4C4',
    labelStyle:{color:"#585858"},
    selected: true
    }]);
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
    borderColor: '#C4C4C4',
    selected: true,
    labelStyle:{color:"#585858"},
    
    }]); 
   
   
    const [first_radio_button, setFirst_radio_button] = useState(1);
    const handle_first_radio_button = (state)=> setFirst_radio_button(state);
    var [ isPress1, setIsPress1 ] = useState(false);
    var [ isPress2, setIsPress2 ] = useState(false);
    var [ isPress3, setIsPress3 ] = useState(false);
    const handle_isPress1 = (state)=> setIsPress1(state);
    const handle_isPress2 = (state)=> setIsPress2(state);
    const handle_isPress3 = (state)=> setIsPress3(state);
    const handle_radiobuttons1 = (state)=> setRadioButtons1(state);
    const handle_radiobuttons2 = (state)=> setRadioButtons2(state);
    const handle_radiobuttons3 = (state)=> setRadioButtons3(state);
    const [input_1_2, setInput_1_2] = useState("");
    const handle_input_1_2 = (state)=> {setInput_1_2(state)};
    const [error_3, setError_3] = useState(false);
    const [empty_validationn_2, setempty_validation_2] = useState(true);
    const states_2= [date_2,handle_date_2,radioButtons1,handle_radiobuttons1,radioButtons2,handle_radiobuttons2,radioButtons3,handle_radiobuttons3,input_1_2,handle_input_1_2,first_radio_button,handle_first_radio_button,isPress1,handle_isPress1,isPress2,handle_isPress2,isPress3,handle_isPress3,empty_validationn_2]
    
    //4
    const [input_1_4, setInput_1_4] = useState("");
    const handle_input_1_4 = (state)=> setInput_1_4(state);
    const states_4= [input_1_4,handle_input_1_4]

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
                  const y= email_validation(input_10)
                  setError_1(!(x & y) )
                  
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
                  setempty_validation_1(empty_validation(inputs_1))
                  const y=(empty_validation(inputs_1))
                  setError_2(! y )
                  
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
                  const y=(empty_validation([input_1_2]))
                  setError_3(! y )
                  
                }}>
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
                  <Policy4 list={states_4} />
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </>
      );
}

export default Steps