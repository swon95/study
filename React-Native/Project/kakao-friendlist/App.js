import React from "react";
// 더 이상 유지 관리되지 않는 라이브러리로 아이폰 13, 14 이상은 지원 x
import { NavigationContainer } from '@react-navigation/native';
import TabBar from './src/navigation/Tab';

// // 생성해야할 컴포넌트
// Header
// MyProfile
// Division
// FriendSection
// FriendList

// 함수형 컴포넌트
// 함수형 컴포넌트는 변화하는 값을 관리할 수 없지만 이를 Hooks 로 해결할 수 있다.
// const Profile = (props) => {
//   return(
//     // row 가로로 정렬된 렌더링
//     <View style={{flexDirection : "row"}}>
//       <Image 
//       source={{
//         uri : props.uri,
//       }}
//       // style 속성으로 크기를 지정해주지 않으면 이미지가 안나옴
//       style={{
//         width : props.profileSize,
//         height : props.profileSize,
//       }}/>
//       <Text>{props.name}</Text>
//     </View>
//   )
// }

// 클래스형 컴포넌트
// class Profile extends React.Component {
//   render() {
//     return (

//       <View style={{ flexDirection: "row" }}>
//         <Image
//           source={{
//             // 클래스 컴포넌트에서 props 에 접근 하려면 this. 를 사용
//             uri: this.props.uri,
//           }}
//           style={{
//             width: this.props.profileSize,
//             height: this.props.profileSize,
//           }} />
//         <Text>{this.props.name}</Text>
//       </View>
//     )
//   }
// }

const App = () => {
  return (
  <NavigationContainer>
    <TabBar />
  </NavigationContainer>
  )
}

export default App

