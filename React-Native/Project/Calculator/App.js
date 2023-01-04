import Calculator from './Calculator';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  // 사용자가 입력하는 값을 받는 state
  const [input, setInput] = useState(0) // 12

  // 입력받은 값을 기반으로 연산자를 선택했을때의 state
  const [currentOperator, setCurrentOperator] = useState(null) // +

  // 새로 입력받은 값 이전에 받았던 값을 저장하는 state
  const [result, setResult] = useState(null) // 12 + 2 = 14

  // 이전 계산에 사용됬던(입력받았던) 피연산자의 state 
  const [tempInput, setTempInput] = useState(null) // 14

  // temp 에 해당하는 값을 계산하기위한 연산자가 담긴 state
  const [tempOperator, setTempOpearator] = useState(null) // 16, 18, 20, 22, 24.....

  
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
