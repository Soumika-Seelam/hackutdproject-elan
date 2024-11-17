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
import { ActivityIndicator, Text, View, Button } from 'react-native';
import { fetchUserProfile, updateUserProfile } from '../api'; // Import your API functions
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import palettes from '../themes/palettes';

const ProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  const [profileData, setProfileData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (useIsFocused()) {
      const fetchProfileData = async () => {
        setLoading(true);
        try {
          const userData = await fetchUserProfile(); // Fetch mock user profile data
          setProfileData(userData);
        } catch (error) {
          console.error('Error fetching profile:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProfileData();
    }
  }, [useIsFocused()]);

  const handleUpdateProfile = async () => {
    try {
      await updateUserProfile(profileData); // Update profile via API
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

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
          {'Profile'}
        </Text>
        <View />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={palettes.App['Custom Color']} />
      ) : (
        <View style={{ padding: 16 }}>
          {/* Display User Info */}
          <Text
            style={{
              fontSize: 16,
              color: palettes.App['Custom Color_2'],
              marginBottom: 8,
            }}
          >
            {`Name: ${profileData.name || 'Loading...'}`}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: palettes.App['Custom Color_2'],
              marginBottom: 8,
            }}
          >
            {`Email: ${profileData.email || 'Loading...'}`}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: palettes.App['Custom Color_2'],
              marginBottom: 16,
            }}
          >
            {`Focus Hours: ${profileData.focusHours || 0}`}
          </Text>

          {/* Button to update profile */}
          <Button title="Update Profile" onPress={handleUpdateProfile} />
        </View>
      )}
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
