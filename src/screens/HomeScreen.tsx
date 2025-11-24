import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useStore } from '../store/useStore';
import api from '../services/api';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { count, increase, decrease, logout, user } = useStore();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleLogout = () => {
    logout();
    // 状态改变会自动触发 Navigation 切换到 LoginScreen
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get('/todos/1');
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>React Native 基础框架</Text>
        {user && <Text style={styles.welcome}>Hi, {user.username}</Text>}
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>状态管理 (Zustand)</Text>
        <Text style={styles.counterText}>Count: {count}</Text>
        <View style={styles.buttonRow}>
          <Button title="减少 (-)" onPress={decrease} />
          <View style={{ width: 20 }} />
          <Button title="增加 (+)" onPress={increase} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>网络请求 (Axios)</Text>
        <Button title="获取数据" onPress={fetchData} />
        {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
        {data && (
          <View style={styles.dataBox}>
            <Text style={styles.dataText}>{JSON.stringify(data, null, 2)}</Text>
          </View>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>路由导航</Text>
        <Button 
          title="跳转详情页 (传递 Count)" 
          onPress={() => navigation.navigate('Details', { itemId: count })} 
        />
        <View style={{ height: 10 }} />
        <Button 
          title="查看组件库 Demo" 
          color="#4CD964"
          onPress={() => navigation.navigate('Demo')} 
        />
        <View style={{ height: 10 }} />
        <Button 
          title="查看 Tailwind 示例" 
          color="#0ea5e9"
          onPress={() => navigation.navigate('Tailwind')} 
        />
        <View style={{ height: 10 }} />
        <Button 
          title="退出登录" 
          color="#FF3B30"
          onPress={handleLogout} 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { marginBottom: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  welcome: { fontSize: 16, color: '#666', marginTop: 5 },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 15, color: '#333' },
  counterText: { fontSize: 20, textAlign: 'center', marginBottom: 15 },
  buttonRow: { flexDirection: 'row', justifyContent: 'center' },
  dataBox: { backgroundColor: '#f0f0f0', padding: 10, borderRadius: 5, marginTop: 10 },
  dataText: { fontSize: 12, fontFamily: 'monospace' },
});

