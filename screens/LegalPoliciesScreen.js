import React from 'react';
import {
  IconButton,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const LegalPoliciesScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'space-between',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back */}
        <IconButton
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          color={palettes.App['Custom Color_2']}
          icon={'Ionicons/arrow-back-sharp'}
          size={28}
        />
        {/* Screen Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              marginLeft: -48,
            },
            dimensions.width
          )}
        >
          {'Legal and Policies'}
        </Text>
        <View />
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            marginBottom: 15,
            marginTop: 10,
            paddingBottom: 25,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Terms */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              lineHeight: 20,
              textAlign: 'left',
            },
            dimensions.width
          )}
        >
          {'Terms\n\n'}
          {/* Details */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                lineHeight: 18,
                opacity: 0.4,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {
              'Last updated: November 17, 2024\n\nThis Privacy Policy describes our policies on the collection, use, and disclosure of your information when you use the Service and explains your privacy rights and how the law protects you.\n\nWe use your personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.\n\nInterpretation and Definitions\n\nInterpretation\n\nThe words with initial capital letters have meanings defined under the following conditions. These definitions apply regardless of whether they appear in singular or plural form.\n\nDefinitions\n\n- **Account**: A unique account created for you to access our Service or parts of our Service.\n- **Affiliate**: An entity that controls, is controlled by, or is under common control with a party, with "control" meaning ownership of 50% or more of the shares or voting securities.\n- **Application**: Refers to Elan, the software program provided by the Company.\n- **Company**: (referred to as "the Company", "We", "Us", or "Our" in this Agreement) refers to Elan.\n- **Country**: Texas, United States.\n- **Device**: Any device that can access the Service, such as a computer, cellphone, or tablet.\n- **Personal Data**: Any information that relates to an identified or identifiable individual.\n- **Service**: Refers to the Application.\n- **Service Provider**: Any natural or legal person who processes the data on behalf of the Company, including third-party companies or individuals who facilitate the Service.\n- **Usage Data**: Data collected automatically, generated by the use of the Service or its infrastructure (e.g., page visit duration).\n- **You**: The individual using the Service or the legal entity on behalf of which the individual is using the Service.\n\nCollecting and Using Your Personal Data\n\nTypes of Data Collected\n\n**Personal Data**\n\nWhile using our Service, we may ask you to provide certain personally identifiable informatio'
            }
          </Text>
        </Text>
        {/* Terms */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              lineHeight: 20,
              marginTop: 25,
            },
            dimensions.width
          )}
        >
          {'Changes to the Service and/or Terms:\n\n'}
          {/* Details */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                lineHeight: 18,
                opacity: 0.4,
              },
              dimensions.width
            )}
          >
            {
              "Delete Your Personal Data\n\nYou can request deletion of your personal data by accessing your Account settings or contacting us directly. However, we may retain certain information as required by law.\n\nDisclosure of Your Personal Data\n\nBusiness Transactions: Your data may be transferred if the Company is involved in a merger or acquisition. We will notify you before this occurs.\n\nLaw Enforcement: Your data may be disclosed if required by law or in response to public authorities.\n\nOther Legal Requirements: We may disclose your data to comply with legal obligations, protect the rights of the Company, investigate wrongdoing, or protect users' safety.\n\nSecurity of Your Personal Data\n\nWe use commercially acceptable methods to protect your data but cannot guarantee absolute security.\n\nChildren's Privacy\n\nOur Service does not address anyone under 13 years of age. We do not knowingly collect data from individuals under 13. If you are a parent or guardian aware that your child has provided us with personal data, please contact us. We will remove the data as required.\n\nFor questions or concerns about this Privacy Policy, please contact us directly."
            }
          </Text>
        </Text>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LegalPoliciesScreen);
