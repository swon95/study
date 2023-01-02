import React, { useState } from "react";
import { TextInput, View, Button } from 'react-native'


const InputBox = (props) => {
    return(
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                value={name}
                onChangeText={setName}
                style={{ borderBottomWidth: 1, width: 200 }} 
                placeholder="이름을 입력하세요" 
            />
            <Button title="초기화" onPress={() => setName("")} />
        </View>
    )
}

// CustomHook 을 위한 회원가입예제
const CustomHook = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [city, setCity] = useState('')

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
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
            </View>
        </View>
    )
}

export default CustomHook;