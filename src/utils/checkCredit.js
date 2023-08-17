import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const checkCredits = async() => {
    try {
        const apiKey = await AsyncStorage.getItem("api_key")
        if(!apiKey){
            return "No API KEY"
        }
        const apiKeyData = await axios.post(`https://100105.pythonanywhere.com/api/v3/process-services/?type=product_service&api_key=${apiKey}`,
            {
              "sub_service_ids": ["DOWELL100291"], // for agreement compliance
              "service_id": "DOWELL10029"
            }
          )
          // console.log("API KEY DATA: ", apiKeyData.status)
          const { success, message, remaining_credits } = apiKeyData.data
          console.log("Remaining Credits: ", remaining_credits)
          if(remaining_credits <= 20){
            throw new Error("Inadequate credits. Please Recharge or update")
          }else{
            return "OK"
          }        
      } catch (error) {
        throw new Error(error.message)
      }
}
export default checkCredits;