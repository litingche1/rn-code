import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeTabScreenProps } from '../types';
import { Heart } from 'lucide-react-native';

// Mock Data
const MOCK_DATA = Array.from({ length: 20 }).map((_, index) => ({
  id: index,
  title: `Post Title ${index + 1}`,
  user: `User ${index + 1}`,
  likes: Math.floor(Math.random() * 1000),
  imageHeight: Math.floor(Math.random() * 100) + 150, // Random height for masonry effect
  imageUrl: `https://picsum.photos/id/${index + 10}/200/300`, // Random image
}));

type Props = HomeTabScreenProps;

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 24) / 2; // 24 = padding left + right + gap

export default function HomeScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState('Explore'); // Follow, Explore, Nearby

  // Split data into two columns
  const [col1, setCol1] = useState<typeof MOCK_DATA>([]);
  const [col2, setCol2] = useState<typeof MOCK_DATA>([]);

  useEffect(() => {
    const c1: typeof MOCK_DATA = [];
    const c2: typeof MOCK_DATA = [];

    MOCK_DATA.forEach((item, index) => {
      if (index % 2 === 0) {
        c1.push(item);
      } else {
        c2.push(item);
      }
    });

    setCol1(c1);
    setCol2(c2);
  }, []);

  const renderItem = (item: typeof MOCK_DATA[0]) => (
    <TouchableOpacity 
      key={item.id} 
      className="bg-white rounded-lg mb-2 overflow-hidden shadow-sm"
      style={{ width: COLUMN_WIDTH }}
      onPress={() => {
        navigation.navigate('Details', { itemId: item.id }) 
      }}
    >
      <Image 
        source={{ uri: item.imageUrl }} 
        style={{ width: COLUMN_WIDTH, height: item.imageHeight }}
        resizeMode="cover"
      />
      <View className="p-2">
        <Text numberOfLines={2} className="text-sm font-bold text-gray-900 mb-1">
          {item.title} This is a longer text to test the layout wrapping and masonry effect.
        </Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
             <View className="w-5 h-5 rounded-full bg-gray-200 mr-1" />
             <Text className="text-xs text-gray-500">{item.user}</Text>
          </View>
          <View className="flex-row items-center">
            <Heart size={12} color="#999" />
            <Text className="text-xs text-gray-500 ml-1">{item.likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Top Tabs */}
      <View className="flex-row justify-center items-center py-2 bg-white">
        <TouchableOpacity onPress={() => setActiveTab('Follow')} className="px-4">
           <Text className={`text-base font-bold ${activeTab === 'Follow' ? 'text-gray-900' : 'text-gray-400'}`}>关注</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Explore')} className="px-4">
           <Text className={`text-base font-bold ${activeTab === 'Explore' ? 'text-gray-900' : 'text-gray-400'}`}>发现</Text>
           {activeTab === 'Explore' && <View className="h-1 w-8 bg-red-500 rounded-full mx-auto mt-1 absolute -bottom-1 left-4" />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Nearby')} className="px-4">
           <Text className={`text-base font-bold ${activeTab === 'Nearby' ? 'text-gray-900' : 'text-gray-400'}`}>北京</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 8 }}>
        <View className="flex-row justify-between">
          <View>
            {col1.map(renderItem)}
          </View>
          <View>
            {col2.map(renderItem)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
