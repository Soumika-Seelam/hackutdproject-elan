import React from 'react';
import {
  Button,
  Circle,
  DatePicker,
  Icon,
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

const PlanDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.poyo.teal },
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
        <Pressable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              marginLeft: -20,
            },
            dimensions.width
          )}
        >
          {'Today’s Goals'}
        </Text>
        <View />
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        enableAutomaticScroll={true}
        enableOnAndroid={false}
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 35,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={imageSource(Images['_3'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 120,
              width: 120,
            }),
            dimensions.width
          )}
        />
        {/* Plane Name */}
        <View>
          {/* Plane Name */}
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
            {'Goal Name'}
          </Text>
          {/* Plane Input */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newPlaneInputValue => {
              try {
                setTextInputValue(newPlaneInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter a value...'}
            webShowOutline={true}
            editable={true}
            placeholderTextColor={palettes.poyo.cream}
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
                fontSize: 15,
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
        {/* Selected Date */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
          {/* Selected date */}
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
            {'Selected'}
          </Text>
          <DatePicker
            autoDismissKeyboard={true}
            disabled={false}
            inline={false}
            leftIconMode={'inset'}
            mode={'date'}
            onDateChange={newDatePickerValue => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            date={datePickerValue}
            hideLabel={true}
            label={'Select Date'}
            rightIconName={'Feather/calendar'}
            style={StyleSheet.applyWidth(
              { color: theme.colors.border.brand, marginTop: 8 },
              dimensions.width
            )}
            type={'underline'}
          />
        </View>
        {/* Description */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
          {/* Description */}
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
            {'Description'}
          </Text>
          <TextInput
            autoCorrect={true}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              try {
                setTextAreaValue(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            textAlignVertical={'top'}
            webShowOutline={true}
            editable={true}
            placeholder={'Enter your plane name'}
            placeholderTextColor={palettes.poyo.cream}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: palettes.App['Custom Color_4'],
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                height: 140,
                lineHeight: 20,
                marginTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
            value={textAreaValue}
          />
        </View>
        {/* Save */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RootNavigator');
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
              position: 'relative',
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Save'}
        />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PlanDetailsScreen);
