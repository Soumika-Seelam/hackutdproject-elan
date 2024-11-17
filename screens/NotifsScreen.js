import React from 'react';
import {
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { fetchWeather, fetchLocationSuggestions, analyzeProductivity } from '../api'; // Import your API functions
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import palettes from '../themes/palettes';

const NotifsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  const [weatherNotif, setWeatherNotif] = React.useState('');
  const [locationNotif, setLocationNotif] = React.useState('');
  const [productivityNotif, setProductivityNotif] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const mockProductivityData = {
    tasksCompleted: 5,
    focusHours: 3,
    sleepQuality: 80,
  };

  React.useEffect(() => {
    if (useIsFocused()) {
      const fetchNotificationsData = async () => {
        setLoading(true);
        try {
          const weatherData = await fetchWeather('current-location');
          setWeatherNotif(`Today's weather: ${weatherData.description}`);

          const locationData = await fetchLocationSuggestions('lat', 'lng');
          setLocationNotif(`Recommended place: ${locationData[0]?.name}`);

          const productivityData = await analyzeProductivity(mockProductivityData);
          setProductivityNotif(
            `Boost your productivity by focusing on ${productivityData.suggestion}`
          );
        } catch (error) {
          console.error('Error fetching notifications:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchNotificationsData();
    }
  }, [useIsFocused()]);

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.App['Custom Color_3'],
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
          <Circle
            bgColor={palettes.App['Custom Color_2']}
            size={50}
            style={StyleSheet.applyWidth(
              { height: 5, width: 5 },
              dimensions.width
            )}
          >
            <Icon
              color={palettes.App['Custom Color']}
              name={'Ionicons/arrow-back-sharp'}
              size={20}
            />
          </Circle>
        </Pressable>
        <Text
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
          {'Notifications'}
        </Text>
        <View />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={palettes.App['Custom Color']} />
      ) : (
        <SimpleStyleFlatList
          data={[
            { title: 'Weather Update', description: weatherNotif },
            { title: 'Location Suggestion', description: locationNotif },
            { title: 'Productivity Tip', description: productivityNotif },
          ]}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: palettes.App['Custom Color'],
                marginBottom: 10,
                padding: 16,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: palettes.App['Custom Color_2'],
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: palettes.App['Custom Color_2'],
                  marginTop: 4,
                }}
              >
                {item.description}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </ScreenContainer>
  );
};

export default withTheme(NotifsScreen);
