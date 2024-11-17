import React from 'react';
import {
  Circle,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  ZStack,
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

const UserProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textAreaValue, setTextAreaValue] = React.useState('');
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
          size={24}
        />
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
          {'User Info'}
        </Text>
        <View />
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ paddingBottom: 20 }, dimensions.width)}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('UserInfoScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <>
              {Constants['ProfilePicture'] ? null : (
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(Images['UserImage'])}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 50, height: 80, width: 80 }
                    ),
                    dimensions.width
                  )}
                />
              )}
            </>
            {/* Profile Picture */}
            <>
              {!Constants['ProfilePicture'] ? null : (
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={imageSource(`${Constants['ProfilePicture']}`)}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 50, height: 80, width: 80 }
                    ),
                    dimensions.width
                  )}
                />
              )}
            </>
          </Pressable>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Arvind Limba'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginTop: 6,
                opacity: 0.5,
              },
              dimensions.width
            )}
          >
            {'A Sports Lover'}
          </Text>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['Custom Color_5'],
                borderRadius: 8,
                height: 40,
                justifyContent: 'center',
                width: 111,
              },
              dimensions.width
            )}
          >
            <Pressable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={palettes.App['Custom Color_2']}
                  name={'Entypo/plus'}
                  size={20}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 13,
                      marginLeft: 6,
                    },
                    dimensions.width
                  )}
                >
                  {'Follow'}
                </Text>
              </View>
            </Pressable>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: palettes.App['Custom Color_8'],
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                height: 40,
                justifyContent: 'center',
                marginLeft: 20,
                width: 111,
              },
              dimensions.width
            )}
          >
            <Pressable>
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Icon
                  color={palettes.App['Custom Color_8']}
                  name={'Feather/plus-square'}
                  size={20}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_8'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 13,
                      marginLeft: 6,
                    },
                    dimensions.width
                  )}
                >
                  {'Message'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* Stats */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.App['Custom Color_9'],
                  borderRadius: 8,
                  height: 50,
                  justifyContent: 'center',
                  width: 50,
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

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: 4,
                  marginTop: 5,
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
                    fontFamily: 'Inter_400Regular',
                    fontSize: 11,
                    marginLeft: 6,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Workout'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 21,
                    marginLeft: 6,
                    marginTop: 4,
                  },
                  dimensions.width
                )}
              >
                {'153'}
              </Text>
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.App['GetFit Orange'],
                  borderRadius: 8,
                  height: 50,
                  justifyContent: 'center',
                  width: 50,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['BxsHot1'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: 4,
                  marginTop: 5,
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
                    fontFamily: 'Inter_400Regular',
                    fontSize: 11,
                    marginLeft: 6,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Calories'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 21,
                    marginLeft: 6,
                    marginTop: 4,
                  },
                  dimensions.width
                )}
              >
                {'320'}
              </Text>
            </View>
          </View>
        </View>
        {/* Report  */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 30,
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
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {"Today's Report"}
          </Text>
          {/* Cards Container */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Left side */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.App['Custom Color_10'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.App['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Image
                    resizeMode={'cover'}
                    source={imageSource(Images['BxsHot1'])}
                    style={StyleSheet.applyWidth(
                      { height: 16, left: 8, top: 5, width: 16 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Calories Burned'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'245'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Kcal'}
                  </Text>
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.App['Custom Color_12'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.App['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Image
                    resizeMode={'cover'}
                    source={imageSource(Images['BxsBowlRice1'])}
                    style={StyleSheet.applyWidth(
                      { height: 16, left: 8, top: 5, width: 16 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Carbohydrate'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'123'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Gram'}
                  </Text>
                </Text>
              </View>
            </View>
            {/* Right side */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 20 },
                dimensions.width
              )}
            >
              {/* view */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.App['Custom Color_11'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.App['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Icon
                    color={palettes.App['Custom Color_2']}
                    name={'AntDesign/heart'}
                    size={15}
                    style={StyleSheet.applyWidth(
                      { left: 8, top: 8 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Heart Rate'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'78'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Bpm'}
                  </Text>
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: palettes.App['Custom Color_13'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <ZStack
                  reversed={false}
                  {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                    dimensions.width
                  )}
                >
                  <Circle
                    bgColor={palettes.App['Custom Color_2']}
                    size={30}
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.37,
                      },
                      dimensions.width
                    )}
                  />
                  <Image
                    resizeMode={'cover'}
                    source={imageSource(Images['BxDumbbell'])}
                    style={StyleSheet.applyWidth(
                      { height: 16, left: 8, top: 5, width: 16 },
                      dimensions.width
                    )}
                  />
                </ZStack>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Workout'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'53'}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Video'}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(UserProfileScreen);
