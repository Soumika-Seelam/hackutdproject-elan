import React from 'react';
import {
  Button,
  Divider,
  Link,
  Pressable,
  ScreenContainer,
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

const LoginScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.poyo.seaweed, justifyContent: 'center' },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth({ paddingBottom: 35 }, dimensions.width)}
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
          {'Hi, Welcome Back! '}
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
          {'Good Afternoon!'}
        </Text>
        {/* Image 2 */}
        <Image
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          resizeMode={'cover'}
          source={imageSource(Images['_4'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 130,
              width: 130,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingLeft: 20, paddingRight: 20 },
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
          placeholderTextColor={palettes.poyo.teal}
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
        {/* Fotgot password */}
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
          title={'Forgot Password?'}
        />
        {/* Continue with Email */}
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
          title={'Continue with Email'}
        />
        {/* Continue with */}
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
        {/* Continue with Google */}
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
        {/* Continue with apple */}
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

        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'center',
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              marginTop: 45,
              opacity: 0.64,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Don’t have an account? '}
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
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                color: palettes.App['Custom Color_5'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
              }),
              dimensions.width
            )}
            title={'Sign Up'}
          />
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
