import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route, navigation }: Props) {
  const { itemId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>详情页</Text>
      <Text style={styles.text}>接收到的参数 (Count): {itemId}</Text>
      <View style={styles.buttonContainer}>
        <Button title="返回上一页" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 30 },
  buttonContainer: { width: 200 },
});

