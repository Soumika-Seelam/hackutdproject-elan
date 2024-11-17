import React from 'react';
import {
  Button,
  Checkbox,
  Link,
  Pressable,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const CreateAccountFormScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center', marginTop: 20 },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 24,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Complete your account'}
        </Text>
        {/* sub title */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              marginTop: 8,
              opacity: 0.6,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Lorem ipsum dolor sit amet'}
        </Text>
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        enableAutomaticScroll={true}
        enableOnAndroid={true}
        style={StyleSheet.applyWidth(
          {
            marginBottom: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 30,
          },
          dimensions.width
        )}
      >
        {/* First Name */}
        <View>
          {/* First Name */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
              },
              dimensions.width
            )}
          >
            {'First Name'}
          </Text>
          {/* First Name Input */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newFirstNameInputValue => {
              try {
                setTextInputValue(newFirstNameInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            editable={true}
            placeholder={'Enter your first name'}
            placeholderTextColor={theme.colors.text.light}
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
                marginTop: 12,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Last Name */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
        >
          {/* Last Name */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
              },
              dimensions.width
            )}
          >
            {'Last Name'}
          </Text>
          {/* Last Name Input */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newLastNameInputValue => {
              try {
                setTextInputValue(newLastNameInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            editable={true}
            placeholder={'Enter your last name'}
            placeholderTextColor={theme.colors.text.light}
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
                marginTop: 12,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Password */}
        <View>
          {/* Password */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                marginTop: 16,
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
        {/* Confirm Password */}
        <View>
          {/* Password */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                marginTop: 16,
              },
              dimensions.width
            )}
          >
            {'Password'}
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
                  placeholder={'Confirm password'}
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
                  placeholder={'Confirm password'}
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
        {/* Continue with Email */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('EnterOTPScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color_5'],
              borderRadius: 24,
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '700',
              height: 56,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Continue with Email'}
        />
        {/* Login */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
              marginTop: 45,
              opacity: 0.64,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Already have an account? '}
          <Link
            accessible={true}
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            selectable={false}
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                color: palettes.App['Custom Color_5'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
              }),
              dimensions.width
            )}
            title={'Login'}
          />
        </Text>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateAccountFormScreen);
