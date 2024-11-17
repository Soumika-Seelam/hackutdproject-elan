import React from 'react';
import {
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SecurityScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);

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
          {'Security'}
        </Text>
        {/* View  */}
        <View />
      </View>
      {/* Security Settings */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            borderColor: palettes.App['Custom Color_6'],
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Face ID */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: palettes.App['Custom Color_6'],
              flexDirection: 'row',
              height: 55,
              justifyContent: 'space-between',
              marginTop: 12,
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
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'Face ID'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            activeTrackColor={palettes.App['Custom Color_5']}
            inactiveTrackColor={palettes.App['Custom Color_7']}
            value={switchValue}
          />
        </View>
        {/* Password */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: palettes.App['Custom Color_6'],
              flexDirection: 'row',
              height: 55,
              justifyContent: 'space-between',
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
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'Remember Password'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            activeTrackColor={palettes.App['Custom Color_5']}
            inactiveTrackColor={palettes.App['Custom Color_7']}
            value={switchValue}
          />
        </View>
        {/* Touch ID */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              justifyContent: 'space-between',
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
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'Touch ID'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            activeTrackColor={palettes.App['Custom Color_5']}
            inactiveTrackColor={palettes.App['Custom Color_7']}
            value={switchValue}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SecurityScreen);
