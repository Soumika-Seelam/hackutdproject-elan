import React from 'react';
import {
  AccordionGroup,
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const HelpandSupportScreen = props => {
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
          {'Help and Support'}
        </Text>
        {/* View  */}
        <View />
      </View>
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
            marginBottom: 12,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
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
      </View>
      {/* FAQ */}
      <DraftbitExampleDataApi.FetchUsersGET limit={10}>
        {({ loading, error, data, refetchUsers }) => {
          const fAQData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <SimpleStyleFlatList
              data={fAQData}
              horizontal={false}
              inverted={false}
              keyExtractor={(listData, index) =>
                listData?.id ??
                listData?.uuid ??
                index?.toString() ??
                JSON.stringify(listData)
              }
              keyboardShouldPersistTaps={'never'}
              listKey={'tXjmK5QZ'}
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
                        paddingBottom: 18,
                        paddingTop: 18,
                      },
                      dimensions.width
                    )}
                  >
                    <AccordionGroup
                      caretSize={24}
                      iconSize={24}
                      label={'Lorem ipsum dolor sit amet'}
                      caretColor={palettes.App['Custom Color_2']}
                      closedColor={palettes.App['Custom Color_2']}
                      openColor={palettes.App['Custom Color_2']}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App['Custom Color_2'],
                          fontFamily: 'Inter_500Medium',
                          fontSize: 16,
                          paddingBottom: 8,
                          paddingTop: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Details */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: palettes.App['Custom Color_2'],
                            fontFamily: 'Inter_400Regular',
                            lineHeight: 20,
                            marginTop: 4,
                            opacity: 0.5,
                          },
                          dimensions.width
                        )}
                      >
                        {listData?.bio}
                      </Text>
                    </AccordionGroup>
                  </View>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              style={StyleSheet.applyWidth(
                {
                  marginBottom: 20,
                  marginTop: 8,
                  paddingBottom: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            />
          );
        }}
      </DraftbitExampleDataApi.FetchUsersGET>
    </ScreenContainer>
  );
};

export default withTheme(HelpandSupportScreen);
