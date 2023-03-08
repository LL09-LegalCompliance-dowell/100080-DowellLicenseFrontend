import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const HowToModel = () => {
  return (
    <View>
      {/* How to Overlay starts here */}
      <Modal
        propagateSwipe
        isVisible={isHowto}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInTiming={1000}
        animationOutTiming={1000}
        avoidKeyboard={true}
        onBackdropPress={() => setHowto(false)}
        onBackButtonPress={() => setHowto(false)}
        backdropTransitionOutTiming={0}
        onSwipeComplete={() => setHowto(false)}
        swipeDirection="right"
        customBackdrop={
          <TouchableWithoutFeedback onPress={() => setHowto(false)}>
            <View style={{flex: 1, backgroundColor: 'white'}} />
          </TouchableWithoutFeedback>
        }>
        <>
          <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TouchableOpacity
                style={{marginLeft: 'auto'}}
                onPress={() => setHowto(false)}>
                <Entypo name="cross" size={40} color="darkgray" />
              </TouchableOpacity>
              <View flex={1} onStartShouldSetResponder={() => true}>
                <Text
                  style={[styles.heading, {fontSize: 24, alignSelf: 'center'}]}>
                  How to check license compatibility
                </Text>
                <Text style={[styles.heading]}>
                  1. Search and select the license
                </Text>
                <Text
                  style={[styles.heading, {fontSize: 16, alignSelf: 'center'}]}>
                  Enter the name of the licenses you want to check the
                  compatibility for. Search the first license name and select
                  the license. Then search the second license name and select
                  the license.
                </Text>
                <Octicons
                  name="image"
                  size={170}
                  color={colors.textDark}
                  style={{alignSelf: 'center'}}
                />
                <Text style={{alignSelf: 'center', color: 'gray'}}>
                  *Image describing step 1
                </Text>

                <Text style={[styles.heading]}>
                  2. Click check button to view results
                </Text>
                <Text
                  style={[styles.heading, {fontSize: 16, alignSelf: 'center'}]}>
                  After the two licenses are selected, now click the “Check”
                  button to view the compatibility results.
                </Text>
                <Octicons
                  name="image"
                  size={170}
                  color={colors.textDark}
                  style={{alignSelf: 'center'}}
                />
                <Text style={{alignSelf: 'center', color: 'gray'}}>
                  *Image describing step 2
                </Text>

                <Text style={[styles.heading]}>
                  3. Check the compatibility results
                </Text>
                <Text style={[styles.heading, {alignSelf: 'center'}]}>
                  Check the compatibility results.
                </Text>
                <Text
                  style={[
                    styles.heading,
                    {
                      alignSelf: 'center',
                      fontSize: 16,
                      color: 'red',
                      paddingTop: 0,
                    },
                  ]}>
                  **here we can provide more descriptive manner of how the
                  results are shown and on what factors the compatibility is
                  done
                </Text>
                <Octicons
                  name="image"
                  size={170}
                  color={colors.textDark}
                  style={{alignSelf: 'center'}}
                />
                <Text style={{alignSelf: 'center', color: 'gray'}}>
                  *Image describing step 3
                </Text>
                <View
                  style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: 'gray',
                    marginVertical: 30,
                  }}></View>
                <Text
                  style={[styles.heading, {alignSelf: 'center', fontSize: 22}]}>
                  OR{' '}
                </Text>
                <Text
                  style={[styles.heading, {fontSize: 24, alignSelf: 'center'}]}>
                  Video Tutorial for all the above given steps{' '}
                </Text>
                <Octicons
                  name="image"
                  size={170}
                  color={colors.textDark}
                  style={{alignSelf: 'center'}}
                />
              </View>
            </ScrollView>
          </View>
        </>
      </Modal>
    </View>
  );
};

export default HowToModel;

const styles = StyleSheet.create({});
