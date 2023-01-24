import {React,useState} from 'react'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import { View } from 'react-native';
import Header from '../../../components/Header';
import Policy1 from './Policy1';
import Policy4 from '../Cookies/Policy4';
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
      ///////////////////////////////////////////////////////////////////////////1
      const [date, setDate] = useState(new Date());
      const handle_date = (state)=> setDate(state);
      const [input_1, setInput_1] = useState("");
      const handle_input_1 = (state)=> setInput_1(state);
      const [error_1, setError_1] = useState(false);
      const [empty_validationn, setempty_validation] = useState(true);
      const states= [date,handle_date,input_1,handle_input_1,empty_validationn]

      ///////////////////////////////////////////////////////////////////////////4
      const [input_1_4, setInput_1_4] = useState("");
      const handle_input_1_4 = (state)=> setInput_1_4(state);
      const states_4= [input_1_4,handle_input_1_4]
      const request_object={
        agreement_compliance_type: "app-disclaimer",
        last_update: generate_date(date.toLocaleDateString()),
        app_name: input_1
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
                  setempty_validation(empty_validation([input_1]))
                  const x=empty_validation([input_1])
                  setError_1(!(x) )}}>
                <View >
                  <Policy1 list={states}/>
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