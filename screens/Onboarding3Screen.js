import React from 'react';
import {
  Button,
  LinearGradient,
  Link,
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

const Onboarding3Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={imageSource(Images['PexelsMarkofitProduction61587731'])}
        style={StyleSheet.applyWidth(
          { height: '100%', justifyContent: 'flex-end', width: '100%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
            dimensions.width
          )}
        >
          <LinearGradient
            endY={100}
            startX={0}
            startY={0}
            color1={palettes.App['Custom Color']}
            color2={'"rgba(0, 0, 0, 0)"'}
            endX={0}
            style={StyleSheet.applyWidth(
              { height: '50%', position: 'absolute', top: 0, width: '100%' },
              dimensions.width
            )}
          />
          <LinearGradient
            startX={0}
            color1={palettes.App['Custom Color']}
            color2={'"rgba(0, 0, 0, 0)"'}
            endX={0}
            endY={0}
            startY={100}
            style={StyleSheet.applyWidth(
              { paddingBottom: 12, width: '100%' },
              dimensions.width
            )}
          >
            {/* heading */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 30,
                  marginTop: 60,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'We will help you to \nAchieve your Dream \nBody'}
            </Text>
            {/* description */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontSize: 15,
                  lineHeight: 22,
                  marginTop: 5,
                  opacity: 0.65,
                  paddingLeft: 40,
                  paddingRight: 40,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy '
              }
            </Text>
            {/* Get Started */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('CreateAccountScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              title={'Get Started'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['GetFit Orange'],
                  borderRadius: 24,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  height: 54,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 30,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'center',
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  marginBottom: 30,
                  marginTop: 30,
                  opacity: 1,
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
                  StyleSheet.compose(
                    GlobalStyles.LinkStyles(theme)['Link'].style,
                    {
                      color: palettes.App['Custom Color_13'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 15,
                    }
                  ),
                  dimensions.width
                )}
                title={'Register'}
              />
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(Onboarding3Screen);
