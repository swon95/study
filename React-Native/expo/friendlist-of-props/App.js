import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';


// // 생성해야할 컴포넌트
// Header
// MyProfile
// Division
// FriendSection
// FriendList

const Header = (props) => {
  return (<Text>{props.title}</Text>)
}
const MyProfile = () => {
  return (<Profile
    name="콬키리"
    uri="https://e1.pngegg.com/pngimages/623/472/png-clipart-emoji-sticker-gray-and-white-elephant-illustration.png"
    profileSize={40}
  />)
}
const Division = () => {
  return (<Text>Division</Text>)
}
const FriendSection = () => {
  return (<Text>FriendSection</Text>)
}
const FriendList = () => {
  return (
    <View>
      <Profile name="ㅋ코코" uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYz-aQ8UqqD-10GmITuSfQVfsQRAmMPTtbvXw3NFUhZeKJbRzR-Ffa6tnVQz0B5EtxFnM&usqp=CAU" profileSize={30} />
      <Profile name="코끼1" uri="https://emojigraph.org/media/openmoji/elephant_1f418.png" profileSize={30} />
      <Profile name="코끼2" uri="https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2022/02/569-elephant-emoji-coloring-page.png" profileSize={30} />
      <Profile name="코끼3" uri="https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2022/03/569-elephant-emoji-coloring-page_1.png" profileSize={30} />
      <Profile name="코끼4" uri="https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2022/03/570-mammoth-emoji-coloring-page.png" profileSize={30} />
    </View>
  )
}

// 함수형 컴포넌트
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
class Profile extends React.Component {
  render() {
    return (

      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            // 클래스 컴포넌트에서 props 에 접근 하려면 this. 를 사용
            uri: this.props.uri,
          }}
          style={{
            width: this.props.profileSize,
            height: this.props.profileSize,
          }} />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

export default function App() {
  return <View style={styles.container}>
    <Header title="친구" />
    <MyProfile />
    <Division />
    <FriendSection />
    <FriendList />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

