import React from 'react';
import {
  Circle,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const PlayWorkoutPlaylistScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [isPlaying, setIsPlaying] = React.useState(false);

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
          { height: 48, justifyContent: 'center' },
          dimensions.width
        )}
      >
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
          style={StyleSheet.applyWidth({ marginLeft: 16 }, dimensions.width)}
        />
      </View>

      <View style={StyleSheet.applyWidth({ height: '50%' }, dimensions.width)}>
        <WebView
          allowFileAccessFromFileURLs={false}
          allowUniversalAccessFromFileURLs={false}
          cacheEnabled={true}
          incognito={false}
          javaScriptCanOpenWindowsAutomatically={false}
          javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          startInLoadingState={false}
          source={imageSource(
            'https://www.youtube.com/embed/c8hjhRqIwHE?controls=0'
          )}
          style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
        />
      </View>
      {/* Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.App['Custom Color'],
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 50,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* About Exercise */}
        <View>
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom #ffffff'],
                fontFamily: 'Inter_500Medium',
                fontSize: 28,
              },
              dimensions.width
            )}
          >
            {'Doing leg stretch'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', marginTop: 16 },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['BxStopwatch1'])}
                style={StyleSheet.applyWidth(
                  { height: 24, opacity: 0.65, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 14,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'15  minutes'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginLeft: 25 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['BxVideoRecording1'])}
                style={StyleSheet.applyWidth(
                  { height: 24, opacity: 0.65, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 14,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'1/9 Step Videos'}
              </Text>
            </View>
          </View>
        </View>
        {/* Timer */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom #ffffff'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 40,
              marginTop: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'20 : 00'}
        </Text>
        {/* Control Panel */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          {/* Back */}
          <Pressable>
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom #ffffff'],
                  fontSize: 21,
                  opacity: 0.65,
                },
                dimensions.width
              )}
            >
              {'Back'}
            </Text>
          </Pressable>
          {/* Play Pause */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', justifyContent: 'center' },
              dimensions.width
            )}
          >
            {/* Tap to pause */}
            <>
              {!isPlaying ? null : (
                <Pressable
                  onPress={() => {
                    try {
                      setIsPlaying(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle bgColor={palettes.App['Custom Color_5']} size={48}>
                    <Icon
                      size={24}
                      color={palettes.App['Custom #ffffff']}
                      name={'Ionicons/pause'}
                      style={StyleSheet.applyWidth(
                        { marginLeft: 2 },
                        dimensions.width
                      )}
                    />
                  </Circle>
                </Pressable>
              )}
            </>
            {/* Tap to Play */}
            <>
              {isPlaying ? null : (
                <Pressable
                  onPress={() => {
                    try {
                      setIsPlaying(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle bgColor={palettes.App['Custom Color_5']} size={48}>
                    <Icon
                      size={24}
                      color={palettes.App['Custom #ffffff']}
                      name={'Ionicons/play'}
                      style={StyleSheet.applyWidth(
                        { marginLeft: 2 },
                        dimensions.width
                      )}
                    />
                  </Circle>
                </Pressable>
              )}
            </>
          </View>
          {/* Next */}
          <Pressable>
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom #ffffff'],
                  fontSize: 21,
                  opacity: 0.65,
                },
                dimensions.width
              )}
            >
              {'Next'}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PlayWorkoutPlaylistScreen);
