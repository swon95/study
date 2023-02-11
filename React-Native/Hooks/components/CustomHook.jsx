import React, { useState } from "react";
import { TextInput, View, Button } from 'react-native'

// props 를 이용해 반복되는 값 (View 안의 내용) 을 컴포넌트 화 하여 재사용
const InputBox = (props) => {
    return(
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={{ borderBottomWidth: 1, width: 200 }} 
                placeholder={props.placeholder} 
            />
            <Button title="초기화" onPress={props.onReset} />
        </View>
    )
}

// CustomHook 을 만들기 위한 규칙 -> use 로 시작해야함
// Hook 을 선언할 때 인자로 initialValue 를 넘김
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue) // 초기값으로 initialValue 를 받음

    const resetValue = () => setValue(initialValue)

    // 생성한 CustomHook == useInput 이 뱉는 값
    return {
        value,
        setValue,
        resetValue, // state 값을 빈 문자열 혹은 초기값으로 돌리는 기능
    }
}

// CustomHook 을 위한 회원가입예제
const CustomHook = () => {
    
    // 생성한 CustomHook 인 useInput 을 사용 == 사용자가 사용
    // const output = useInput('')

    // 아래 state 를 CustomHook 으로 할당 => 근데 코드가 한줄로 해결됬었는데 더 길어짐
    // const name = output.value
    // const setName = output.setValue
    // const resetName = output.resetValue

    // 이를 구조분해할당으로 코드 간소화 진행 = > 코드 38 줄과 45줄 간소화
    // const {value : name, setValue : setName, resetValue : resetName} = output // 변수 a 를 : 변수 b 로 재 선언

    // state 값을 CustomHook 으로 재선언
    const {value: name, setValue: setName, resetValue: resetName} = useInput('')
    const {value: age, setValue: setAge, resetValue: resetAge} = useInput('')
    const {value: city, setValue: setCity, resetValue: resetCity} = useInput('')
    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    // const [city, setCity] = useState('')


    // CustomHook 을 사용하는 이유
    // state 를 선언하고 재사용하는 과정에서 중복되는 함수들이 존재
    // -> 이를 customHook 으로 빼서 재사용 가능하게 생성


    return (
        <View>
            {/* 2번 - 1번의 코드 간소화 */}
            <InputBox
                value={name}
                onChangeText={setName}
                placeholder="이름을 입력하세요" 
                onReset={resetName}
            />
            <InputBox
                value={age}
                onChangeText={setAge}
                placeholder="나이를 입력하세요" 
                onReset={resetAge}
            />
            <InputBox
                value={city}
                onChangeText={setCity}
                placeholder="사는곳을 입력하세요"
                onReset={resetCity}
            />

            {/* 1번 - 코드 원본 */}
            {/* <View style={{ flexDirection: 'row' }}>
                <TextInput value={name} 
                // onChangeText 와 setName 힘수의 생김새와 동작이 똑같기 때문에 그대로 넣어줌
                // onChangeText={(v) => {setName(v)}}
                onChangeText={setName} 
                style={{ borderBottomWidth: 1, width: 200 }} 
                placeholder="이름을 입력해 주세요"
                />
                <Button title="초기화" onPress={() => setName('')} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TextInput value={age}
                    onChangeText={setAge}
                    style={{ borderBottomWidth: 1, width: 200 }}
                    placeholder="나이을 입력해 주세요" 
                    />
                <Button title="초기화" onPress={() => setAge('')} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TextInput value={city}
                    onChangeText={setCity}
                    style={{ borderBottomWidth: 1, width: 200 }}
                    placeholder="사는곳을 입력해 주세요" 
                    />
                <Button title="초기화" onPress={() => setCity('')} />
            </View> */}
        </View>
    )
}

export default CustomHook;