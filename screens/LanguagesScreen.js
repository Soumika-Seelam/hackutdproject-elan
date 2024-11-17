import React from 'react';
import {
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const LanguagesScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [checkboxValue, setCheckboxValue] = React.useState(false);
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
            height: 50,
            justifyContent: 'space-between',
            marginLeft: 8,
            marginTop: 16,
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
              fontFamily: 'Archivo_600SemiBold',
              fontSize: 18,
              marginLeft: -48,
            },
            dimensions.width
          )}
        >
          {'Select a Language'}
        </Text>
        {/* Blank */}
        <View />
      </View>
      {/* Language */}
      <SimpleStyleFlatList
        data={Constants['LanguageArray']}
        horizontal={false}
        inverted={false}
        keyExtractor={(languageData, index) =>
          languageData?.id ??
          languageData?.uuid ??
          index?.toString() ??
          JSON.stringify(languageData)
        }
        keyboardShouldPersistTaps={'never'}
        listKey={'MVX6MFML'}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          const languageData = item;
          return (
            <Pressable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Language',
                    value: languageData,
                  });
                  navigation.goBack();
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
                    borderColor: palettes.App['Custom Color_6'],
                    borderLeftWidth: 1,
                    borderRadius: 5,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 48,
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    paddingLeft: 15,
                  },
                  dimensions.width
                )}
              >
                {/* Checked Icon */}
                <>
                  {!(Constants['Language'] === languageData) ? null : (
                    <Image
                      resizeMode={'cover'}
                      {...GlobalStyles.ImageStyles(theme)['Image'].props}
                      source={imageSource(Images['Check'])}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'].style,
                          { borderRadius: 50, height: 24, width: 24 }
                        ),
                        dimensions.width
                      )}
                    />
                  )}
                </>
                {/* Unchecked Icon */}
                <>
                  {Constants['Language'] === languageData ? null : (
                    <Icon
                      size={24}
                      color={palettes.App['Custom Color_2']}
                      name={'FontAwesome/circle-thin'}
                    />
                  )}
                </>
                {/* Language ~ */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 16,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {languageData}
                </Text>
              </View>
            </Pressable>
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { flex: 1, marginBottom: 20 },
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(LanguagesScreen);
