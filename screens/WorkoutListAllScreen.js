import React from 'react';
import {
  Circle,
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
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const WorkoutListAllScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.poyo.skyan,
          borderColor: palettes.poyo.skyan,
        },
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
            marginBottom: 10,
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
          <Circle
            bgColor={palettes.App['Custom Color_2']}
            size={48}
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
              marginLeft: -48,
            },
            dimensions.width
          )}
        >
          {'Brain Boosters'}
        </Text>
        {/* Blank */}
        <View />
      </View>

      <SimpleStyleScrollView
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        bounces={true}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth(
          { height: dimensions.height - 50, marginTop: 20, paddingBottom: 50 },
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
          {/* filters */}
          <Pressable>
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
          style={StyleSheet.applyWidth(
            { marginLeft: '2%', marginRight: '2%', marginTop: 20 },
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
                    borderRadius: 12,
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
                    {'Music'}
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
                    borderRadius: 15,
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
                    borderRadius: 15,
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
                    borderRadius: 15,
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

        <DraftbitExampleDataApi.FetchUsersGET limit={20}>
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
                listKey={'B1RTjwc7'}
                nestedScrollEnabled={false}
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
                      style={StyleSheet.applyWidth(
                        {
                          height: 181,
                          marginLeft: '2%',
                          marginRight: '2%',
                          marginTop: 16,
                          width: '46%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Image */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderRadius: 8,
                            flex: 1,
                            height: 181,
                            overflow: 'hidden',
                          },
                          dimensions.width
                        )}
                      >
                        <ImageBackground
                          resizeMode={'cover'}
                          source={imageSource(Images['CategoryHand'])}
                          style={StyleSheet.applyWidth(
                            { height: 110, width: '100%' },
                            dimensions.width
                          )}
                        >
                          <SimpleStyleFlatList
                            data={Constants['Tags']}
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
                                      height: 25,
                                      justifyContent: 'center',
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
                                        color: palettes.App['Custom #ffffff'],
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
                            horizontal={true}
                            style={StyleSheet.applyWidth(
                              { flexDirection: 'row' },
                              dimensions.width
                            )}
                          />
                        </ImageBackground>

                        <View
                          style={StyleSheet.applyWidth(
                            { borderRadius: 8, marginTop: -5 },
                            dimensions.width
                          )}
                        >
                          {/* Title */}
                          <Text
                            accessible={true}
                            selectable={false}
                            numberOfLines={1}
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
                          {/* Description */}
                          <Text
                            accessible={true}
                            selectable={false}
                            numberOfLines={1}
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
                      </View>
                    </Pressable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                numColumns={2}
                style={StyleSheet.applyWidth(
                  { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
                  dimensions.width
                )}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(WorkoutListAllScreen);
