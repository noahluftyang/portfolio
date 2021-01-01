import { AppLayout } from 'components/mod';
import React from 'react';
import { TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, Title } from 'react-native-paper';

export const AppChatScreen = () => {
  return (
    <AppLayout>
      <Title>채팅</Title>
      <TextInput placeholder="채팅방 이름, 참여자 검색" />
      <View>
        <TouchableHighlight>
          <View>
            <Text>내사랑</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View>
            <Text>내사랑2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View>
            <Text>내사랑3</Text>
          </View>
        </TouchableHighlight>
      </View>
    </AppLayout>
  );
};
