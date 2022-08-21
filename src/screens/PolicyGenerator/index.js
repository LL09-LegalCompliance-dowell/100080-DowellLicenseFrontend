import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { ModalDatePicker } from "react-native-material-date-picker";
//Entities
import IndividualEntity from "./individualEntity";
import CompanyEntity from "./companyEntity";
import PartnershipEntity from "./partnershipEntity";
//Styling
import { styles } from "./styles";
// Chevron Up and Down Icons, Calendar Icon
import ChevronUp from '../../../assets/angle-up-solid.svg';
import ChevronDown from '../../../assets/chevron-down-solid.svg';
import CalendarIcon  from '../../../assets/calendar-regular.svg';
//Radio Buttons Data 
import { radioButtonsData } from './radioButtonsData';


const PolicyGenerator = () => {

    const [isPartyOneOpen, setIsPartyOneOpen] = useState(true);
    const [isPartyTwoOpen, setIsPartyTwoOpen] = useState(false);
    const [radioButtons, setRadioButtons] = useState([...radioButtonsData]);
    const [radioButtonsTwo, setRadioButtonsTwo] = useState([...radioButtonsData]);
    const [selectedRadioButton, setSelectedRadioButton] = useState('individual');
    const [selectedRadioButtonTwo, setSelectedRadioButtonTwo] = useState('individual');
    const [date, setDate] = useState(new Date());

    const togglePartyOne = (e) => {
        setIsPartyOneOpen(prev => !prev);
    }

    const togglePartyTwo = (e) => {

        setIsPartyTwoOpen(prev => !prev);
    }

   
    const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    }

    const onPressRadioButtonTwo = (radioButtonsArrayTwo) => {
        setRadioButtonsTwo(radioButtonsArrayTwo);
    }

    const getSelectRadioButton = () => {
        radioButtons.forEach(element => {
            if (element.selected) {
                setSelectedRadioButton(element.value);
                return;
            }
        });
    }

    const getSelectRadioButtonTwo = () => {
        radioButtonsTwo.forEach(element => {
            if (element.selected) {
                setSelectedRadioButtonTwo(element.value);
                return;
            }
        });
    }

    const EntityType = () => {           
        if (selectedRadioButton === 'company') {
            return (
                <CompanyEntity />
            );
        } else if (selectedRadioButton === 'partnership') {
            return (
                <PartnershipEntity />
            );
        }

        return (
            <IndividualEntity />
        );
    }


    const EntityTypeTwo = () => {           
        if (selectedRadioButtonTwo === 'company') {
            return (
                <CompanyEntity />
            );
        } else if (selectedRadioButtonTwo === 'partnership') {
            return (
                <PartnershipEntity />
            );
        }

        return (
            <IndividualEntity />
        );
    }

    useEffect(() => {
        getSelectRadioButton();
        getSelectRadioButtonTwo();

    }, [JSON.stringify(radioButtons), JSON.stringify(radioButtonsTwo)]);


    return (
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
            <View style={{position: 'relative', marginTop: 30}}>
                <Text>Date of execution of Document</Text>
                <TextInput
                    style={styles.input}
                    value={date} 
                    placeholder = "dd/mm/yyyy"                  
                />               
                <ModalDatePicker 
                    button={
                        <View style={styles.calendarPosition}>
                            <CalendarIcon
                                width = {20}
                                height = {25}
                            />
                        </View>
                    } 
                    color= "#489503"
                    onSelect={(value) => setDate(value) }
                    isHideOnSelect={true}
                    initialDate={new Date()}

                />        
            </View>
            <View>
                <Text>Party Details:</Text>
                <View style={styles.partyDetails}>
                    <Text>Party 1:</Text>
                    <View 
                        style={styles.horizontalLine}
                    />
                    <TouchableOpacity onPress={togglePartyOne}>
                        <View style={styles.chevron}>
                            {
                                isPartyOneOpen ? 
                                (
                                    <ChevronUp 
                                        width={17}
                                        height={17}
                                    />
                                ):
                                (
                                    <ChevronDown 
                                        width={15}
                                        height={15}
                                    />
                                )
                            }
                            
                        </View>
                    </TouchableOpacity>                
                </View>
                <View style={isPartyOneOpen ? '' : styles.hide}>
                    <View styles={styles.formGroup}>
                        <Text>Entity Type:</Text>
                        <View style={styles.radioWrapper}>
                            <RadioGroup 
                                radioButtons={radioButtons}
                                onPress={onPressRadioButton}
                                containerStyle={styles.radio}
                            />
                        </View>   
                    </View>
                    <EntityType />                    
                </View>


                <View style={styles.partyDetails}>
                    <Text>Party 2:</Text>
                    <View 
                        style={styles.horizontalLine}
                    />
                    <TouchableOpacity onPress={togglePartyTwo}>
                        <View style={styles.chevron}>
                            {
                                isPartyTwoOpen ? 
                                (
                                    <ChevronUp 
                                        width={17}
                                        height={17}
                                    />
                                ):
                                (
                                    <ChevronDown 
                                        width={15}
                                        height={15}
                                    />
                                )
                            }
                            
                        </View>
                    </TouchableOpacity>   
                </View>
                <View style={isPartyTwoOpen ? '' : styles.hide}>
                    <View styles={styles.formGroup}>
                        <Text>Entity Type:</Text>
                        <View style={styles.radioWrapper}>
                            <RadioGroup 
                                radioButtons={radioButtonsTwo}
                                onPress={onPressRadioButtonTwo}
                                containerStyle={styles.radio}
                            />
                        </View>   
                    </View>
                    <EntityTypeTwo />                    
                </View>
            </View>
            <View style={styles.center}>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextText}>Next Step</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default PolicyGenerator;


