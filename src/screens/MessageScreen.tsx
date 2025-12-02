import React from 'react';
import { View, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';

export default function MessageScreen() {
  return (
    <ScreenContainer title="Messages">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold text-gray-500">Messages (Placeholder)</Text>
      </View>
    </ScreenContainer>
  );
}

