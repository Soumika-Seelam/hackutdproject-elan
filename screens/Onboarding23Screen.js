import React from 'react';
import {
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const Onboarding23Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        {...GlobalStyles.ImageBackgroundStyles(theme)['Image Background'].props}
        resizeMode={'cover'}
        source={imageSource(Images['PexelsNappy93607512'])}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageBackgroundStyles(theme)['Image Background'].style,
            { height: '70%', justifyContent: 'flex-end' }
          ),
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color'],
              borderTopRightRadius: 50,
              bottom: 0,
              gap: 30,
              justifyContent: 'space-around',
              left: 0,
              paddingBottom: 45,
              paddingLeft: 25,
              paddingTop: 25,
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* Texts */}
          <View>
            {/* heading */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 30,
                  lineHeight: 40,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {'Monitor your Body \nChanges Easily'}
            </Text>
            {/* description */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontSize: 15,
                  lineHeight: 25,
                  marginTop: 10,
                  opacity: 1,
                  paddingRight: 40,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {
                'Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,'
              }
            </Text>
          </View>
          {/* Next */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 20,
              },
              dimensions.width
            )}
          >
            {/* Next */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('Onboarding22Screen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Circle bgColor={palettes.App['GetFit Orange']} size={60}>
                <Icon
                  size={24}
                  color={palettes.App['Custom Color_2']}
                  name={'Entypo/chevron-right'}
                />
              </Circle>
            </Pressable>
            {/* Skip */}
            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('Onboarding3Screen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    justifyContent: 'center',
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
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
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Skip'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(Onboarding23Screen);
