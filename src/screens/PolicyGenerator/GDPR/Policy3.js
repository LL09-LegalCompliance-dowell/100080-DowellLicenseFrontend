import React from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import {ScrollView, View, Text,TouchableHighlight,TouchableOpacity} from 'react-native';
import styles from '../Cookies/style';

const Policy3 = ({list}) => {
  var touchProps1 = {                               
    style: list[22] ? styles.Pressed : styles.Normal, 
    onPress: () => list[23](true),                 
  };
  var touchProps2 = {                               
    style: list[24] ? styles.Pressed : styles.Normal, 
    onPress: () => list[25](true),                 
  };
  var touchProps3 = {                               
    style: list[26] ? styles.Pressed : styles.Normal, 
    onPress: () => list[27](true),                 
  };
  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.text_1}>Policy Details:</Text>
      <View style={{paddingHorizontal: 11, paddingTop: 16}}>
        <Text style={styles.text_2}>Can users share content available in your mobile app on social networks?</Text>
        <RadioGroup
            radioButtons={list[0]}
            onPress={(data)=>list[1](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Can users interact with each other in your mobile app?</Text>
        <RadioGroup
            radioButtons={list[2]}
            onPress={(data)=>list[3](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>When users interact, can they see other user’s personally identifiable information (names, nicknames, photographs, etc)?</Text>
        <RadioGroup
            radioButtons={list[4]}
            onPress={(data)=>list[5](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Does your target audience or users include residents of California, USA?</Text>
        <RadioGroup
            radioButtons={list[6]}
            onPress={(data)=>list[7](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Does your target audience or users include residents of the European Union?</Text>
        <RadioGroup
            radioButtons={list[8]}
            onPress={(data)=>list[9](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Does your target audience or users include those under the age of 18?</Text>
        <RadioGroup
            radioButtons={list[10]}
            onPress={(data)=>{
              list[11](data)
              if(data[0].selected== true){
                list[13](true)
              }
              else {
                list[23](false)
                list[25](false)
                list[27](false)
                list[13](false)
                list[15]([{
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
                list[17]([{
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
                }])
                list[19]([{
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
                }])
                list[21]([{
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
                }])
              }
            }}
            containerStyle={styles.radio_hm}
        />
        <View style={list[12]?"":styles.hide}>
          <Text style={styles.text_2}>Does your target audience or users include children under the age of 13?</Text>
          <RadioGroup
            radioButtons={list[14]}
            onPress={(data)=>list[15](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>Do you collect any information from children?</Text>
          <RadioGroup
            radioButtons={list[16]}
            onPress={(data)=>list[17](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>Will information submitted by children be publicly available?</Text>
          <RadioGroup
            radioButtons={list[18]}
            onPress={(data)=>list[19](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>Is there an option to keep submitted information private?</Text>
          <RadioGroup
            radioButtons={list[20]}
            onPress={(data)=>list[21](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>Do any of the following items apply? </Text>
          <View style={{flex:1 ,display:"flex",flexDirection:"column",marginVertical:20,marginHorizontal:44,justifyContent:'space-between'}}>
              <TouchableHighlight {...touchProps1}>
                <View style={{display:"flex",flexDirection:"column",padding:5}}>
                  <Text style={{color:"#585858"}}>We don’t require a child to disclose more information than is necessary to use the mobile app.</Text>
                  <TouchableOpacity style={list[22] ? {display:"flex"} : {display:"none"}} onPress={()=>list[23](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps2}>
                <View style={{display:"flex",flexDirection:"column",padding:5}}>
                  <Text style={{color:"#585858"}}>Parents can review their child’s information, delete it, and refuse to allow any further collection or use of such information.</Text>
                  <TouchableOpacity style={list[24] ? {display:"flex"} : {display:"none"}} onPress={()=>list[25](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps3}>
                <View style={{display:"flex",flexDirection:"column",padding:5}}>
                  <Text style={{color:"#585858"}}>Parents have an easy method for giving consent.</Text>
                  <TouchableOpacity style={list[26] ? {display:"flex"} : {display:"none"}} onPress={()=>list[27](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.text_2}>Do you currently sell or plan on selling products or services in your mobile app?</Text>
        <RadioGroup
            radioButtons={list[28]}
            onPress={(data)=>list[29](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you offer products or services provided by third-party companies?</Text>
        <RadioGroup
            radioButtons={list[30]}
            onPress={(data)=>list[31](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you have security measures in place to protect sensitive payment information?</Text>
        <RadioGroup
            radioButtons={list[32]}
            onPress={(data)=>list[33](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you store any sensitive payment information?</Text>
        <RadioGroup
            radioButtons={list[34]}
            onPress={(data)=>list[35](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you perform credit checks on your customers or members of their household?</Text>
        <RadioGroup
            radioButtons={list[36]}
            onPress={(data)=>list[37](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you use third-party analytics or tracking tools (such as Google Analytics)?</Text>
        <RadioGroup
            radioButtons={list[38]}
            onPress={(data)=>list[39](data)}
            containerStyle={styles.radio_hm}
        />
        
        
      
      </View>
    </ScrollView>
    </>
  )
}

export default Policy3