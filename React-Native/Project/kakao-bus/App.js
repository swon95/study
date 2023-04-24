import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BusInfo from './src/BusInfo';
import { COLOR } from './src/color';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BusInfo 
        // bookmark 의 색상 변경
        isBookmarked={true}
        onPressBookmark={() => {}} // 아직 비워둠
        num={146}
        directionDescription="강남역, 강남역사거리"
        numColor={COLOR.BUS_B}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
