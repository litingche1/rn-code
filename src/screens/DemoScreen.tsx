import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { ScreenContainer, Card, Input, Button } from '../components';

export default function DemoScreen() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.heading}>组件展示</Text>

        <Card>
          <Text style={styles.sectionTitle}>输入框 (Input)</Text>
          <Input
            label="用户名"
            placeholder="请输入用户名"
            value={text}
            onChangeText={setText}
          />
          <Input
            label="密码"
            placeholder="请输入密码"
            secureTextEntry
            error="密码长度不能少于6位"
          />
        </Card>

        <Card>
          <Text style={styles.sectionTitle}>按钮 (Button)</Text>
          <Button title="Primary Button" onPress={handlePress} loading={loading} style={styles.btn} />
          <Button title="Outline Button" variant="outline" onPress={handlePress} style={styles.btn} />
          <Button title="Disabled Button" disabled style={styles.btn} />
        </Card>

        <Card variant="outlined">
          <Text style={styles.sectionTitle}>卡片 (Card Variant: Outlined)</Text>
          <Text style={styles.text}>
            这是一个带有边框的卡片组件，适合展示次要信息。
          </Text>
        </Card>

        <Card variant="flat">
          <Text style={styles.sectionTitle}>卡片 (Card Variant: Flat)</Text>
          <Text style={styles.text}>
            这是一个扁平风格的卡片，没有阴影。
          </Text>
        </Card>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  text: {
    color: '#666',
    lineHeight: 20,
  },
  btn: {
    marginBottom: 12,
  },
});



