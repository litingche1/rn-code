import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { ProfileTabScreenProps } from '../types';
import { BarChart2 } from 'lucide-react-native';

export default function ProfileScreen({ navigation }: ProfileTabScreenProps) {
  return (
    <ScreenContainer title="Profile">
      <ScrollView className="flex-1 bg-white">
        {/* Header */}
        <View className="p-4 flex-row items-center">
          <View className="w-20 h-20 rounded-full bg-gray-200 mr-4" />
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">User Name</Text>
            <Text className="text-gray-500">Red ID: 123456789</Text>
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Analysis')}
            className="p-2 bg-gray-100 rounded-full"
          >
             <BarChart2 size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="flex-row justify-around py-4 border-b border-gray-100">
          <View className="items-center">
            <Text className="font-bold">123</Text>
            <Text className="text-gray-500 text-xs">Following</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold">456k</Text>
            <Text className="text-gray-500 text-xs">Followers</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold">789k</Text>
            <Text className="text-gray-500 text-xs">Likes</Text>
          </View>
        </View>

        {/* Bio */}
        <View className="p-4">
          <Text className="text-gray-700">This is a bio area. Describe yourself here.</Text>
        </View>

        {/* Tabs */}
        <View className="flex-row border-b border-gray-100 mt-2">
            <TouchableOpacity className="flex-1 py-3 border-b-2 border-red-500 items-center">
                <Text className="font-bold text-gray-900">Notes</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-3 items-center">
                <Text className="text-gray-500">Collect</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 py-3 items-center">
                <Text className="text-gray-500">Likes</Text>
            </TouchableOpacity>
        </View>

        {/* Content Grid Placeholder */}
        <View className="flex-row flex-wrap p-1">
             {[1,2,3,4,5,6].map((item) => (
                 <View key={item} className="w-1/3 aspect-square p-1">
                     <View className="flex-1 bg-gray-200 rounded-lg"/>
                 </View>
             ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

