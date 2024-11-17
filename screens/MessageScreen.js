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

const MessageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App['Custom Color'], height: '100%' },
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
        {/* Back Button */}
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
          {'Message'}
        </Text>
        {/* View  */}
        <View />
      </View>
      {/* Floating Button */}
      <View
        style={StyleSheet.applyWidth(
          { bottom: 35, position: 'absolute', right: 20, zIndex: 10 },
          dimensions.width
        )}
      >
        {/* Add */}
        <Pressable>
          <Circle bgColor={palettes.App['Custom Color_2']} size={50}>
            <Icon
              size={24}
              color={palettes.App.Studily_Dark_UI}
              name={'Feather/plus'}
            />
          </Circle>
        </Pressable>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { height: dimensions.height - 50 },
          dimensions.width
        )}
      >
        {/* Search Bar */}
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
              marginBottom: 12,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingLeft: 12,
              paddingRight: 12,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={palettes.App['Custom Color_4']}
            name={'AntDesign/search1'}
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
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
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
                source={imageSource(Images['Filter'])}
                style={StyleSheet.applyWidth(
                  { height: 18, width: 26 },
                  dimensions.width
                )}
              />
            </Pressable>
          </View>
        </View>

        <DraftbitExampleDataApi.FetchUsersGET limit={10}>
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
                listKey={'FNmKok2M'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <Pressable
                      onPress={() => {
                        try {
                          navigation.navigate('BottomTabNavigator');
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
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: 18,
                            paddingTop: 18,
                          },
                          dimensions.width
                        )}
                      >
                        <Image
                          resizeMode={'cover'}
                          {...GlobalStyles.ImageStyles(theme)['Image'].props}
                          source={imageSource(`${listData?.avatar}`)}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ImageStyles(theme)['Image'].style,
                              { borderRadius: 50, height: 56, width: 56 }
                            ),
                            dimensions.width
                          )}
                        />
                        {/* Details */}
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, marginLeft: 10, marginRight: 20 },
                            dimensions.width
                          )}
                        >
                          {/* Name ~ */}
                          <Text
                            accessible={true}
                            selectable={false}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App['Custom Color_2'],
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 17,
                                lineHeight: 20,
                                marginTop: 4,
                                opacity: 1,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.fullName}
                          </Text>
                          {/* Message ~ */}
                          <Text
                            accessible={true}
                            selectable={false}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App['Custom Color_2'],
                                fontFamily: 'Inter_400Regular',
                                lineHeight: 20,
                                marginTop: 8,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.bio}
                          </Text>
                        </View>

                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'flex-end' },
                            dimensions.width
                          )}
                        >
                          {/* time ~! */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App['Custom Color_2'],
                                fontFamily: 'Inter_500Medium',
                                fontSize: 13,
                                lineHeight: 20,
                                marginBottom: 6,
                                marginTop: 4,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {'10:20'}
                          </Text>
                          <>
                            {!(listData?.id < 3) ? null : (
                              <Circle
                                bgColor={palettes.App['GetFit Orange']}
                                size={24}
                              >
                                {/* Unread count ~ */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App['Custom Color_2'],
                                      fontFamily: 'Inter_500Medium',
                                      lineHeight: 20,
                                      opacity: 1,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.id}
                                </Text>
                              </Circle>
                            )}
                          </>
                        </View>
                      </View>
                    </Pressable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={false}
                style={StyleSheet.applyWidth(
                  { marginLeft: 20, marginRight: 20, paddingBottom: 20 },
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

export default withTheme(MessageScreen);
