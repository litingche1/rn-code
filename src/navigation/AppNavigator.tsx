import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useStore } from '../store/useStore';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import DemoScreen from '../screens/DemoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          // 已登录状态下的路由栈
          <>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: '首页' }}
            />
            <Stack.Screen 
              name="Details" 
              component={DetailsScreen} 
              options={{ title: '详情' }}
            />
            <Stack.Screen 
              name="Demo" 
              component={DemoScreen} 
              options={{ title: '组件展示' }}
            />
          </>
        ) : (
          // 未登录状态下的路由栈
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
