import React from 'react';
import {
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { otherUser: 'Arvind Limba' };

const MessageDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasBottomSafeArea={true}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.App['Custom Color'],
          justifyContent: 'space-between',
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
          <Circle bgColor={palettes.App['Custom Color_2']} size={50}>
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
          {props.route?.params?.otherUser ?? defaultProps.otherUser}
        </Text>
        <View />
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        enableAutomaticScroll={true}
        enableOnAndroid={true}
        extraHeight={10}
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 20,
            marginTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Chats */}
        <DraftbitExampleDataApi.FetchUsersGET limit={3}>
          {({ loading, error, data, refetchUsers }) => {
            const chatsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={chatsData}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ??
                  listData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(listData)
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'l1SkN4ZB'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      <>
                        {!(listData?.id !== 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                overflow: 'hidden',
                                paddingBottom: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['Image']
                                .props}
                              source={imageSource(`${listData?.avatar}`)}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Image']
                                    .style,
                                  { borderRadius: 50, height: 32, width: 32 }
                                ),
                                dimensions.width
                              )}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      palettes.App['Custom Color_2'],
                                    borderBottomRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    flex: 1,
                                    marginLeft: 10,
                                    marginRight: 20,
                                    paddingBottom: 15,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 15,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App['Custom Color'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      lineHeight: 20,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: palettes.App['Custom Color_2'],
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 11,
                                    lineHeight: 20,
                                    marginBottom: 6,
                                    marginLeft: 10,
                                    marginTop: 4,
                                    opacity: 0.5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'9:41 AM'}
                              </Text>
                            </View>
                          </View>
                        )}
                      </>
                      <>
                        {!(listData?.id === 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                paddingBottom: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      palettes.App['Custom Color_5'],
                                    borderBottomLeftRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    flex: 1,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    paddingBottom: 15,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 15,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App['Custom Color_2'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      lineHeight: 20,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: palettes.App['Custom Color_2'],
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 11,
                                    lineHeight: 20,
                                    marginBottom: 6,
                                    marginRight: 10,
                                    marginTop: 4,
                                    opacity: 0.5,
                                    textAlign: 'right',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'9:41 AM'}
                              </Text>
                            </View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['Image']
                                .props}
                              source={imageSource(`${listData?.avatar}`)}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Image']
                                    .style,
                                  { borderRadius: 50, height: 32, width: 32 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        )}
                      </>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
        {/* Message Tray */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors.background.brand,
              borderBottomWidth: 1,
              borderColor: palettes.App['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 24,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 52,
              justifyContent: 'space-between',
              marginTop: 10,
              paddingLeft: 8,
              paddingRight: 8,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, justifyContent: 'center' },
              dimensions.width
            )}
          >
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
              placeholder={'Type your message...'}
              placeholderTextColor={palettes.App['Custom Color_4']}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  marginLeft: 8,
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
            <Pressable>
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['Group162742'])}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 32 },
                  dimensions.width
                )}
              />
            </Pressable>
          </View>
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MessageDetailsScreen);
