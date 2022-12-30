import React from "react";
import { View, Text, Button } from "react-native";

class Component extends React.Component {
  
  // 클래스 컴포넌트의 생명주기 순서
  // 생성 - constructor, render == ComponentDidMount
  // 업데이트 - render == ComponentDidUpdate
  // 제거 == ComponentWillUnmount

  // 생명주기 - 생성
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  // 생명주기 - 생성
  componentDidMount() {
    console.log("didMount");
  }

  // 생명주기 - 업데이트
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  // 생명주기 - 제거
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // 생명주기 - 생성 & 업데이트
  render() {
    console.log("render");
    return (
      <View>
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title="Click me"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

export default Component;