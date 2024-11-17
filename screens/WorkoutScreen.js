import React from 'react';
import {
  Button,
  Circle,
  CircularProgress,
  Icon,
  Link,
  Pressable,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Slider,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Modal,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const WorkoutScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [FilterModal, setFilterModal] = React.useState(false);
  const [SelectedCategory, setSelectedCategory] = React.useState('Foot');
  const [SelectedDate, setSelectedDate] = React.useState('1 Day ago');
  const [sliderValue, setSliderValue] = React.useState(60);
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
            height: 60,
            justifyContent: 'center',
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
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
          {'Workout'}
        </Text>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth(
          { gap: 30, paddingBottom: 80 },
          dimensions.width
        )}
      >
        {/* Search */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          {/* Search Field */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: palettes.App['Custom Color_4'],
                borderRadius: 24,
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.App['Custom Color_4']}
              name={'Feather/search'}
            />
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
              placeholder={'Search...'}
              placeholderTextColor={palettes.App['Custom Color_4']}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: palettes.App['Custom Color_2'],
                  flex: 1,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 15,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
            {/* filters */}
            <Pressable
              onPress={() => {
                try {
                  setFilterModal(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={palettes.App['Custom Color_4']}
                  name={'Ionicons/filter'}
                />
              </View>
            </Pressable>
          </View>
        </View>
        {/* Category */}
        <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
          {/* Heading */}
          <View
            style={StyleSheet.applyWidth(
              { paddingLeft: 16, paddingRight: 16 },
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
              {'Category'}
            </Text>
          </View>
          {/* Cards */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                gap: 10,
                paddingLeft: 16,
                paddingRight: 16,
              },
              dimensions.width
            )}
          >
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* Hand */}
              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    { borderRadius: 12, height: 100, overflow: 'hidden' },
                    dimensions.width
                  )}
                >
                  <ImageBackground
                    {...GlobalStyles.ImageBackgroundStyles(theme)[
                      'Image Background'
                    ].props}
                    resizeMode={'cover'}
                    source={imageSource(Images['CategoryHand'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].style,
                        {
                          alignItems: 'center',
                          borderRadius: 15,
                          height: 100,
                          justifyContent: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: palettes.App['Custom Color_2'],
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 15,
                            textTransform: 'capitalize',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Arms'}
                    </Text>
                  </ImageBackground>
                </View>
              </Pressable>
            </View>
            {/* View 2 */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* Legs */}
              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    { borderRadius: 15, height: 100, overflow: 'hidden' },
                    dimensions.width
                  )}
                >
                  <ImageBackground
                    {...GlobalStyles.ImageBackgroundStyles(theme)[
                      'Image Background'
                    ].props}
                    resizeMode={'cover'}
                    source={imageSource(Images['PexelsNappy93607512'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].style,
                        {
                          alignItems: 'center',
                          borderRadius: 15,
                          height: 100,
                          justifyContent: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: palettes.App['Custom Color_2'],
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 15,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Legs'}
                    </Text>
                  </ImageBackground>
                </View>
              </Pressable>
            </View>
            {/* View 3 */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* Jump */}
              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    { borderRadius: 15, height: 100, overflow: 'hidden' },
                    dimensions.width
                  )}
                >
                  <ImageBackground
                    {...GlobalStyles.ImageBackgroundStyles(theme)[
                      'Image Background'
                    ].props}
                    resizeMode={'cover'}
                    source={imageSource(Images['Rectangle224291'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].style,
                        {
                          alignItems: 'center',
                          borderRadius: 15,
                          height: 100,
                          justifyContent: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: palettes.App['Custom Color_2'],
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 15,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Cardio'}
                    </Text>
                  </ImageBackground>
                </View>
              </Pressable>
            </View>
            {/* View 4 */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* Yoga */}
              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    { borderRadius: 15, height: 100, overflow: 'hidden' },
                    dimensions.width
                  )}
                >
                  <ImageBackground
                    {...GlobalStyles.ImageBackgroundStyles(theme)[
                      'Image Background'
                    ].props}
                    resizeMode={'cover'}
                    source={imageSource(Images['Rectangle224293'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageBackgroundStyles(theme)[
                          'Image Background'
                        ].style,
                        {
                          alignItems: 'center',
                          borderRadius: 15,
                          height: 100,
                          justifyContent: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: palettes.App['Custom Color_2'],
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 15,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Yoga'}
                    </Text>
                  </ImageBackground>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        {/* Workout List */}
        <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
          {/* Heading */}
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
            {/* Section Heading */}
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
              {'Workout List'}
            </Text>
            {/* See all */}
            <Link
              accessible={true}
              onPress={() => {
                try {
                  navigation.navigate('WorkoutListAllScreen');
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
          {/* List */}
          <View>
            <DraftbitExampleDataApi.FetchUsersGET limit={4}>
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
                    listKey={'eKLUq0YE'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <Pressable
                          onPress={() => {
                            try {
                              navigation.navigate('WorkoutDetailsScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { borderRadius: 8, height: 190, width: 180 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { borderRadius: 8, overflow: 'hidden' },
                                dimensions.width
                              )}
                            >
                              <ImageBackground
                                resizeMode={'cover'}
                                source={imageSource(Images['CategoryHand'])}
                                style={StyleSheet.applyWidth(
                                  { height: 128 },
                                  dimensions.width
                                )}
                              >
                                <SimpleStyleFlatList
                                  data={Constants['Tags']}
                                  horizontal={false}
                                  inverted={false}
                                  keyExtractor={(listData, index) =>
                                    listData?.id ??
                                    listData?.uuid ??
                                    index?.toString() ??
                                    JSON.stringify(listData)
                                  }
                                  keyboardShouldPersistTaps={'never'}
                                  listKey={JSON.stringify(Constants['Tags'])}
                                  nestedScrollEnabled={false}
                                  numColumns={1}
                                  onEndReachedThreshold={0.5}
                                  renderItem={({ item, index }) => {
                                    const listData = item;
                                    return (
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            backgroundColor:
                                              palettes.App['text placeholder'],
                                            borderRadius: 4,
                                            marginBottom: 5,
                                            marginLeft: 10,
                                            marginTop: 10,
                                            paddingBottom: 5,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            paddingTop: 5,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        <Text
                                          accessible={true}
                                          selectable={false}
                                          style={StyleSheet.applyWidth(
                                            {
                                              color:
                                                palettes.App['Custom #ffffff'],
                                              fontFamily: 'Inter_400Regular',
                                              fontSize: 12,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {listData}
                                        </Text>
                                      </View>
                                    );
                                  }}
                                  showsHorizontalScrollIndicator={true}
                                  showsVerticalScrollIndicator={true}
                                  style={StyleSheet.applyWidth(
                                    { flexDirection: 'row' },
                                    dimensions.width
                                  )}
                                />
                              </ImageBackground>
                            </View>

                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  color: palettes.App['Custom Color_2'],
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 15,
                                  marginTop: 10,
                                },
                                dimensions.width
                              )}
                            >
                              {'Up and Down Stairs'}
                            </Text>

                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  color: palettes.App['Custom Color_2'],
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: 12,
                                  marginTop: 8,
                                  opacity: 0.5,
                                },
                                dimensions.width
                              )}
                            >
                              {'Train your thighs and legs'}
                            </Text>
                          </View>
                        </Pressable>
                      );
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={StyleSheet.applyWidth(
                      {
                        flexDirection: 'row',
                        gap: 30,
                        paddingLeft: 16,
                        paddingRight: 16,
                      },
                      dimensions.width
                    )}
                  />
                );
              }}
            </DraftbitExampleDataApi.FetchUsersGET>
          </View>
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
              {'Build Leg Muscles'}
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
                  listKey={'5Ao1gNDC'}
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
      </SimpleStyleScrollView>
      {/* FAB */}
      <View
        style={StyleSheet.applyWidth(
          { bottom: 20, position: 'absolute', right: 20 },
          dimensions.width
        )}
      >
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle
            bgColor={palettes.App['Custom Color_5']}
            size={50}
            style={StyleSheet.applyWidth({ padding: 30 }, dimensions.width)}
          >
            <Icon
              color={palettes.App['Custom Color_2']}
              name={'Feather/plus'}
              size={30}
            />
          </Circle>
        </Pressable>
      </View>

      <Modal
        supportedOrientations={['portrait', 'landscape']}
        animationType={'fade'}
        presentationStyle={'pageSheet'}
        transparent={true}
        visible={FilterModal}
      >
        {/* Filters View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color'],
              flex: 1,
              paddingBottom: 20,
            },
            dimensions.width
          )}
        >
          {/* Heading */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* Cancel */}
            <Pressable
              onPress={() => {
                try {
                  setFilterModal(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { height: 48, width: 48 },
                dimensions.width
              )}
            >
              <Circle bgColor={theme.colors.text.light} size={48}>
                <Icon
                  size={24}
                  color={palettes.App['Custom Color_2']}
                  name={'Entypo/cross'}
                />
              </Circle>
            </Pressable>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Filter'}
            </Text>
            <View
              style={StyleSheet.applyWidth(
                { height: 48, justifyContent: 'center', width: 48 },
                dimensions.width
              )}
            />
          </View>
          {/* Max Minutes */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: 16,
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
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {'Max Minutes'}
            </Text>
            <Slider
              onValueChange={newSliderValue => {
                try {
                  setSliderValue(newSliderValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              maximumValue={100}
              minimumTrackTintColor={palettes.App['GetFit Orange']}
              minimumValue={1}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
              thumbTintColor={palettes.App['GetFit Orange']}
              value={sliderValue}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-end',
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Custom Color_4'],
                  borderLeftWidth: 1,
                  borderRadius: 16,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  height: 40,
                  justifyContent: 'center',
                  width: 100,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_13'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 17,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {sliderValue}
              </Text>
            </View>
          </View>
          {/* Popular Categories */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
          >
            {/* Heading */}
            <View
              style={StyleSheet.applyWidth(
                { paddingLeft: 16, paddingRight: 16 },
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
                    fontSize: 16,
                    textAlign: 'left',
                  },
                  dimensions.width
                )}
              >
                {'Popular Category'}
              </Text>
            </View>
            <SimpleStyleFlashList
              data={Constants['PopularCategories']}
              estimatedItemSize={50}
              inverted={false}
              keyExtractor={(flashListData, index) =>
                flashListData?.id ??
                flashListData?.uuid ??
                index?.toString() ??
                JSON.stringify(flashListData)
              }
              listKey={'CEf2dXpa'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const flashListData = item;
                return (
                  <>
                    <Pressable
                      onPress={() => {
                        try {
                          setSelectedCategory(flashListData);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderBottomWidth: 1,
                            borderColor: palettes.App['Custom Color_4'],
                            borderLeftWidth: 1,
                            borderRadius: 24,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            height: 36,
                            justifyContent: 'center',
                            marginRight: 16,
                            marginTop: 16,
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
                              color: palettes.App['Custom #ffffff'],
                              fontFamily: 'Inter_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData}
                        </Text>
                      </View>
                    </Pressable>
                  </>
                );
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  flexWrap: 'wrap',
                  marginTop: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Date Upload */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 22 }, dimensions.width)}
          >
            {/* Heading */}
            <View
              style={StyleSheet.applyWidth(
                { paddingLeft: 16, paddingRight: 16 },
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
                    fontSize: 16,
                    textAlign: 'left',
                  },
                  dimensions.width
                )}
              >
                {'Date Uploaded'}
              </Text>
            </View>
            <SimpleStyleFlashList
              data={Constants['DateUploadedArray']}
              estimatedItemSize={50}
              inverted={false}
              keyExtractor={(flashListData, index) =>
                flashListData?.id ??
                flashListData?.uuid ??
                index?.toString() ??
                JSON.stringify(flashListData)
              }
              listKey={'7BrNgCTD'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const flashListData = item;
                return (
                  <>
                    <Pressable
                      onPress={() => {
                        try {
                          setSelectedDate(flashListData);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderBottomWidth: 1,
                            borderColor: palettes.App['Custom Color_4'],
                            borderLeftWidth: 1,
                            borderRadius: 24,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            height: 36,
                            justifyContent: 'center',
                            marginRight: 16,
                            marginTop: 16,
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
                              color: palettes.App['Custom #ffffff'],
                              fontFamily: 'Inter_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData}
                        </Text>
                      </View>
                    </Pressable>
                  </>
                );
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  flexWrap: 'wrap',
                  marginTop: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Apply Filter */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setFilterModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App['GetFit Orange'],
                borderRadius: 24,
                fontFamily: 'System',
                fontWeight: '700',
                height: 48,
                marginLeft: 16,
                marginRight: 16,
                marginTop: 32,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Apply Filter'}
          />
          {/* Clear All */}
          <View
            style={StyleSheet.applyWidth(
              {
                height: 48,
                justifyContent: 'center',
                marginLeft: 16,
                marginRight: 16,
                marginTop: 16,
              },
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                try {
                  setFilterModal(false);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_8'],
                    fontFamily: 'Inter_500Medium',
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Clear All'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(WorkoutScreen);
