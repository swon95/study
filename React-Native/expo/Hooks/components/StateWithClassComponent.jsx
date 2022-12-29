import React from "react";
import { View, Text, Button } from "react-native";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count 의 초기 값 세팅
      count: 0,
    };
  }

  render() {
    return (
      <View>
        {/* count 에 접근하기 위해 this.state.count 로 사용 가능 */}
        <Text>You clicked {this.state.count} times</Text>
        <Button
          title="Click me"
          // count 의 값을 올리기 위해 onPress 함수에서 this.setState 사용
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

export default Component;