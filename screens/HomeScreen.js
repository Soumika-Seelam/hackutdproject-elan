import React, { useEffect, useState } from 'react';
import {
  Circle,
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, Image, ImageBackground, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

// Import the API functions
import { fetchSleepData, fetchWeatherData, fetchRouteData } from '../api/api'; 

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();

  // State for API Data
  const [sleepData, setSleepData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [routeData, setRouteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const sleep = await fetchSleepData();
        const weather = await fetchWeatherData();
        const route = await fetchRouteData('Dallas, TX', 'Frisco, TX'); // Example cities
        
        setSleepData(sleep);
        setWeatherData(weather);
        setRouteData(route);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: palettes.poyo.seaweed,
          borderColor: palettes.poyo.seaweed,
        },
        dimensions.width
      )}
    >
      <ImageBackground
        resizeMode={'cover'}
        source={imageSource(Images['sunset'])}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.App['Custom Color'],
            height: '100%',
            width: '100%',
          },
          dimensions.width
        )}
      >
        <SimpleStyleScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
          style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
        >
          {/* Existing Header & Greeting */}
          {/* Add Sleep Data Display */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 24, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            <Text style={StyleSheet.applyWidth(
              { color: palettes.App['Custom Color_2'], fontSize: 16 },
              dimensions.width
            )}>
              Sleep Data: {sleepData?.summary || 'No data available'}
            </Text>
          </View>

          {/* Add Weather Data */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 24, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            <Text style={StyleSheet.applyWidth(
              { color: palettes.App['Custom Color_2'], fontSize: 16 },
              dimensions.width
            )}>
              Weather: {weatherData?.temperature || 'N/A'}°C
            </Text>
          </View>

          {/* Add Route Data */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 24, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            <Text style={StyleSheet.applyWidth(
              { color: palettes.App['Custom Color_2'], fontSize: 16 },
              dimensions.width
            )}>
              Route Distance: {routeData?.routes[0]?.legs[0]?.distance?.text || 'N/A'}
            </Text>
          </View>

          {/* Existing Content */}
        </SimpleStyleScrollView>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
