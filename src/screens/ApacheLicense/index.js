import {View, Text, Image,  ScrollView} from 'react-native';
import React from 'react';
import {Linking} from 'react-native';

import styles from './style';
import Header from '../../components/Header';

const ApacheLicense = ({route}) => {
  const {item} = route.params;

  return (
    <>
      <Header title={item.softwarelicense.license_name} />

      <ScrollView style={styles.container}>
        {/* Upper Container */}
        <View style={styles.upperContainer}>
          <Image
            style={{height: 150, width: 150, resizeMode: 'contain'}}
            source={{uri: item.softwarelicense?.logo_detail?.url}}
          />
          {item.softwarelicense?.license_name ? (
            <Text style={styles.heading}>
              {item.softwarelicense?.license_name}
            </Text>
          ) : null}
          {item.softwarelicense?.description ? (
            <Text style={[styles.heading1, {marginHorizontal: 40}]}>
              {item.softwarelicense?.description}
            </Text>
          ) : null}
          {item.softwarelicense?.short_description ? (
            <Text>{item.softwarelicense?.short_description}</Text>
          ) : null}
        </View>
        {/* Lower Container */}
        <View style={styles.middleContainer}>
          <Text style={styles.heading1}>1.Text Version</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(item.softwarelicense?.license_url)}>
            {item.softwarelicense.license_url}
          </Text>
          <View style={{paddingHorizontal: 20, paddingBottom: 25}}>
            {item.softwarelicense?.other_links?.map((item1, index) => {
              return (
                // console.log(item1)
                <>
                  <Text key={index} style={styles.heading4}>{item1?.description}</Text>
                  <Text
                    style={[styles.link, {marginLeft: 20}]}
                    onPress={() => Linking.openURL(item1?.url)}>
                    {item1?.url}
                  </Text>
                </>
              );
            })}
          </View>

          <Text style={styles.heading1}>2.Category</Text>
          <Text style={styles.heading2}>
            {item.softwarelicense?.type_of_license}
          </Text>

          <Text style={styles.heading1}>3.Disclaimer</Text>
          <Text style={styles.heading2}>
            {item.softwarelicense?.disclaimer}
          </Text>

          <Text style={styles.heading1}>4.Attributions</Text>
          <Text style={[styles.heading4, {paddingTop:0, paddingLeft:20}]}> {item.softwarelicense?.license_attributes?.heading}</Text>
          <Text style={styles.heading2}>
           
            {item.softwarelicense?.license_attributes?.attributes.map(
              (attribute, index) => {
                return (
                  // console.log(item1)
                  <>
                    <View>
                      <Text
                      key={index}
                        style={[
                          styles.heading4,
                          {marginLeft: 20},
                        ]}>
                        {attribute}
                      </Text>
                    </View>
                  </>
                );
              },
            )}
          </Text>

          <Text style={styles.heading1}>
            5.Permissions, Conditions & Limitations:
          </Text>
          <Text style={styles.heading2}>
            One thing to consider is that you cannot combine Apache License 2.0
            with GPL v2 Another aspect to consider is that a “contributor can
            modify the code and then sell it as proprietary software” .
          </Text>

          <Text style={styles.heading1}>
            6.Risks for choosing Apache License 2.0
          </Text>
          <Text style={styles.heading2}>
            {item.softwarelicense?.risk_for_choosing_license}
          </Text>

          <Text style={styles.heading1}>6.Recommendations (%)</Text>
          <Text style={styles.heading2}>
            {item.softwarelicense?.recommendation}
          </Text>

          <Text style={styles.heading1}>7.Compatible Licenses</Text>
          {item.softwarelicense?.license_compatible_with_lookup.map(
            compatibleLicense => {
              return <Text style={styles.heading2}>{compatibleLicense}</Text>;
            },
          )}

          <Text style={styles.heading1}>8.Non- Compatible Licenses</Text>
          {item.softwarelicense?.license_not_compatible_with_lookup.map(
            compatibleLicense => {
              return <Text style={styles.heading2}>{compatibleLicense}</Text>;
            },
          )}

          <Text style={styles.heading1}>9.Limitation of Liability.</Text>
          <Text style={styles.heading2}>
            {item.softwarelicense?.limitation_of_liability}
          </Text>
          <Text style={styles.heading1}>
            For more details visit the below link:
          </Text>
          <Text
            style={[styles.link, {marginHorizontal: 15}]}
            onPress={() => Linking.openURL(item.softwarelicense?.license_url)}>
            {item.softwarelicense?.license_url}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text
            style={[
              styles.heading1,
              {textDecorationLine: 'underline', marginVertical: 10},
            ]}>
            DISCLAIMER
          </Text>
          <Text style={styles.heading3}>
            You may reproduce and distribute copies of the Work or Derivative
            Works thereof in any medium, with or without modifications, and in
            Source or Object form, provided that You meet the following
            conditions:
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.heading3}>
            You must give any other recipients of the Work or Derivative Works a
            copy of this License; and
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            You must cause any modified files to carry prominent notices stating
            that You changed the files; and
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            You must retain, in the Source form of any Derivative Works that You
            distribute, all copyright, patent, trademark, and attribution
            notices from the Source form of the Work, excluding those notices
            that do not pertain to any part of the Derivative Works; and
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            If the Work includes a "NOTICE" text file as part of its
            distribution, then any Derivative Works that You distribute must
            include a readable copy of the attribution notices contained within
            such NOTICE file, excluding those notices that do not pertain to any
            part of the Derivative Works, in at least one of the following
            places: within a NOTICE text file distributed as part of the
            Derivative Works; within the Source form or documentation, if
            provided along with the Derivative Works; or, within a display
            generated by the Derivative Works, if and wherever such third-party
            notices normally appear. The contents of the NOTICE file are for
            informational purposes only and do not modify the License. You may
            add Your own attribution notices within Derivative Works that You
            distribute, alongside or as an addendum to the NOTICE text from the
            Work, provided that such additional attribution notices cannot be
            construed as modifying the License.
          </Text>
          <View style={styles.separator}></View>

          <Text style={styles.heading3}>
            You may add Your own copyright statement to Your modifications and
            may provide additional or different license terms and conditions for
            use, reproduction, or distribution of Your modifications, or for any
            such Derivative Works as a whole, provided Your use, reproduction,
            and distribution of the Work otherwise complies with the conditions
            stated in this License.
          </Text>

        </View>
      </ScrollView>
    </>
  );
};

export default ApacheLicense;
