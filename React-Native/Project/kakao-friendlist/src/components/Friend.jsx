import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './friend/Header';
import Body1 from './friend/Body1'
import Body2 from './friend/Body2';
import { myProfile, friendProfiles } from "../data";
import Margin from './friend/Margin'
import Division from './friend/Division'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const StatusBarHeight = getStatusBarHeight(true);
const BottomSpace = getBottomSpace();

// 플랫폼 별 OS(안드로이드 & 아이폰)
console.log(`${Platform.OS} : ${StatusBarHeight}, ${BottomSpace}`);

export const Friend = () => {

    // 친구 목록 Toggle State
    const [ isOpened, setIsOpened ] = useState(true) // 초기 값은 Toggle on 상태

    const onPressArrow = () => {
        console.log('clicked !!')
        setIsOpened(!isOpened) // 화살표를 눌렀을 때 Toggle 을 false 로 변경
    }

    

    return (
        <View style={styles.container}>
            <Header />
            <Margin height={10} />
            <Body1
                uri={myProfile.uri}
                name={myProfile.name} 
                introduction={myProfile.introduction}
                />
            
            <Margin height={15} />
            
            <Division />

            <Margin height={12} />

            <Body2 
                friendProfileLen={friendProfiles.length}
                onPressArrow={onPressArrow}
                data={friendProfiles}
                isOpened={isOpened}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBarHeight,
      backgroundColor: '#fff',
      paddingHorizontal: 15,
    },
  });