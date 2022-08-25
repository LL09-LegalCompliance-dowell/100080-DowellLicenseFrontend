import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  calendarPosition: {
    position: "absolute",
    right: 20,
    top: -45,
    elevation: 3,
  },
  center: {
    alignItems: "center",
  },
  chevron: {
    backgroundColor: "#C4C4C4",
    width: 23,
    height: 23,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hide: {
    display: "none",
  },
  horizontalLine: {
    borderBottomColor: "#737373",
    borderBottomWidth: 2,
    width: "70%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C4C4C4",
    padding: 10,
    backgroundColor: "#D8D8D8",
  },
  formGroup: {
    marginBottom: 15,
  },
  nextButton: {
    backgroundColor: "#489503",
    color: "#00000",
    paddingHorizontal: 30,
    borderRadius: 15,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7,
    elevation: 3,
    marginBottom: 10,
    marginTop: 30,
  },
  nextText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  partyDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  radio: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  radioWrapper: {
    marginLeft: 20,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5%",
    marginRight: "5%",
  },
  agree: {
    display: "flex",
    alignItems: "flex-start",
  },
  normaltext: {
    fontWeight: "normal",
    fontSize: 12,
  },
  boldfont: {
    fontWeight: "bold",
  },
  TextStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  section2: {
    paddingTop: 20,
  },
  italic: {
    fontStyle: "italic",
    fontWeight: "100",
    fontSize: 12,
  },
  imageWrapper: {
    position: "relative",
    backgroundColor: "white",
    height: 150,
  },
  centerLink: {
    position: "absolute",
    top: 180,
    left: 100,
    justifyContent:"center",
  },
  imageText: {
    color: "green",
    backgroundColor: "white",
    width: 150,
    textDecorationLine: 'underline'
  },
  disclaimer: {
    paddingLeft: 80,
    paddingTop:10
  },
  generatingText:{
    color:"white",
  },
  policyButton: {
    backgroundColor: "#489503",
    color: "#00000",
    paddingHorizontal: 30,
    borderRadius: 15,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    elevation: 3,
    marginBottom: 10,
    marginTop: 10,
  },
  FAQtext:{
    color:"green",
    textDecorationLine: 'underline'
  }
});
