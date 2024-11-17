import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import AboutYourselfScreen from './screens/AboutYourselfScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import CreateAccountFormScreen from './screens/CreateAccountFormScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import CreateaNewPasswordScreen from './screens/CreateaNewPasswordScreen';
import FiltersScreen from './screens/FiltersScreen';
import ForgotPassword2Screen from './screens/ForgotPassword2Screen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HeightScreen from './screens/HeightScreen';
import HelpandSupportScreen from './screens/HelpandSupportScreen';
import HomeScreen from './screens/HomeScreen';
import LanguageSettingsScreen from './screens/LanguageSettingsScreen';
import LanguagesScreen from './screens/LanguagesScreen';
import LegalPoliciesScreen from './screens/LegalPoliciesScreen';
import LocationScreen from './screens/LocationScreen';
import LoginEmailScreen from './screens/LoginEmailScreen';
import LoginScreen from './screens/LoginScreen';
import MakeTodaysPlaneScreen from './screens/MakeTodaysPlaneScreen';
import MessageDetailsScreen from './screens/MessageDetailsScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import NotifsScreen from './screens/NotifsScreen';
import Onboarding21Screen from './screens/Onboarding21Screen';
import Onboarding22Screen from './screens/Onboarding22Screen';
import Onboarding23Screen from './screens/Onboarding23Screen';
import Onboarding3Screen from './screens/Onboarding3Screen';
import OnboardingEnterAppScreen from './screens/OnboardingEnterAppScreen';
import PlanDetailsScreen from './screens/PlanDetailsScreen';
import PlayWorkoutPlaylistScreen from './screens/PlayWorkoutPlaylistScreen';
import ProfileScreen from './screens/ProfileScreen';
import SecurityScreen from './screens/SecurityScreen';
import SelectLanguageScreen from './screens/SelectLanguageScreen';
import StatsScreen from './screens/StatsScreen';
import TodaysPlanAllScreen from './screens/TodaysPlanAllScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import WorkoutDetailsScreen from './screens/WorkoutDetailsScreen';
import WorkoutListAllScreen from './screens/WorkoutListAllScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

