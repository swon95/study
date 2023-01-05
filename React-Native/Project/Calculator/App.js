import Calculator from './Calculator';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // 안전한 영역에서만 보이게? SafeAreaView == 휴대폰의 상단바 영역을 제거한 부분
    <SafeAreaView style={styles.container}>
      <Calculator/>
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
