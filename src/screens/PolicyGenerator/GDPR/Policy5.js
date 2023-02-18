import React from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import {ScrollView, View, Text,TouchableHighlight,TouchableOpacity} from 'react-native';
import styles from '../Cookies/style';


const Policy5 = ({list}) => {
  var touchProps1 = {                               
    style: list[14] ? styles.Pressed : styles.Normal, 
    onPress: () => list[15](true),                 
  };
  var touchProps2 = {                               
    style: list[16] ? styles.Pressed : styles.Normal, 
    onPress: () => list[17](true),                 
  };
  var touchProps3 = {                               
    style: list[18] ? styles.Pressed : styles.Normal, 
    onPress: () => list[19](true),                 
  };
  var touchProps4 = {                               
    style: list[20] ? styles.Pressed : styles.Normal, 
    onPress: () => list[21](true),                 
  };
  var touchProps5 = {                               
    style: list[22] ? styles.Pressed : styles.Normal, 
    onPress: () => list[23](true),                 
  };
  var touchProps6 = {                               
    style: list[24] ? styles.Pressed : styles.Normal, 
    onPress: () => list[25](true),                 
  };
  var touchProps7 = {                               
    style: list[26] ? styles.Pressed : styles.Normal, 
    onPress: () => list[27](true),                 
  };
  var touchProps8 = {                               
    style: list[28] ? styles.Pressed : styles.Normal, 
    onPress: () => list[29](true),                 
  };
  var touchProps9 = {                               
    style: list[30] ? styles.Pressed : styles.Normal, 
    onPress: () => list[31](true),                 
  };

  return (
    <>
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Text style={styles.text_1}>Policy Details:</Text>
      <View style={{paddingHorizontal: 11, paddingTop: 16}}>
        <Text style={styles.text_2}>Do you anonymize user’s personal information before making it available to analytics or tracking tools?</Text>
        <RadioGroup
            radioButtons={list[0]}
            onPress={(data)=>list[1](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you have affiliate links in your mobile app?</Text>
        <RadioGroup
            radioButtons={list[2]}
            onPress={(data)=>list[3](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you display ads in your mobile app (such as Google AdSense, AdMob, BuySellAds, etc)?</Text>
        <RadioGroup
            radioButtons={list[4]}
            onPress={(data)=>list[5](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you collect user data for remarketing (via Google, Facebook, etc)?</Text>
        <RadioGroup
            radioButtons={list[6]}
            onPress={(data)=>list[7](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you send email newsletters to your users?</Text>
        <RadioGroup
            radioButtons={list[8]}
            onPress={(data)=>list[9](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you send push notifications to your users?</Text>
        <RadioGroup
            radioButtons={list[10]}
            onPress={(data)=>list[11](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>Do you use a third-party provider to send push notifications?</Text>
        <RadioGroup
            radioButtons={list[12]}
            onPress={(data)=>list[13](data)}
            containerStyle={styles.radio_hm}
        />
        <Text style={styles.text_2}>What kind of information do you collect from your users?</Text>
        <View style={{flex:1 ,display:"flex",flexDirection:"column",marginVertical:20,marginHorizontal:30,justifyContent:'space-between'}}>
              <TouchableHighlight {...touchProps1}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Account details (such as user name, unique user ID, password, etc)</Text>
                  <TouchableOpacity style={list[14] ? {} : {display:"none"}} onPress={()=>list[15](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps2}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Contact information (such as email address, phone number, etc)</Text>
                  <TouchableOpacity style={list[16] ? {} : {display:"none"}} onPress={()=>list[17](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps3}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Basic personal information (such as name, country of residence, etc)</Text>
                  <TouchableOpacity style={list[18] ? {} : {display:"none"}} onPress={()=>list[19](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps4}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Sensitive personal information (ethnicity, religious beliefs, mental health, etc)</Text>
                  <TouchableOpacity style={list[20] ? {} : {display:"none"}} onPress={()=>list[21](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps5}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Biometric information (facial recognition, fingerprints, etc)</Text>
                  <TouchableOpacity style={list[22] ? {} : {display:"none"}} onPress={()=>list[23](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps6}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Proof of identity (such as photocopy of a government ID)</Text>
                  <TouchableOpacity style={list[24] ? {} : {display:"none"}} onPress={()=>list[25](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps7}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Payment information (such as credit card details, bank details, etc)</Text>
                  <TouchableOpacity style={list[26] ? {} : {display:"none"}} onPress={()=>list[27](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps8}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Information about other individuals (such as your family members, friends, etc)</Text>
                  <TouchableOpacity style={list[28] ? {} : {display:"none"}} onPress={()=>list[29](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
              <TouchableHighlight {...touchProps9}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{width:"90%",color:"#585858"}}>Any other materials you willingly submit to us (such as articles, images, feedback, etc)</Text>
                  <TouchableOpacity style={list[30] ? {} : {display:"none"}} onPress={()=>list[31](false)}><Text style ={{color:"#585858"}}> x  </Text></TouchableOpacity>
                </View>
              </TouchableHighlight>
          </View>
          <Text style={styles.text_2}>Will you be requesting access to the geolocation of your users?</Text>
          <RadioGroup
            radioButtons={list[32]}
            onPress={(data)=>list[33](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>Will you be requesting access to various features on the mobile device (such as contacts, calendar, gallery, etc)?</Text>
          <RadioGroup
            radioButtons={list[34]}
            onPress={(data)=>list[35](data)}
            containerStyle={styles.radio_hm}
          />
          <Text style={styles.text_2}>Do you collect any derivative data from your users (ip address, browser name, device name, etc)?</Text>
          <RadioGroup
            radioButtons={list[36]}
            onPress={(data)=>list[37](data)}
            containerStyle={styles.radio_hm}
          />
      </View>

    </ScrollView>
    </>
  )
}

export default Policy5