function BottomTabNavigator() {
  const theme = useTheme();

  const dimensions = useWindowDimensions();

  const tabBarOrDrawerIcons = {
    HomeScreen: 'AntDesign/home',
    StatsScreen: 'Ionicons/stats-chart-outline',
    NotifsScreen: 'Feather/bell',
    MessageDetailsScreen: 'MaterialCommunityIcons/message-outline',
    ProfileScreen: 'Ionicons/person-outline',
  };

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        tabBarStyle: { borderTopColor: 'transparent' },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon name="AntDesign/home" size={25} color={color} />
          ),
          title: 'Home',
        })}
      />
      <Tab.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon name="Ionicons/stats-chart-outline" size={25} color={color} />
          ),
          title: 'Stats',
        })}
      />
      <Tab.Screen
        name="NotifsScreen"
        component={NotifsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon name="Feather/bell" size={25} color={color} />
          ),
          title: 'Notifs',
        })}
      />
      <Tab.Screen
        name="MessageDetailsScreen"
        component={MessageDetailsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/message-outline"
              size={25}
              color={color}
            />
          ),
          tabBarLabel: 'Chat',
          title: 'Message Details',
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon name="Ionicons/person-outline" size={25} color={color} />
          ),
          title: 'Profile',
        })}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FFFFFF',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="Onboarding21Screen"
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerMode: 'none',
          headerShown: false,
        })}
      >
        <Stack.Screen
          name="PlanDetailsScreen"
          component={PlanDetailsScreen}
          options={({ navigation }) => ({
            title: 'Plan Details',
          })}
        />
        <Stack.Screen
          name="MakeTodaysPlaneScreen"
          component={MakeTodaysPlaneScreen}
          options={({ navigation }) => ({
            title: 'Make Todays Plane',
          })}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={({ navigation }) => ({
            title: 'Create Account',
          })}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            title: 'Login',
          })}
        />
        <Stack.Screen
          name="WorkoutListAllScreen"
          component={WorkoutListAllScreen}
          options={({ navigation }) => ({
            title: 'Workout List All',
          })}
        />
        <Stack.Screen
          name="LegalPoliciesScreen"
          component={LegalPoliciesScreen}
          options={({ navigation }) => ({
            title: 'Legal Policies',
          })}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={({ navigation }) => ({
            title: 'Message',
          })}
        />
        <Stack.Screen
          name="WorkoutDetailsScreen"
          component={WorkoutDetailsScreen}
          options={({ navigation }) => ({
            title: 'Workout Details',
          })}
        />
        <Stack.Screen
          name="TodaysPlanAllScreen"
          component={TodaysPlanAllScreen}
          options={({ navigation }) => ({
            title: "Today's Plan All",
          })}
        />
        <Stack.Screen
          name="WorkoutScreen"
          component={WorkoutScreen}
          options={({ navigation }) => ({
            title: 'Workout',
          })}
        />
        <Stack.Screen
          name="HelpandSupportScreen"
          component={HelpandSupportScreen}
          options={({ navigation }) => ({
            title: 'Help and Support',
          })}
        />
        <Stack.Screen
          name="NotificationSettingsScreen"
          component={NotificationSettingsScreen}
          options={({ navigation }) => ({
            title: 'Notification Settings',
          })}
        />
        <Stack.Screen
          name="LanguagesScreen"
          component={LanguagesScreen}
          options={({ navigation }) => ({
            title: 'Languages',
          })}
        />
        <Stack.Screen
          name="AboutYourselfScreen"
          component={AboutYourselfScreen}
          options={({ navigation }) => ({
            title: 'About Yourself',
          })}
        />
        <Stack.Screen
          name="UserInfoScreen"
          component={UserInfoScreen}
          options={({ navigation }) => ({
            title: 'User Info',
          })}
        />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={({ navigation }) => ({
            title: 'User Profile',
          })}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={({ navigation }) => ({
            title: 'Location',
          })}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={({ navigation }) => ({
            title: 'Change Password',
          })}
        />
        <Stack.Screen
          name="SelectLanguageScreen"
          component={SelectLanguageScreen}
          options={({ navigation }) => ({
            title: 'Select Language',
          })}
        />
        <Stack.Screen
          name="HeightScreen"
          component={HeightScreen}
          options={({ navigation }) => ({
            title: 'Height',
          })}
        />
        <Stack.Screen
          name="CreateAccountFormScreen"
          component={CreateAccountFormScreen}
          options={({ navigation }) => ({
            title: 'Create Account Form',
          })}
        />
        <Stack.Screen
          name="CreateaNewPasswordScreen"
          component={CreateaNewPasswordScreen}
          options={({ navigation }) => ({
            title: 'Create a New Password',
          })}
        />
        <Stack.Screen
          name="LoginEmailScreen"
          component={LoginEmailScreen}
          options={({ navigation }) => ({
            title: 'Login Email',
          })}
        />
        <Stack.Screen
          name="SecurityScreen"
          component={SecurityScreen}
          options={({ navigation }) => ({
            title: 'Security',
          })}
        />
        <Stack.Screen
          name="ForgotPassword2Screen"
          component={ForgotPassword2Screen}
          options={({ navigation }) => ({
            title: 'Forgot Password',
          })}
        />
        <Stack.Screen
          name="PlayWorkoutPlaylistScreen"
          component={PlayWorkoutPlaylistScreen}
          options={({ navigation }) => ({
            title: 'Play Workout Playlist',
          })}
        />
        <Stack.Screen
          name="FiltersScreen"
          component={FiltersScreen}
          options={({ navigation }) => ({
            title: 'filters',
          })}
        />
        <Stack.Screen
          name="LanguageSettingsScreen"
          component={LanguageSettingsScreen}
          options={({ navigation }) => ({
            title: 'Language Settings',
          })}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={({ navigation }) => ({
            title: 'Forgot Password',
          })}
        />
        <Stack.Screen
          name="Onboarding22Screen"
          component={Onboarding22Screen}
          options={({ navigation }) => ({
            title: 'Onboarding 2.2',
          })}
        />
        <Stack.Screen
          name="Onboarding23Screen"
          component={Onboarding23Screen}
          options={({ navigation }) => ({
            title: 'Onboarding 2.3',
          })}
        />
        <Stack.Screen
          name="Onboarding21Screen"
          component={Onboarding21Screen}
          options={({ navigation }) => ({
            title: 'Onboarding 2.1',
          })}
        />
        <Stack.Screen
          name="Onboarding3Screen"
          component={Onboarding3Screen}
          options={({ navigation }) => ({
            title: 'Onboarding 3',
          })}
        />
        <Stack.Screen
          name="OnboardingEnterAppScreen"
          component={OnboardingEnterAppScreen}
          options={({ navigation }) => ({
            title: 'Onboarding Enter App',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            title: 'Bottom Tab Navigator',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
