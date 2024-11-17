import React from 'react';
import {
  Button,
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

const ForgotPassword2Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
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
          {'Forgot Password'}
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
          {'Recover your account password'}
        </Text>
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
      >
        {/* Container */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 20, paddingRight: 20 },
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
          {/* Email Input */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newEmailInputValue => {
              try {
                setTextInputValue(newEmailInputValue);
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
          {/* Next */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('CreateaNewPasswordScreen');
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
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ForgotPassword2Screen);
