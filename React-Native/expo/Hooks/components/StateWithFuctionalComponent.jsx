import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  // useState == React.Hooks
  // 원래 코드에 구조 분해 문법을 거친 결과
  const [count, setCount] = useState(0); // number

  // 원래의 코드
  // const result = useState(0)
  // const count = result[0]
  // const setCount = result[1]

  // 기본 원리
  // const arr = [1, 2, 3]
  // == 각각의 원소에 접근하기 위해
  // const first = arr[0]
  // const second = arr[1]
  // const third = arr[2]
  // == 위 3줄이 너무 길기에, 구조 분해 문법을 사용
  // const [first, second, third] = arr

  // 초기값은 false, State == isOn == 첫 번째로 받는 값
  // isOn == State 값을 바꿀 수 있는 setIsOn
  const [isOn, setIsOn] = useState(false); // boolean

  const [name, setName] = useState(""); // string

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text>-------</Text>
      <Switch
        value={isOn} // isOn == false
        onValueChange={(v) => {
          console.log("v", v);
          setIsOn(v); // setIsOn == true
        }}
      />

      <Text>-------</Text>
      {/* 앱에서 사용자의 입력을 받기 위해 TextInput 사용 */}
      <TextInput
        value={name}
        onChangeText={(v) => {
          console.log("v", v);
          setName(v);
        }}
        // style = {{backgroundColor: 'pink'}}
      />
    </View>
  );
};

export default Component;