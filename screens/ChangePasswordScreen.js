import React from 'react';
import {
  Button,
  Checkbox,
  IconButton,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ChangePasswordScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInput3Value, setTextInput3Value] = React.useState('');
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
          {'Change Password'}
        </Text>
        <View style={StyleSheet.applyWidth({ height: 48 }, dimensions.width)} />
      </View>
      {/* Desclaimer */}
      <Text
        accessible={true}
        selectable={false}
        style={StyleSheet.applyWidth(
          {
            color: palettes.App['Custom Color_2'],
            fontFamily: 'Inter_500Medium',
            fontSize: 15,
            lineHeight: 21,
            marginBottom: 12,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        {'The new password must be different from the current password'}
      </Text>

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
        {/* Form */}
        <View>
          {/* Password */}
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
              {'Password'}
            </Text>
            {/* Password */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              {/* Pasword Input_hide */}
              <>
                {checkboxValue ? null : (
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newPaswordInputHideValue => {
                      try {
                        setTextInputValue(newPaswordInputHideValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    placeholder={'Create a password'}
                    placeholderTextColor={theme.colors.text.light}
                    secureTextEntry={true}
                    style={StyleSheet.applyWidth(
                      {
                        borderBottomWidth: 1,
                        borderColor: palettes.App['Custom Color_4'],
                        borderLeftWidth: 1,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 16,
                        height: 52,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 8,
                        paddingTop: 8,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                    value={textInputValue}
                  />
                )}
              </>
              {/* Pasword Input_show */}
              <>
                {!checkboxValue ? null : (
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newPaswordInputShowValue => {
                      try {
                        setTextInputValue(newPaswordInputShowValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    placeholder={'Create a password'}
                    placeholderTextColor={theme.colors.text.light}
                    secureTextEntry={false}
                    style={StyleSheet.applyWidth(
                      {
                        borderBottomWidth: 1,
                        borderColor: palettes.App['Custom Color_4'],
                        borderLeftWidth: 1,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 16,
                        height: 52,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 8,
                        paddingTop: 8,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                    value={textInputValue}
                  />
                )}
              </>
              {/* Show/Hide */}
              <Checkbox
                onPress={newShowHideValue => {
                  const checkboxValue = newShowHideValue;
                  try {
                    setCheckboxValue(newShowHideValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                checkedIcon={'Entypo/eye'}
                color={palettes.App['Custom Color_2']}
                status={checkboxValue}
                style={StyleSheet.applyWidth(
                  { position: 'absolute', right: 10, top: 15 },
                  dimensions.width
                )}
                uncheckedColor={palettes.App['Custom Color_2']}
                uncheckedIcon={'Entypo/eye-with-line'}
              />
            </View>
          </View>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['App Green'],
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 12,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'✔  There must be at least 8 characters'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['App Green'],
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 12,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'✔  There must be a unique code like @!#'}
          </Text>
          {/* Confirm Password */}
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
              {'Confirm Password'}
            </Text>
            {/* Confirm Password */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              {/* Pasword Input_hide */}
              <>
                {checkboxValue ? null : (
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newPaswordInputHideValue => {
                      try {
                        setTextInputValue(newPaswordInputHideValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    placeholder={'Confirm Password'}
                    placeholderTextColor={theme.colors.text.light}
                    secureTextEntry={true}
                    style={StyleSheet.applyWidth(
                      {
                        borderBottomWidth: 1,
                        borderColor: palettes.App['Custom Color_4'],
                        borderLeftWidth: 1,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 16,
                        height: 52,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 8,
                        paddingTop: 8,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                    value={textInputValue}
                  />
                )}
              </>
              {/* Pasword Input_show */}
              <>
                {!checkboxValue ? null : (
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newPaswordInputShowValue => {
                      try {
                        setTextInputValue(newPaswordInputShowValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    placeholder={'Confirm Password'}
                    placeholderTextColor={theme.colors.text.light}
                    secureTextEntry={false}
                    style={StyleSheet.applyWidth(
                      {
                        borderBottomWidth: 1,
                        borderColor: palettes.App['Custom Color_4'],
                        borderLeftWidth: 1,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 16,
                        height: 52,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 8,
                        paddingTop: 8,
                        width: '100%',
                      },
                      dimensions.width
                    )}
                    value={textInputValue}
                  />
                )}
              </>
              {/* Show/Hide */}
              <Checkbox
                onPress={newShowHideValue => {
                  const checkboxValue = newShowHideValue;
                  try {
                    setCheckboxValue(newShowHideValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                checkedIcon={'Entypo/eye'}
                color={palettes.App['Custom Color_2']}
                status={checkboxValue}
                style={StyleSheet.applyWidth(
                  { position: 'absolute', right: 10, top: 15 },
                  dimensions.width
                )}
                uncheckedColor={palettes.App['Custom Color_2']}
                uncheckedIcon={'Entypo/eye-with-line'}
              />
            </View>
          </View>
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

export default withTheme(ChangePasswordScreen);
