import React from 'react'
import { ScrollView,StyleSheet,Text, View } from 'react-native'
import Header from '../../components/Header'

const FAQ = ({route}) => {
    const { questions, answers } = route.params
  return (
    <>
    <Header title="Website Security Policy generator FAQs" />
    
    <ScrollView style={styles.container}>
    {/* <Text style={styles.text_q}>omair</Text> */}
        {questions.map((item,index)=>{
            return(
                <View key={index}>
                    <Text style={styles.text_q}>{item}</Text>
                    <Text style={styles.text_a}>{answers[index]}</Text>
                </View>
            )
        })}
    </ScrollView>
    </>
  )
}

export default FAQ
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        width: '100%',
        paddingTop: 80,
        flex: 1,
      },
      text_q:{
        fontSize: 20,
        paddingVertical:13,
        fontWeight: '500',
        lineHeight:23.44,
        color:"black"
      },
      text_a:{
        fontSize: 18,
        paddingHorizontal: 9,
        fontWeight: '400',
        lineHeight:21.09,
        color:"black"
      }
    })
