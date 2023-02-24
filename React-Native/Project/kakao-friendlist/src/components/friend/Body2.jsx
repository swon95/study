import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Body1 from "./Body1";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

export default (props) => {
  const BottomSpace = getBottomSpace();

  // case 1. 삼항 연산자를 이용해 친구 목록을 Toggle 시 숨기기 ( : null)
  // case 2. if 문을 활용한 예외처리

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "gray" }}>친구 {props.friendProfileLen}</Text>

        <TouchableOpacity onPress={props.onPressArrow}>
          <MaterialIcons
            name={props.isOpened ? "arrow-drop-down" : "arrow-drop-up"}
            size={24}
            color="lightgray"
          />
        </TouchableOpacity>
      </View>

      <View>
        {props.isOpened && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: BottomSpace }}
          >
            {props.data.map((item, index) => (
              <View key={index}>
                <Body1
                  uri={item.uri}
                  name={item.name}
                  introduction={item.introduction}
                />
                <Margin height={10} />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
      
    </View>
  );
};
