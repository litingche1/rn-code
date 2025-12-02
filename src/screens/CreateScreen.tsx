import React from 'react';
import { View, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';

export default function CreateScreen() {
  return (
    <ScreenContainer title="Create">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold text-gray-500">Create Post (Placeholder)</Text>
      </View>
    </ScreenContainer>
  );
}

