import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../../assets/colors/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      scrollView: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingHorizontal: 12,
        width: '100%',
        alignItems: 'center',
        paddingTop: 80,
      },
      text: {
        fontSize: 16,
        color: colors.textDark,
        fontWeight: '300',
      },
      heading: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.textDark,
        paddingBottom: 15,
        
      },
      blurImage: {
        marginVertical: 20,
      },
    
      getStarted: {
        marginTop: 15,
        backgroundColor: colors.primary,
        borderRadius: 20,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: 210,
        height: 50,
        elevation: 3,
      },
      getStartedText: {
        color: 'white',
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        alignItems: 'center',
      },
    
      faq: {
        color: colors.primary,
        fontSize: 17,
        textDecorationLine: 'underline',
        marginTop: 30,
      },
      faq1: {
        color: colors.primary,
        marginRight:2,
        marginTop: 33,
      },
      textlight: {
        fontSize: 16,
        fontWeight: '300',
        paddingVertical: 15,
        textAlign:"center"
      },
    
      viewSampleContainer: {
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 330,
        zIndex: 1,
      },
    
      viewSample: {
        flexDirection: 'row',
        color: colors.primary,
      },
    
      faqq: {
        color: colors.primary,
        fontSize: 17,
        textDecorationLine: 'underline',
        paddingLeft: 5,
      },
      wrapper: {
        display: 'flex',
        flex:1,
        flexDirection: 'column',
        backgroundColor: 'white',
      },
      input: {
        height: 51,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#C4C4C4',
        padding: 10,
        backgroundColor: '#D8D8D8',
      },
      input_vm: {
        height: 51,
        marginVertical: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#C4C4C4',
        padding: 10,
        backgroundColor: '#D8D8D8',
      },
      input_um: {
        height: 51,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#C4C4C4',
        padding: 10,
        backgroundColor: '#D8D8D8',
      },
      calendarPosition: {
        position: 'absolute',
        right: 30,
        top: -50,
        elevation: 3,
      },
      radio_hm: {
        marginHorizontal:27,
        marginVertical:5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      radio: {
        marginHorizontal:-10,
        marginVertical:5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      Pressed:{
        padding:3,
        fontWeight:"300",
        fontSize:16,
        lineHeight:19,
        backgroundColor:"#078F04",
        opacity:0.5,
        borderRadius:25,
        borderColor:"#585858",
        borderWidth:1,
        marginRight:15

      },
      Normal:{
        padding:3,
        fontWeight:"300",
        fontSize:16,
        lineHeight:19,
        color:"#585858",
        borderRadius:25,
        borderColor:"#585858",
        borderWidth:1,
        marginRight:15
      },
      textoptional:{
        fontSize:12,
        fontWeight:"300",
        color:"#585858",
        lineHeight:14,
        position:"relative",
        right:-290,
        marginTop:6,
        marginBottom:20
      },
      button_p4:{
        display:"flex",
        flexDirection:"row",
        borderRadius:10,
        backgroundColor:"#C7C0C0",
        width:213,
        height:40,
        alignItems:"center",
        //justifyContent:"center",
        paddingHorizontal:22,
        marginBottom:24
      },
      text_b_p4:{
        marginHorizontal:10,
        fontSize:18,
        fontWeight:"500",
        lineHeight:21.09,
        color:"#078F04",
        textAlign:"center"

      }

})
export default styles;



