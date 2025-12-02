import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen';
import CreateScreen from '../screens/CreateScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Home, PlaySquare, PlusSquare, MessageCircle, User } from 'lucide-react-native';
import { Text, View, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF2442', // Xiaohongshu Red
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 0, // Android shadow
          shadowOpacity: 0.05, // iOS shadow
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600'
        },
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Home') {
            return <Home color={color} size={size} />;
          } else if (route.name === 'Video') {
            return <PlaySquare color={color} size={size} />;
          } else if (route.name === 'Create') {
             // Custom render handled below usually, but icon here for now
            return <PlusSquare color='#FF2442' size={32} />; 
          } else if (route.name === 'Message') {
            return <MessageCircle color={color} size={size} />;
          } else if (route.name === 'Profile') {
            return <User color={color} size={size} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: '首页' }}
      />
      <Tab.Screen 
        name="Video" 
        component={VideoScreen} 
        options={{ title: '视频' }}
      />
      <Tab.Screen 
        name="Create" 
        component={CreateScreen} 
        options={{ 
            title: '',
            tabBarIcon: ({ size }) => (
                <View className="bg-red-500 w-12 h-8 rounded-lg items-center justify-center mt-2">
                     <PlusSquare color="white" size={20} />
                </View>
            )
         }}
      />
      <Tab.Screen 
        name="Message" 
        component={MessageScreen} 
        options={{ title: '消息' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: '我' }}
      />
    </Tab.Navigator>
  );
}

