import React from 'react';
import {
  Button,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  ZStack,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import openCameraUtil from '../utils/openCamera';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';

const UserInfoScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ImageModal, setImageModal] = React.useState(false);
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={false}
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
          {'User Info'}
        </Text>
        <View />
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        enableAutomaticScroll={true}
        enableOnAndroid={true}
        extraHeight={50}
        style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
      >
        {/* Profile Picture */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <Pressable
            onPress={() => {
              try {
                setImageModal(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <ZStack
              reversed={false}
              {...GlobalStyles.ZStackStyles(theme)['Z Stack'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ZStackStyles(theme)['Z Stack'].style,
                dimensions.width
              )}
            >
              {/* Default User Image */}
              <>
                {Constants['ProfilePicture'] ? null : (
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Image'].props}
                    source={imageSource(Images['UserImage'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'].style,
                        { borderRadius: 50 }
                      ),
                      dimensions.width
                    )}
                  />
                )}
              </>
              {/* Profile Pic */}
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(`${Constants['ProfilePicture']}`)}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 50 }
                  ),
                  dimensions.width
                )}
              />
              {/* Edit Icon */}
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={imageSource(Images['Edit'])}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    {
                      borderRadius: 50,
                      bottom: 0,
                      height: 32,
                      right: 0,
                      width: 32,
                    }
                  ),
                  dimensions.width
                )}
              />
            </ZStack>
          </Pressable>
        </View>
        {/* First Name */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
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
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'First Name'}
          </Text>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
            defaultValue={Constants['FirstName']}
            placeholder={'Jon'}
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  borderColor: palettes.App['Custom Color_4'],
                  borderWidth: 0.5,
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  height: 52,
                  marginTop: 10,
                  paddingLeft: 16,
                }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Last Name */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
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
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Last Name'}
          </Text>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
            defaultValue={Constants['LastName']}
            placeholder={'Doe'}
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  borderColor: palettes.App['Custom Color_4'],
                  borderWidth: 0.5,
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  height: 52,
                  marginTop: 10,
                  paddingLeft: 16,
                }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Email */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
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
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Email'}
          </Text>
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
            defaultValue={Constants['Email']}
            placeholder={'someone@draftbit.com'}
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  borderColor: palettes.App['Custom Color_4'],
                  borderWidth: 0.5,
                  color: palettes.App['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  height: 52,
                  marginTop: 10,
                  paddingLeft: 16,
                }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Gender */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
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
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Gender'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Male */}
            <Pressable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Gender',
                    value: 'male',
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
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 55,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                <>
                  {Constants['Gender'] === 'male' ? null : (
                    <Icon
                      size={24}
                      color={palettes.App['Custom Color_2']}
                      name={'FontAwesome/circle-thin'}
                    />
                  )}
                </>
                <>
                  {!(Constants['Gender'] === 'male') ? null : (
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
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      marginLeft: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Male'}
                </Text>
              </View>
            </Pressable>
            {/* Female */}
            <Pressable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Gender',
                    value: 'female',
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
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 55,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                <>
                  {!(Constants['Gender'] === 'female') ? null : (
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
                <>
                  {Constants['Gender'] === 'female' ? null : (
                    <Icon
                      size={24}
                      color={palettes.App['Custom Color_2']}
                      name={'FontAwesome/circle-thin'}
                    />
                  )}
                </>
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      marginLeft: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Female'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* Location */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
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
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Location'}
          </Text>
          <TextInput
            autoCorrect={true}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              try {
                setGlobalVariableValue({
                  key: 'Location',
                  value: newTextAreaValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            textAlignVertical={'top'}
            webShowOutline={true}
            defaultValue={Constants['Location']}
            editable={true}
            placeholder={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
            }
            placeholderTextColor={theme.colors.text.light}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: palettes.App['Custom Color_4'],
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: palettes.App['Custom Color_2'],
                fontFamily: 'Inter_300Light',
                height: 120,
                lineHeight: 20,
                marginTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          />
        </View>
        {/* Save Changes */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.push('BottomTabNavigator', { screen: 'HomeScreen' });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App['Custom Color_16'],
              borderRadius: 24,
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              height: 56,
              marginBottom: 40,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Save Changes'}
        />
      </SimpleStyleKeyboardAwareScrollView>

      <Modal
        animationType={'none'}
        supportedOrientations={['portrait', 'landscape']}
        transparent={true}
        visible={ImageModal}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: '100%', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Pressable
            onPress={() => {
              try {
                setImageModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App['Custom Color'],
                  height: '100%',
                  opacity: 0.7,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </Pressable>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['Custom Color_3'],
                borderRadius: 16,
                left: 24,
                marginTop: '25%',
                paddingBottom: 20,
                position: 'absolute',
                right: 24,
                zIndex: 1,
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
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                  marginTop: 25,
                },
                dimensions.width
              )}
            >
              {'Change your picture'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: palettes.App['Custom Color_4'],
                  borderTopWidth: 1,
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Pressable
                onPress={() => {
                  const handler = async () => {
                    try {
                      const img = await openCameraUtil({
                        mediaTypes: 'Images',
                        allowsEditing: false,
                        cameraType: 'back',
                        videoMaxDuration: undefined,
                        quality: 0.2,
                        permissionErrorMessage:
                          'Sorry, we need camera permissions to make this work.',
                        showAlertOnPermissionError: true,
                        outputBase64: true,
                      });

                      setGlobalVariableValue({
                        key: 'ProfilePicture',
                        value: img,
                      });
                      setImageModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 25 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: palettes.App['Custom Color_7'],
                      borderColor: palettes.App['Custom Color_8'],
                      borderRadius: 8,
                      flexDirection: 'row',
                      height: 60,
                      paddingLeft: 16,
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.App['Custom Color_2']}
                    name={'Ionicons/camera'}
                    size={22}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Take a photo'}
                  </Text>
                </View>
              </Pressable>

              <Pressable
                onPress={() => {
                  const handler = async () => {
                    try {
                      setImageModal(false);
                      const img = await openImagePickerUtil({
                        mediaTypes: 'Images',
                        allowsEditing: false,
                        quality: 0.2,
                        allowsMultipleSelection: false,
                        outputBase64: true,
                      });

                      setGlobalVariableValue({
                        key: 'ProfilePicture',
                        value: img,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 25 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: palettes.App['Custom Color_7'],
                      borderColor: palettes.App['Custom Color_8'],
                      borderRadius: 8,
                      flexDirection: 'row',
                      height: 60,
                      paddingLeft: 16,
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.App['Custom Color_2']}
                    name={'MaterialCommunityIcons/folder-open'}
                    size={22}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Choose from your file'}
                  </Text>
                </View>
              </Pressable>
              {/* Pressable 3 */}
              <Pressable
                onPress={() => {
                  try {
                    setImageModal(false);
                    setGlobalVariableValue({
                      key: 'ProfilePicture',
                      value: '',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 25 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: palettes.App['Custom Color_7'],
                      borderColor: palettes.App['Custom Color_8'],
                      borderRadius: 8,
                      flexDirection: 'row',
                      height: 60,
                      paddingLeft: 16,
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.App['Custom Color_8']}
                    name={'Entypo/trash'}
                    size={22}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_8'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Delete Photo'}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(UserInfoScreen);
