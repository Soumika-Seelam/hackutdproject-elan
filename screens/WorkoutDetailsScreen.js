import React from 'react';
import {
  Circle,
  CircularProgress,
  Icon,
  Link,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const WorkoutDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.App['Custom Color'],
          gap: 30,
          justifyContent: 'space-between',
          paddingBottom: 20,
        },
        dimensions.width
      )}
    >
      <ImageBackground
        resizeMode={'cover'}
        {...GlobalStyles.ImageBackgroundStyles(theme)['Image Background'].props}
        source={imageSource(Images['Rectangle22440'])}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageBackgroundStyles(theme)['Image Background'].style,
            { flex: null, height: 260 }
          ),
          dimensions.width
        )}
      >
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
              paddingLeft: 16,
              paddingRight: 16,
            },
            dimensions.width
          )}
        >
          {/* Back Click */}
          <Pressable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle bgColor={palettes.App['Custom Color']} size={50}>
              <Icon
                size={24}
                color={palettes.App['Custom Color_2']}
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
              },
              dimensions.width
            )}
          >
            {'Workout Detail'}
          </Text>
          <View />
        </View>
      </ImageBackground>
      {/* Details */}
      <View
        style={StyleSheet.applyWidth(
          { gap: 20, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          ellipsizeMode={'tail'}
          numberOfLines={2}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 22,
            },
            dimensions.width
          )}
        >
          {'Up and Down Stairs'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', gap: 40 },
            dimensions.width
          )}
        >
          {/* Left View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.App['Custom Color_7'],
                  borderRadius: 8,
                  height: 40,
                  justifyContent: 'center',
                  width: 40,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['BxStopwatch1'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </View>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 10,
                  opacity: 0.5,
                },
                dimensions.width
              )}
            >
              {'59  minutes'}
            </Text>
          </View>
          {/* Right View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.App['Custom Color_7'],
                  borderRadius: 8,
                  height: 40,
                  justifyContent: 'center',
                  width: 40,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['BxVideoRecording1'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </View>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 10,
                  opacity: 0.5,
                },
                dimensions.width
              )}
            >
              {'9 Step Videos'}
            </Text>
          </View>
        </View>
      </View>
      {/* Users Joined */}
      <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
        {/* User count */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {'120+ People have joined'}
        </Text>

        <DraftbitExampleDataApi.FetchUsersGET limit={7}>
          {({ loading, error, data, refetchUsers }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={fetchData}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ??
                  listData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(listData)
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'QGtM8cLl'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <Image
                      resizeMode={'cover'}
                      {...GlobalStyles.ImageStyles(theme)['Image'].props}
                      source={imageSource(`${listData?.avatar}`)}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'].style,
                          { borderRadius: 50, height: 48, width: 48 }
                        ),
                        dimensions.width
                      )}
                    />
                  );
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    gap: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                  },
                  dimensions.width
                )}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
      </View>
      {/* Description */}
      <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
        {/* Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {'Description'}
        </Text>
        {/* Details */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.Slate[300],
              fontFamily: 'Inter_300Light',
              lineHeight: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
          }
        </Text>
      </View>
      {/* Build Leg Muscles */}
      <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 16,
              paddingRight: 16,
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
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'Videos'}
          </Text>
          {/* See all */}
          <Link
            accessible={true}
            onPress={() => {
              try {
                navigation.navigate('TodaysPlanAllScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            selectable={false}
            style={StyleSheet.applyWidth(
              { color: palettes.App['GetFit Orange'] },
              dimensions.width
            )}
            title={'See all'}
          />
        </View>

        <DraftbitExampleDataApi.FetchUsersGET limit={3}>
          {({ loading, error, data, refetchUsers }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={fetchData}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ??
                  listData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(listData)
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'cYkQeYg6'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <Pressable
                      onPress={() => {
                        try {
                          navigation.navigate('PlayWorkoutPlaylistScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderRadius: 8,
                            flexDirection: 'row',
                            gap: 10,
                            height: 80,
                            justifyContent: 'space-between',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flex: 1,
                              flexDirection: 'row',
                              gap: 16,
                            },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { borderRadius: 10, overflow: 'hidden' },
                              dimensions.width
                            )}
                          >
                            <Image
                              resizeMode={'cover'}
                              source={imageSource(Images['CategoryHand'])}
                              style={StyleSheet.applyWidth(
                                { height: 70, width: 70 },
                                dimensions.width
                              )}
                            />
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, gap: 8 },
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
                              {'Doing leg stretch'}
                            </Text>

                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  color: palettes.App['Custom Color_2'],
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: 12,
                                  lineHeight: 17,
                                  opacity: 0.5,
                                },
                                dimensions.width
                              )}
                            >
                              {'Finish this exercise in 15 minutes'}
                            </Text>
                          </View>
                        </View>
                        {/* View 2 */}
                        <View>
                          <CircularProgress
                            animationDuration={500}
                            indeterminate={false}
                            isAnimated={true}
                            lineCap={'round'}
                            showTrack={true}
                            startPosition={'top'}
                            trackColor={theme.colors.border.brand}
                            trackLineCap={'round'}
                            color={palettes.App['GetFit Orange']}
                            maximumValue={100}
                            minimumValue={0}
                            style={StyleSheet.applyWidth(
                              { height: 36, width: 36 },
                              dimensions.width
                            )}
                            thickness={2}
                            value={60}
                          />
                          <Icon
                            color={palettes.App['Custom Color_2']}
                            name={'Ionicons/chevron-forward'}
                            size={20}
                            style={StyleSheet.applyWidth(
                              { left: 8, position: 'absolute', top: 8 },
                              dimensions.width
                            )}
                          />
                        </View>
                      </View>
                    </Pressable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                style={StyleSheet.applyWidth(
                  { gap: 16, paddingLeft: 16, paddingRight: 16 },
                  dimensions.width
                )}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WorkoutDetailsScreen);
