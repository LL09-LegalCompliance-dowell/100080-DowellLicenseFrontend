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
                >
                <View >
                  <Policy2  />
                </View>
              </ProgressStep>
              <ProgressStep
                nextBtnStyle={nextButton}
                nextBtnTextStyle={{color: 'white', fontSize: 18}}
                previousBtnTextStyle={{color: '#489503', fontSize: 18}}
                previousBtnStyle={previousButton}
                >
                <View >
                  <Policy3  />
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