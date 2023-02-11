import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Switch,
  ActivityIndicator,
} from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [input, setInput] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  // 함수형 컴포넌트에서는 useEffect 로 DidMount, DidUpdate, Unmount 를 대체할 수 있음.

  // 의존성 배열이 비어있으므로 어떠한 값이 바뀌더라도 첫 번째 인자의 함수는 호출이 되지 않음
  // 즉, 최초로 렌더링될 때 한번만 실행되므로 DidMount 대체 가능.
  useEffect(() => {
    console.log("didMount");
  }, []); // 두 번째 인자는 의존성 배열로, 배열의 값이 바뀌었을 때 첫번째 인자에 있는 함수를 호출.


  useEffect(() => { // 상단(useState)에 초기값으로 0 을 지정 해주는것도 변화하는것 으로 인지하므로 렌더링 초반에 로그가 찍힘
    console.log("didUpdate - count", count);
  }, [count]); // count 가 호출 될 때 위 함수가 호출
  // 이 부분은 count 가 업데이트 될 때 호출되기 때문에 클래스컴포넌트에서는 변화되기 이전의 값이 찍혔다면 함수형 컴포넌트에서는 바뀐 이후의 값이 찍히게 됨

  useEffect(() => {
    console.log("didUpdate - isOn", isOn);
  }, [isOn]); // 마찬가지로 이 부분은 의존성 배열에 isOn 만 있으므로 count 에 대한 부분은 호출되지 않고 isOn 에 대한 값만 표시 됨 
  // 궁금한점
  // 만약 의존성 배열에 [isOn, count] 를 넘겨준다면 ?
  // 왜 isOn 값만 출력되는지 ?

  useEffect(() => {
    console.log("didUpdate - input", input);
  }, [input]);


  // 새로고침UI 가 계속되는것이 아니라 원하는 데이터가 모두 불러와졌다면 다시 false로 바뀌어야하기때문에
  useEffect(() => {
    if (isRefresh) {
      // 다만, isRefresh 가 true 일때 바로 false 로 바뀌면 로딩의 의미가 없기에 setTimeout 를 사용해 약간의 딜레이를 추가
      setTimeout(() => {
        // IsRefresh 가 true 일 때 false 로 바꿔주는 함수
        setIsRefresh(false);
      }, 2000); // 2초
    }
    // isRefresh 를 의존성배열에 추가(감지)하여
  }, [isRefresh]);

  // 함수형 컴포넌트에는 Constructor 의 역할을 하는것이 없음
  // 굳이 따지자면, 컴포넌트 내부에서 console.log('constructor') 을 통해 구현할 수 있지만,
  // 이 부분은 props 나 state 가 업데이트 되면서 항상 실행되는 부분이기에 constructor 라고 할 수 없음.

  // 클래스 컴포넌트에서의 render 는 함수형 컴포넌트에서 return 이 담당하고 있기에 때문에
  // return 문 안에서 consol 을 찍을 수 없다.
  // 때문에 render 도 무시 가능
  return (
    <View style={{ alignItems: "center" }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>
      <Switch value={isOn} onValueChange={setIsOn} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>

      <Text>input: {input}</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={{ borderBottomWidth: 1, borderColor: "grey" }}
      />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>

      {/* 새로고침 버튼을 누르게 되면 setIsRefresh 의 값은 true 로 변경 */}
      <Button
        title="새로고침!" onPress={() => { 
          setIsRefresh(true); 
          }}/>

      {/* 새로고침하는모양의 UI => ActivityIndicator */}
      {/* isRefresh 가 되고있을때(True)만 ActivityIndicator 를 보여주기 */}
      {isRefresh && <ActivityIndicator />}
    </View>
  );
};

export default Component;