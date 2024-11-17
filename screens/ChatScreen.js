import React, { useState, useEffect } from 'react';
import {
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
import { getChatResponse } from '../api'; // Use SambaNova Cloud API function
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import palettes from '../themes/palettes';

const ChatScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { sender: 'user', text: inputText };
    setMessages([...messages, userMessage]);

    setInputText('');
    setLoading(true);

    try {
      const response = await getChatResponse(inputText); // SambaNova response
      const botMessage = { sender: 'bot', text: response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'Something went wrong. Try again later.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer
      hasSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App['Custom Color'], height: '100%' },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
          },
          dimensions.width
        )}
      >
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <Circle bgColor={palettes.App['Custom Color_2']} size={50}>
            <Icon
              size={24}
              color={palettes.App['Custom Color']}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Circle>
        </Pressable>
        <Text
          style={StyleSheet.applyWidth(
            {
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'Chat'}
        </Text>
        <View />
      </View>

      {/* Chat Messages */}
      <SimpleStyleFlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor:
                item.sender === 'user'
                  ? palettes.App['Custom Color_2']
                  : palettes.App['Custom Color_4'],
              borderRadius: 10,
              padding: 10,
              marginVertical: 5,
              maxWidth: '80%',
            }}
          >
            <Text style={{ color: palettes.App['Custom Color'], fontSize: 14 }}>
              {item.text}
            </Text>
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Input Field */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
            borderTopWidth: 1,
            borderColor: palettes.App['Custom Color_4'],
          },
          dimensions.width
        )}
      >
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: 10,
            borderWidth: 1,
            borderColor: palettes.App['Custom Color_4'],
            borderRadius: 8,
            marginRight: 8,
          }}
        />
        <Pressable onPress={handleSendMessage} disabled={loading}>
          <Circle bgColor={palettes.App['Custom Color_2']} size={50}>
            <Icon
              size={24}
              color={palettes.App['Custom Color']}
              name={'Ionicons/send'}
            />
          </Circle>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChatScreen);
