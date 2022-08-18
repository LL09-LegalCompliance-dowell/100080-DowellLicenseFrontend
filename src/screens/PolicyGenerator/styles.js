import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    calendarPosition: {
        position: 'absolute',
        right: 20,
        top: -45,
        elevation: 3
    },
    center: {
        alignItems: "center"
    },
    chevron: {
        backgroundColor: '#C4C4C4',
        width: 23,
        height: 23,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    hide: {
        display: 'none'
    },
    horizontalLine: {
        borderBottomColor: '#737373',
        borderBottomWidth: 2,
        width: "70%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#C4C4C4',
        padding: 10,
        backgroundColor: '#D8D8D8'
    },
    formGroup: {
        marginBottom:15
    },
    nextButton: {
        backgroundColor: "#489503",
        color: "#00000",
        paddingHorizontal: 30,
        borderRadius:15,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        elevation: 3,
        marginBottom:10,
        marginTop: 30
    }, 
    nextText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    partyDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical:15
    },
    radio: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    radioWrapper: {
        marginLeft: 20
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        marginLeft: '5%',
        marginRight: '5%'

    },

});