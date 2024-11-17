import React from 'react';
import {
  Button,
  Checkbox,
  Circle,
  Divider,
  Icon,
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

const LoginEmailScreen = props => {
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
            marginBottom: 12,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        <Pressable>
          <Circle
            bgColor={palettes.App['Custom Color_2']}
            size={50}
            style={StyleSheet.applyWidth(
              { height: 48, width: 48 },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.App['Custom Color']}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Circle>
        </Pressable>
        {/* Screen Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'center',
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              marginLeft: -20,
            },
            dimensions.width
          )}
        >
          {'Login'}
        </Text>
        {/* Blank */}
        <View />
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        enableAutomaticScroll={true}
        enableOnAndroid={true}
        style={StyleSheet.applyWidth({ paddingBottom: 40 }, dimensions.width)}
      >
        {/* Container */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Email */}
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
            {'Email'}
          </Text>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            editable={true}
            placeholder={'Enter your email address'}
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
          {/* Password Input */}
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
          {/* Forgot Password */}
          <Link
            accessible={true}
            onPress={() => {
              try {
                navigation.navigate('ForgotPasswordScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            selectable={false}
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                alignSelf: 'flex-end',
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                marginTop: 25,
              }),
              dimensions.width
            )}
            title={'Forgot  Password?'}
          />
          {/* Continue with Email */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App['Custom Color_5'],
                borderRadius: 24,
                fontFamily: 'System',
                fontSize: 17,
                fontWeight: '700',
                height: 56,
                marginTop: 35,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Continue with Email'}
          />
          {/* continue with */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 25,
              },
              dimensions.width
            )}
          >
            <Divider
              color={palettes.App['Custom Color_14']}
              style={StyleSheet.applyWidth(
                { height: 1, width: 60 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_14'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Or continue with'}
            </Text>
            <Divider
              color={palettes.App['Custom Color_14']}
              style={StyleSheet.applyWidth(
                { height: 1, width: 60 },
                dimensions.width
              )}
            />
          </View>
          {/* Google Login */}
          <Pressable
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Custom Color_2'],
                  borderLeftWidth: 1,
                  borderRadius: 24,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'center',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['IconGoogle'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Continue with Google'}
              </Text>
            </View>
          </Pressable>
          {/* Apple Login */}
          <Pressable
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Custom Color_2'],
                  borderLeftWidth: 1,
                  borderRadius: 24,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'center',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['IconApple'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Continue with Apple'}
              </Text>
            </View>
          </Pressable>
          {/* Sign Up */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 45,
              },
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
                  fontSize: 16,
                  opacity: 0.64,
                },
                dimensions.width
              )}
            >
              {'Don’t have an account? '}
            </Text>
            <Link
              accessible={true}
              onPress={() => {
                try {
                  navigation.navigate('CreateAccountScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              selectable={false}
              {...GlobalStyles.LinkStyles(theme)['Link'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.LinkStyles(theme)['Link'].style,
                  {
                    color: palettes.App['Custom Color_5'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }
                ),
                dimensions.width
              )}
              title={'Sign Up'}
            />
          </View>
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginEmailScreen);
