import React from 'react';
import {
  Button,
  Checkbox,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  TextInput,
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

const MakeTodaysPlaneScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.poyo.gold },
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
            justifyContent: 'center',
            marginTop: 12,
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
          {'Today’s Plane'}
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
          { height: dimensions.height, paddingBottom: 85 },
          dimensions.width
        )}
      >
        {/* Search */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: palettes.App['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 24,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 52,
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
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
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
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
          </View>
          {/* Filters */}
          <Pressable>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', justifyContent: 'center' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['Filter'])}
                style={StyleSheet.applyWidth(
                  { height: 18, width: 26 },
                  dimensions.width
                )}
              />
            </View>
          </Pressable>
        </View>
        {/* Category */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginLeft: 16,
              },
              dimensions.width
            )}
          >
            {'Category'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16,
              },
              dimensions.width
            )}
          >
            {/* Hand */}
            <Pressable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 10,
                    height: 100,
                    overflow: 'hidden',
                    width: 74,
                  },
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
                        width: 74,
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
                    {'Hand'}
                  </Text>
                </ImageBackground>
              </View>
            </Pressable>
            {/* Legs */}
            <Pressable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 10,
                    height: 100,
                    overflow: 'hidden',
                    width: 74,
                  },
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
                        width: 74,
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
            {/* Jump */}
            <Pressable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 10,
                    height: 100,
                    overflow: 'hidden',
                    width: 74,
                  },
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
                        width: 74,
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
                    {'Jump'}
                  </Text>
                </ImageBackground>
              </View>
            </Pressable>
            {/* Yoga */}
            <Pressable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 10,
                    height: 100,
                    overflow: 'hidden',
                    width: 74,
                  },
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
                        width: 74,
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
        {/* Workout List */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 30 }, dimensions.width)}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginLeft: 16,
                marginRight: 24,
              },
              dimensions.width
            )}
          >
            {'Workout List'}
          </Text>

          <DraftbitExampleDataApi.FetchUsersGET limit={8}>
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
                  listKey={'szSfYm6S'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderRadius: 8,
                            flexDirection: 'row',
                            height: 80,
                            justifyContent: 'space-between',
                            marginTop: 16,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'flex-start', flexDirection: 'row' },
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
                                { height: 80, width: 70 },
                                dimensions.width
                              )}
                            />
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { marginLeft: 16, width: '65%' },
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
                                  marginTop: 10,
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
                                  marginTop: 8,
                                  opacity: 0.5,
                                },
                                dimensions.width
                              )}
                            >
                              {'Finish this exercise in 15 minutes'}
                            </Text>
                          </View>
                        </View>

                        <View>
                          <Checkbox
                            onPress={newCheckboxValue => {
                              const checkboxValue = newCheckboxValue;
                              try {
                                setCheckboxValue(checkboxValue);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            checkedIcon={'FontAwesome/check-circle'}
                            color={palettes.App['Custom Color_2']}
                            status={checkboxValue}
                            uncheckedColor={palettes.App['Custom Color_2']}
                            uncheckedIcon={'FontAwesome/circle-thin'}
                          />
                        </View>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth(
                    {
                      justifyContent: 'space-evenly',
                      marginTop: 8,
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
        {/* Next Step */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginBottom: 40,
              marginTop: 16,
              paddingLeft: 20,
              paddingRight: 20,
              zIndex: 21,
            },
            dimensions.width
          )}
        >
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('PlanDetailsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App['Custom Color_5'],
                borderRadius: 24,
                fontFamily: 'System',
                fontWeight: '700',
                height: 56,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Next Step'}
          />
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MakeTodaysPlaneScreen);
