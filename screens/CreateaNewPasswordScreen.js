import React from 'react';
import {
  Button,
  Checkbox,
  Circle,
  Icon,
  Pressable,
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

const CreateaNewPasswordScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxValue, setCheckboxValue] = React.useState(false);
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
        <Pressable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle bgColor={palettes.App['Custom Color_2']} size={50}>
            <Icon
              size={24}
              color={palettes.App['Custom Color']}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Circle>
        </Pressable>
        {/* Blank */}
        <View />
      </View>
      {/* heading texts */}
      <View
        style={StyleSheet.applyWidth(
          { paddingBottom: 25, paddingTop: 25 },
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
              fontSize: 21,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Create a\nNew Password'}
        </Text>
        {/* sub title */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              marginTop: 8,
              opacity: 0.6,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Enter your new password'}
        </Text>
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        enableAutomaticScroll={false}
        enableOnAndroid={true}
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
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
          {/* Confirm Password */}
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
        {/* Next */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('LoginEmailScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color_5'],
              borderRadius: 24,
              fontFamily: 'System',
              fontSize: 15,
              fontWeight: '700',
              height: 56,
              marginTop: 35,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Next'}
        />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateaNewPasswordScreen);
