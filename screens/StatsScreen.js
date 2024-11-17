import React, { useEffect, useState } from 'react';
import {
  Circle,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
  ZStack,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, ActivityIndicator } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

// Import API functions
import { fetchTaskStats, fetchCaloriesBurned, fetchHeartRate, fetchWorkouts } from '../api/api'; 

const StatsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();

  // State variables for stats
  const [taskStats, setTaskStats] = useState(null);
  const [calories, setCalories] = useState(null);
  const [heartRate, setHeartRate] = useState(null);
  const [workouts, setWorkouts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        const tasks = await fetchTaskStats();
        const calorieData = await fetchCaloriesBurned();
        const heartRateData = await fetchHeartRate();
        const workoutData = await fetchWorkouts();
        
        setTaskStats(tasks);
        setCalories(calorieData);
        setHeartRate(heartRateData);
        setWorkouts(workoutData);
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
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
        { backgroundColor: palettes.App['Custom Color'] },
        dimensions.width
      )}
    >
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth({ paddingBottom: 20 }, dimensions.width)}
      >
        {/* Profile Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { height: 80, width: 80 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={imageSource(Images['UserImage'])}
              style={StyleSheet.applyWidth(
                { borderRadius: 50, height: 80, width: 80 },
                dimensions.width
              )}
            />
          </View>
          <Text style={StyleSheet.applyWidth(
            { color: palettes.App['Custom Color_2'], fontSize: 18 },
            dimensions.width
          )}>
            {'Arvind Limba'}
          </Text>
          <Text style={StyleSheet.applyWidth(
            { color: palettes.App['Custom Color_2'], fontSize: 12, opacity: 0.5 },
            dimensions.width
          )}>
            {'HackUTD Participant'}
          </Text>
        </View>

        {/* Stats Section */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 },
            dimensions.width
          )}
        >
          {/* Tasks */}
          <View>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 18, color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {'Tasks'}
            </Text>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 22, fontWeight: 'bold', color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {taskStats?.completed || 0}
            </Text>
          </View>

          {/* Calories */}
          <View>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 18, color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {'Calories'}
            </Text>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 22, fontWeight: 'bold', color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {calories?.burned || 0} Kcal
            </Text>
          </View>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 },
            dimensions.width
          )}
        >
          {/* Heart Rate */}
          <View>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 18, color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {'Heart Rate'}
            </Text>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 22, fontWeight: 'bold', color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {heartRate?.bpm || 0} Bpm
            </Text>
          </View>

          {/* Workouts */}
          <View>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 18, color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {'Workouts'}
            </Text>
            <Text style={StyleSheet.applyWidth(
              { fontSize: 22, fontWeight: 'bold', color: palettes.App['Custom Color_2'] },
              dimensions.width
            )}>
              {workouts?.count || 0} Videos
            </Text>
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(StatsScreen);
