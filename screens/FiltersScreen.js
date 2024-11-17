import React from 'react';
import {
  Button,
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  Slider,
  withTheme,
} from '@draftbit/ui';
import { BlurView } from 'expo-blur';
import { Modal, Text, View } from 'react-native';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const FiltersScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [sliderValue, setSliderValue] = React.useState(50);
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
      <Modal
        animationType={'none'}
        supportedOrientations={['portrait', 'landscape']}
        transparent={true}
      >
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'flex-start' },
            dimensions.width
          )}
        >
          <BlurView
            intensity={50}
            tint={'default'}
            style={StyleSheet.applyWidth(
              { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
              dimensions.width
            )}
          />
          {/* Filters View */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App['Custom Color'],
                paddingBottom: 20,
              },
              dimensions.width
            )}
          >
            {/* header */}
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
              {/* Cancel Button */}
              <Pressable>
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
            {/* People Join */}
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
                {'Many People Join'}
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
                style={StyleSheet.applyWidth(
                  { marginTop: 10 },
                  dimensions.width
                )}
                thumbTintColor={palettes.App['GetFit Orange']}
                value={sliderValue}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
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
              style={StyleSheet.applyWidth(
                { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
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
              <SimpleStyleFlatList
                data={Constants['PopularCategories']}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ??
                  listData?.uuid ??
                  index?.toString() ??
                  JSON.stringify(listData)
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'39xqznUR'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: palettes.App['Custom Color_4'],
                          borderLeftWidth: 1,
                          borderRadius: 24,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          flex: 1,
                          flexDirection: 'row',
                          height: 36,
                          marginRight: 12,
                          marginTop: 16,
                          paddingLeft: 12,
                          paddingRight: 12,
                        },
                        dimensions.width
                      )}
                    >
                      <Button
                        accessible={true}
                        iconPosition={'left'}
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors.background.brand,
                            borderRadius: 8,
                            fontFamily: 'System',
                            fontWeight: '700',
                            textAlign: 'center',
                          },
                          dimensions.width
                        )}
                        title={`${listData}`}
                      />
                    </View>
                  );
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={StyleSheet.applyWidth(
                  { flex: 1, flexDirection: 'row', flexWrap: 'wrap' },
                  dimensions.width
                )}
              />
            </View>
            {/* Date Upload */}
            <View
              style={StyleSheet.applyWidth(
                { marginTop: 22, paddingLeft: 16, paddingRight: 16 },
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
                {'Date Upload'}
              </Text>
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
                listKey={'hFvLWW8U'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const flashListData = item;
                  return (
                    <>
                      <Pressable>
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
                      {/* Pressable 2 */}
                      <Pressable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App['GetFit Orange'],
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
                                color: palettes.App['GetFit Orange'],
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
                showsVerticalScrollIndicator={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={StyleSheet.applyWidth(
                  { flex: 1, flexWrap: 'wrap', marginTop: 16 },
                  dimensions.width
                )}
              />
            </View>
            {/* Apply Filter */}
            <Button
              accessible={true}
              iconPosition={'left'}
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
              <Pressable>
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
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(FiltersScreen);
