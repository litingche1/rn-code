import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Tailwind'>;

export default function TailwindScreen({ navigation }: Props) {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="mb-6 items-center">
        <Text className="text-3xl font-bold text-slate-800">Tailwind CSS</Text>
        <Text className="text-slate-500 mt-2">NativeWind 示例页面</Text>
      </View>

      {/* 卡片示例 */}
      <View className="bg-white rounded-xl p-6 shadow-sm mb-4">
        <Text className="text-xl font-semibold text-slate-800 mb-4">基础卡片</Text>
        <Text className="text-slate-600 leading-6">
          这是一个使用 Utility Classes 构建的卡片组件。
          你可以直接使用 <Text className="font-mono text-pink-500 bg-pink-50 px-1 rounded">p-6</Text>、
          <Text className="font-mono text-pink-500 bg-pink-50 px-1 rounded">bg-white</Text> 等类名。
        </Text>
        <View className="mt-4 flex-row space-x-3">
           <View className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center">
             <Text className="text-white font-bold">A</Text>
           </View>
           <View className="w-10 h-10 bg-green-500 rounded-full items-center justify-center">
             <Text className="text-white font-bold">B</Text>
           </View>
           <View className="w-10 h-10 bg-purple-500 rounded-full items-center justify-center">
             <Text className="text-white font-bold">C</Text>
           </View>
        </View>
      </View>

      {/* 按钮示例 */}
      <View className="bg-white rounded-xl p-6 shadow-sm mb-4">
        <Text className="text-xl font-semibold text-slate-800 mb-4">按钮样式</Text>
        <View className="space-y-3">
          <TouchableOpacity 
            className="bg-blue-500 py-3 px-4 rounded-lg active:bg-blue-600"
            onPress={() => {}}
          >
            <Text className="text-white text-center font-semibold">主要按钮</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-white border border-slate-300 py-3 px-4 rounded-lg active:bg-slate-50"
            onPress={() => {}}
          >
            <Text className="text-slate-700 text-center font-semibold">次要按钮</Text>
          </TouchableOpacity>
           
           <View className="flex-row justify-between mt-2">
              <TouchableOpacity className="bg-red-100 py-2 px-4 rounded-full">
                 <Text className="text-red-600 text-xs font-bold">标签 1</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-green-100 py-2 px-4 rounded-full">
                 <Text className="text-green-600 text-xs font-bold">标签 2</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-purple-100 py-2 px-4 rounded-full">
                 <Text className="text-purple-600 text-xs font-bold">标签 3</Text>
              </TouchableOpacity>
           </View>
        </View>
      </View>

      {/* 布局示例 */}
      <View className="bg-indigo-600 rounded-xl p-6 shadow-sm mb-4">
         <Text className="text-white text-xl font-bold mb-2">Flexbox 布局</Text>
         <Text className="text-indigo-100 mb-4">轻松实现复杂布局</Text>
         
         <View className="flex-row bg-white/10 rounded-lg p-2 justify-between">
             <View className="w-16 h-16 bg-white/20 rounded m-1"></View>
             <View className="w-16 h-16 bg-white/20 rounded m-1"></View>
             <View className="w-16 h-16 bg-white/20 rounded m-1"></View>
             <View className="w-16 h-16 bg-white/20 rounded m-1"></View>
         </View>
      </View>
    </ScrollView>
  );
}

