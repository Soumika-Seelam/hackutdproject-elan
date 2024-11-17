import React from 'react';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const AboutYourselfScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App['Custom Color'] },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 70, paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        {/* App Name */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'System',
              fontSize: 40,
              fontStyle: 'italic',
              fontWeight: '700',
            },
            dimensions.width
          )}
        >
          {'Muscles'}
        </Text>
        {/* Tag Line */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginTop: 4,
            },
            dimensions.width
          )}
        >
          {'Exercise with style'}
        </Text>
        {/* Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 23,
              marginTop: 50,
            },
            dimensions.width
          )}
        >
          {'Tell us about yourself'}
        </Text>
        {/* Sub Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              lineHeight: 18,
              marginTop: 8,
              opacity: 0.5,
            },
            dimensions.width
          )}
        >
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Gender */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Male */}
          <Pressable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Gender',
                  value: 'male',
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Custom Color_4'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 55,
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <>
                {Constants['Gender'] === 'male' ? null : (
                  <Icon
                    size={24}
                    color={palettes.App['Custom Color_2']}
                    name={'FontAwesome/circle-thin'}
                  />
                )}
              </>
              <>
                {!(Constants['Gender'] === 'male') ? null : (
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Image'].props}
                    source={imageSource(Images['Check'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'].style,
                        { borderRadius: 50, height: 24, width: 24 }
                      ),
                      dimensions.width
                    )}
                  />
                )}
              </>
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 15,
                  },
                  dimensions.width
                )}
              >
                {'Male'}
              </Text>
            </View>
          </Pressable>
          {/* Female */}
          <Pressable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Gender',
                  value: 'female',
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Custom Color_4'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 55,
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <>
                {!(Constants['Gender'] === 'female') ? null : (
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Image'].props}
                    source={imageSource(Images['Check'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'].style,
                        { borderRadius: 50, height: 24, width: 24 }
                      ),
                      dimensions.width
                    )}
                  />
                )}
              </>
              <>
                {Constants['Gender'] === 'female' ? null : (
                  <Icon
                    size={24}
                    color={palettes.App['Custom Color_2']}
                    name={'FontAwesome/circle-thin'}
                  />
                )}
              </>
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 15,
                  },
                  dimensions.width
                )}
              >
                {'Female'}
              </Text>
            </View>
          </Pressable>
        </View>
        {/* Next */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('HeightScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color_5'],
              borderRadius: 28,
              fontFamily: 'Inter_700Bold',
              fontSize: 17,
              height: 55,
              letterSpacing: 1.2,
              marginTop: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Next'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AboutYourselfScreen);
