import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const IconButton = (props) => {
    return(
        // hitSlop 을 통해 터치 범위 수정
        <TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={{ paddingHorizontal: 6 }}>
            <Ionicons name={props.name} size={24} color="black" />
        </TouchableOpacity>
    )
}

export default() => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>친구</Text>

        <View style={{ flexDirection: 'row' }}>
            <IconButton name='search-outline' />
            <IconButton name='person-add-outline' />
            <IconButton name='musical-notes-outline' />
            <IconButton name='settings-outline' />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    }
})

// Header Component 를 default 로 반환(==export 내보내기)
// import 시 구조분해 없이 임의의 이름 지정 가능
// 만약 default 가 아닌 const 로 정의되었다면 구조분해 하여 가져와야함
// import { Header } from './components/Header';
// export default Header
