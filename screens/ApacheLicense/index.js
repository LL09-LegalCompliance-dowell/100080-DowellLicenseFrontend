import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Linking} from 'react-native';

import MyTextInput from '../../components/MyTextInput';
import colors from '../../../assets/colors/colors';
import styles from './style';
import AppBottun from '../../components/AppBottun';
import Header from '../../components/Header';

const ApacheLicense = () => {
  const [result, setResult] = useState();

  const results = () => {};
  return (
    <>
      <Header title="Apache License" />

      <ScrollView style={styles.container}>
        {/* Upper Container */}
        <View style={styles.upperContainer}>
          <Image source={require('../../../assets/images/apache.png')} />
          <Text style={styles.heading}>Apache License</Text>
          <Text style={styles.heading1}>Version 2.0, January 2004</Text>
          <Text>
            The 2.0 version of the Apache License, approved by the ASF in 2004,
            All packages produced by the ASF are implicitly licensed under the
            Apache License, Version 2.0, unless otherwise explicitly stated.
          </Text>
        </View>
        {/* Lower Container */}
        <View style={styles.middleContainer}>
          <Text style={styles.heading1}>1. Text Version</Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL('https://www.apache.org/licenses/LICENSE-2.0.txt')
            }>
            Apache License
          </Text>
          <Text style={styles.heading2}>SPDX short identifier:</Text>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL('https://www.apache.org/licenses/LICENSE-2.0.txt')
            }>
            Apache License 2.0 | Software Package Data Exchange (SPDX)
          </Text>
          <Text style={styles.heading2}>OSI Approved License:</Text>

          <Text style={styles.heading1}>2. Category</Text>
          <Text style={styles.heading2}>Permissive</Text>

          <Text style={styles.heading1}>3. Disclaimer</Text>
          <Text style={styles.heading2}>
            Copyright [yyyy] [name of copyright owner] Licensed under the Apache
            License, Version 2.0 (the "License"); you may not use this file
            except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0 Unless
            required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
            implied. See the License for the specific language governing
            permissions and limitations under the License.
          </Text>

          <Text style={styles.heading1}>
            4. Attributions of Permissive license{' '}
          </Text>
          <Text style={styles.heading2}>
            TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
            Definitions. Grant of Copyright License. Grant of Patent License.
            Redistribution. Submission of Contributions. Trademarks. Disclaimer
            of Warranty. Limitation of Liability. Accepting Warranty or
            Additional Liability
          </Text>

          <Text style={styles.heading1}>
            5. Permissions, Conditions & Limitations:{' '}
          </Text>
          <Text style={styles.heading2}>
            One thing to consider is that you cannot combine Apache License 2.0
            with GPL v2 Another aspect to consider is that a “contributor can
            modify the code and then sell it as proprietary software” .
          </Text>

          <Text style={styles.heading1}>
            6. Risks for choosing Apache License 2.0
          </Text>
          <Text style={styles.heading2}>
            One thing to consider is that you cannot combine Apache License 2.0
            with GPL v2 Another aspect to consider is that a “contributor can
            modify the code and then sell it as proprietary software” .
          </Text>

          <Text style={styles.heading1}>3. Disclaimer</Text>
          <Text style={styles.heading2}>
            Copyright [yyyy] [name of copyright owner] Licensed under the Apache
            License, Version 2.0 (the "License"); you may not use this file
            except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0 Unless
            required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
            implied. See the License for the specific language governing
            permissions and limitations under the License.
          </Text>

          <Text style={styles.heading1}>7. Compatible Licenses</Text>
          <Text style={styles.heading2}>GPL V3</Text>

          <Text style={styles.heading1}>8. Non- Compatible Licenses</Text>
          <Text style={styles.heading2}>GPL/LGPL v1 and v2</Text>

          <Text style={styles.heading1}>9. Limitation of Liability.</Text>
          <Text style={styles.heading2}>
            In no event and under no legal theory, whether in tort (including
            negligence), contract, or otherwise, unless required by applicable
            law (such as deliberate and grossly negligent acts) or agreed to in
            writing, shall any Contributor be liable to You for damages,
            including any direct, indirect, special, incidental, or
            consequential damages of any character arising as a result of this
            License or out of the use or inability to use the Work (including
            but not limited to damages for loss of goodwill, work stoppage,
            computer failure or malfunction, or any and all other commercial
            damages or losses), even if such Contributor has been advised of the
            possibility of such damages.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.heading1}>DISCLAIMER</Text>
          <Text style={styles.heading3}>
            You may reproduce and distribute copies of the Work or Derivative
            Works thereof in any medium, with or without modifications, and in
            Source or Object form, provided that You meet the following
            conditions:
          </Text>
          <Text style={styles.heading3}>
            You must give any other recipients of the Work or Derivative Works a
            copy of this License; and
          </Text>
          <Text style={styles.heading3}>
            You must cause any modified files to carry prominent notices stating
            that You changed the files; and
          </Text>
          <Text style={styles.heading3}>
            You must retain, in the Source form of any Derivative Works that You
            distribute, all copyright, patent, trademark, and attribution
            notices from the Source form of the Work, excluding those notices
            that do not pertain to any part of the Derivative Works; and
          </Text>
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
