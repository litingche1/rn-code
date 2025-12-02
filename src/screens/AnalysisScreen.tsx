import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { LineChart } from 'react-native-chart-kit';
import { Card } from '../components/Card';

const screenWidth = Dimensions.get('window').width;

// Mock Data for Chart
const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 60],
      color: (opacity = 1) => `rgba(255, 36, 66, ${opacity})`, // Red color
      strokeWidth: 2 
    }
  ],
  legend: ["New Followers"] 
};

// Mock Data for Table
const tableData = [
  { id: 1, date: '2023-11-20', followers: 120, views: 3500, likes: 450 },
  { id: 2, date: '2023-11-21', followers: 135, views: 4200, likes: 520 },
  { id: 3, date: '2023-11-22', followers: 98, views: 2800, likes: 310 },
  { id: 4, date: '2023-11-23', followers: 240, views: 8900, likes: 1200 },
  { id: 5, date: '2023-11-24', followers: 310, views: 12000, likes: 1500 },
  { id: 6, date: '2023-11-25', followers: 180, views: 6500, likes: 890 },
  { id: 7, date: '2023-11-26', followers: 210, views: 7200, likes: 950 },
];

export default function AnalysisScreen() {
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 36, 66, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(102, 102, 102, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#FF2442"
    }
  };

  return (
    <ScreenContainer title="数据中心">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        
        {/* Chart Section */}
        <Card>
          <Text className="text-lg font-bold mb-4 text-gray-900">近7日涨粉趋势</Text>
          <LineChart
            data={chartData}
            width={screenWidth - 64} // Card padding (16*2) + Screen padding (20*2) approx adjustment
            height={220}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </Card>

        {/* Table Section */}
        <Card>
          <Text className="text-lg font-bold mb-4 text-gray-900">详细数据列表</Text>
          
          {/* Table Header */}
          <View className="flex-row border-b border-gray-200 pb-2 mb-2">
            <Text className="flex-1 font-bold text-gray-500 text-xs">日期</Text>
            <Text className="flex-1 font-bold text-gray-500 text-xs text-center">新增粉丝</Text>
            <Text className="flex-1 font-bold text-gray-500 text-xs text-center">阅读量</Text>
            <Text className="flex-1 font-bold text-gray-500 text-xs text-right">互动数</Text>
          </View>

          {/* Table Rows */}
          {tableData.map((row, index) => (
            <View key={row.id} className={`flex-row py-3 ${index !== tableData.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <Text className="flex-1 text-gray-900 text-sm">{row.date}</Text>
              <Text className="flex-1 text-gray-900 text-sm text-center font-medium">+{row.followers}</Text>
              <Text className="flex-1 text-gray-500 text-sm text-center">{row.views > 1000 ? (row.views/1000).toFixed(1) + 'k' : row.views}</Text>
              <Text className="flex-1 text-gray-500 text-sm text-right">{row.likes}</Text>
            </View>
          ))}
        </Card>

      </ScrollView>
    </ScreenContainer>
  );
}


