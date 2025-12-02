import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  Home: undefined;
  Video: undefined;
  Create: undefined;
  Message: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Details: { itemId: number };
  Demo: undefined;
  Tailwind: undefined;
  Analysis: undefined;
};

export type HomeTabScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type ProfileTabScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Profile'>,
  NativeStackScreenProps<RootStackParamList>
>;
