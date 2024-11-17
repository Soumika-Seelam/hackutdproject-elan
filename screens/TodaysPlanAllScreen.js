import React from 'react';
import {
  Circle,
  DatePicker,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const TodaysPlanAllScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
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
        {/* Back click */}
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
          {"All Today's Plan"}
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
        style={StyleSheet.applyWidth(
          { height: dimensions.height - 50, paddingBottom: 30 },
          dimensions.width
        )}
      >
        {/* DateView */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['GetFit Orange'],
              borderRadius: 8,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <DatePicker
            autoDismissKeyboard={true}
            disabled={false}
            inline={false}
            label={'Date'}
            leftIconMode={'inset'}
            mode={'date'}
            onDateChange={newDatePickerValue => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            date={datePickerValue}
            hideLabel={true}
            rightIconName={'Feather/calendar'}
            style={StyleSheet.applyWidth(
              { color: palettes.App['Custom #ffffff'] },
              dimensions.width
            )}
            type={'underline'}
          />
        </View>
        {/* Description */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Heading */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Build Leg Muscles'}
            </Text>

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
                  source={imageSource(Images['EditSquare'])}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
              </Pressable>
            </View>
          </View>
          {/* Details */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_300Light',
                lineHeight: 20,
                marginTop: 8,
                opacity: 0.5,
              },
              dimensions.width
            )}
          >
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
            }
          </Text>
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
                listKey={'FCcf9g1z'}
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
                      style={StyleSheet.applyWidth(
                        { marginTop: 16 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderRadius: 8,
                            flexDirection: 'row',
                            height: 80,
                            justifyContent: 'space-between',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'flex-start',
                              flex: 1,
                              flexDirection: 'row',
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
                                { height: 80, width: 70 },
                                dimensions.width
                              )}
                            />
                          </View>
                          {/* Details */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, marginLeft: 16, marginRight: 16 },
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
                        <Image
                          resizeMode={'cover'}
                          source={imageSource(Images['Progress'])}
                          style={StyleSheet.applyWidth(
                            {
                              height: 36,
                              marginLeft: 10,
                              marginRight: 10,
                              width: 36,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                    </Pressable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                style={StyleSheet.applyWidth(
                  { marginTop: 24, paddingLeft: 20, paddingRight: 20 },
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

export default withTheme(TodaysPlanAllScreen);
