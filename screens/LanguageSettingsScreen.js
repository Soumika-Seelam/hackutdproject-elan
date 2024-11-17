import React from 'react';
import {
  Circle,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const LanguageSettingsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [OtherLanguagesArr, setOtherLanguagesArr] = React.useState([
    'Chinese',
    'Croatian',
    'Czech',
    'Danish',
    'Filpino',
    'Finland',
  ]);
  const [SuggestedLanguagesArr, setSuggestedLanguagesArr] = React.useState([
    'English (UK)',
    'English',
    'Bahasa Indonesia',
  ]);
  const [switchValue, setSwitchValue] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.App['Custom Color'],
          height: dimensions.height,
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
          {'Language'}
        </Text>
        <View />
      </View>
      {/* Languages Container */}
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { height: dimensions.height, paddingBottom: 30 },
          dimensions.width
        )}
      >
        {/* Suggested Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: palettes.App['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
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
                color: palettes.App['Custom #ffffff'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginBottom: 8,
                marginTop: 5,
                opacity: 0.6,
              },
              dimensions.width
            )}
          >
            {'Suggested Languages'}
          </Text>
          <SimpleStyleFlatList
            data={SuggestedLanguagesArr}
            horizontal={false}
            inverted={false}
            keyExtractor={(listData, index) =>
              listData?.id ??
              listData?.uuid ??
              index?.toString() ??
              JSON.stringify(listData)
            }
            keyboardShouldPersistTaps={'never'}
            listKey={'iKlMZj0D'}
            nestedScrollEnabled={false}
            numColumns={1}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => {
              const listData = item;
              return (
                <Pressable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: palettes.App['Custom Color_4'],
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                        marginLeft: 8,
                        marginRight: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App['Custom Color_2'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {listData}
                    </Text>
                    <>
                      {!(listData === Constants['Language']) ? null : (
                        <Circle
                          {...GlobalStyles.CircleStyles(theme)['Circle'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.CircleStyles(theme)['Circle'].style,
                              {
                                backgroundColor: palettes.App['Custom Color_5'],
                                height: 24,
                                width: 24,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={palettes.App['Custom Color_2']}
                            name={'MaterialCommunityIcons/check'}
                            size={16}
                          />
                        </Circle>
                      )}
                    </>
                  </View>
                </Pressable>
              );
            }}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
          />
        </View>
        {/* Other Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: palettes.App['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
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
                color: palettes.App['Custom #ffffff'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginBottom: 8,
                marginTop: 5,
                opacity: 0.6,
              },
              dimensions.width
            )}
          >
            {'Other Languages'}
          </Text>
          <SimpleStyleFlatList
            data={OtherLanguagesArr}
            horizontal={false}
            inverted={false}
            keyExtractor={(listData, index) =>
              listData?.id ??
              listData?.uuid ??
              index?.toString() ??
              JSON.stringify(listData)
            }
            keyboardShouldPersistTaps={'never'}
            listKey={'QKBCn0fk'}
            nestedScrollEnabled={false}
            numColumns={1}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => {
              const listData = item;
              return (
                <Pressable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: palettes.App['Custom Color_4'],
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                        marginLeft: 8,
                        marginRight: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App['Custom Color_2'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {listData}
                    </Text>
                    <>
                      {!(listData === Constants['Language']) ? null : (
                        <Circle
                          {...GlobalStyles.CircleStyles(theme)['Circle'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.CircleStyles(theme)['Circle'].style,
                              {
                                backgroundColor: palettes.App['Custom Color_5'],
                                height: 24,
                                width: 24,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={palettes.App['Custom Color_2']}
                            name={'MaterialCommunityIcons/check'}
                            size={16}
                          />
                        </Circle>
                      )}
                    </>
                  </View>
                </Pressable>
              );
            }}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LanguageSettingsScreen);
