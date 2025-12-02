import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ViewStyle,
} from 'react-native';
import { SafeAreaView as SafeAreaViewContext } from 'react-native-safe-area-context';

interface ScreenContainerProps {
  children: React.ReactNode;
  loading?: boolean;
  center?: boolean;
  withKeyboardAvoiding?: boolean;
  style?: ViewStyle;
  backgroundColor?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  loading,
  center,
  withKeyboardAvoiding = false,
  style,
  backgroundColor = '#F9F9F9',
}) => {
  const Wrapper = withKeyboardAvoiding ? KeyboardAvoidingView : View;
  const wrapperProps = withKeyboardAvoiding
    ? {
        behavior: Platform.OS === 'ios' ? 'padding' : undefined,
        style: { flex: 1 },
      }
    : { style: { flex: 1 } };

  if (loading) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor }]}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaViewContext style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <Wrapper {...(wrapperProps as any)}>
        <View style={[styles.content, center && styles.center, style]}>
          {children}
        </View>
      </Wrapper>
    </SafeAreaViewContext>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});








