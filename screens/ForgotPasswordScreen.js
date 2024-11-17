import React from 'react';
import {
  Button,
  IconButton,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ForgotPasswordScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
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
          {'Forgot Password'}
        </Text>
        <View style={StyleSheet.applyWidth({ height: 48 }, dimensions.width)} />
      </View>
      {/* Disclaimer */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.App['Custom Color_7'],
            borderRadius: 8,
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 8,
            paddingBottom: 12,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 12,
          },
          dimensions.width
        )}
      >
        <IconButton
          color={palettes.App['Custom Color_2']}
          icon={'Foundation/info'}
          size={30}
        />
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              lineHeight: 18,
              paddingLeft: 10,
            },
            dimensions.width
          )}
        >
          {
            'We will send the OTP code to your email for \nsecurity in forgetting your password'
          }
        </Text>
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        {/* Email */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Email'}
          </Text>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'Email',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            defaultValue={Constants['Email']}
            editable={true}
            placeholder={'someone@draftbit.com'}
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 0.5,
                borderColor: palettes.App['Custom Color_4'],
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                height: 52,
                marginTop: 10,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
          />
        </View>
        {/* Submit */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color_5'],
              borderRadius: 24,
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              height: 56,
              marginBottom: 40,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Submit'}
        />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ForgotPasswordScreen);
