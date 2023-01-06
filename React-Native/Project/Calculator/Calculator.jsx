import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Styled from 'styled-components'
import { useState } from 'react'

// 버튼 타입에 따른 색 변화
const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
}

// Button type: 'reset' | 'operator' | 'num'
// text == 할당된 구역에 들어가는 텍스트
// onPress == 클릭했을때의 동작
// flex == 컨테이너에서 버튼들의 크기를 제어
// type == 타입에 따른 색깔의 변화
const Button = ({ text, onPress, flex, type }) => {
    const backgroundColor =
        // type 이 reset 일때는 COLOR.RESET
        type === 'reset'
            ? COLOR.RESET
            // type 이 operator 일때는 COLOR.OPERATOR
            : type === 'operator'
                ? COLOR.OPERATOR
                // type 이 num 일때는 COLOR.NUM
                : type === 'num'
                    ? COLOR.NUM
                    // 그렇지 않은 예외 상황인 경우엔 아무것도 띄워주지 않는 transparent
                    : 'transparent'

    return (

        // 자식 컴포넌트 flex
        // backgroundColor 는 타입마다 색깔이 다르기에 상단에 재 정의
        <TouchableOpacity onPress={onPress} style={{
            flex,
            backgroundColor,
            // 가운데정렬
            justifyContent: 'center',
            alignItems: 'center',

            // paddingVertical: 15, // top 과 bottom 을 늘려주는 속성
            height: 50, // 높이 고정
            borderWidth: 0.2,
            borderColor: 'black',
        }}>
            <Text style={{ color: 'white', fontSize: 25 }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const ButtonContainer = Styled.View`
    flex-direction: row;
    width: 100%;
`

const InputContainer = Styled.View`
    background-color: ${COLOR.RESULT}
    min-height: 50px
    justify-content: center;
    align-items: flex-end;
    padding: 10px 5px;
`
// padding: 5px // top, right, bottom, left => 4 방향 모두 적용
// padding: 5px, 10px // top, bottom (Vertical), left, right (horizontal)
// padding: 1px, 2px, 3px, 3px // top, right, bottom, left // 각각의 방향에 간격 지정


export default () => {

    // 사용자가 입력하는 값을 받는 state
    const [input, setInput] = useState(0) // 12

    // 입력받은 값을 기반으로 연산자를 선택했을때의 state
    const [currentOperator, setCurrentOperator] = useState(null) // +

    // 새로 입력받은 값 이전에 받았던 값을 저장하는 state
    const [result, setResult] = useState(null) // 12 + 2 = 14

    // 이전 계산에 사용됬던(입력받았던) 피연산자의 state 
    const [tempInput, setTempInput] = useState(null) // 14

    // temp 에 해당하는 값을 계산하기위한 연산자가 담긴 state
    const [tempOperator, setTempOperator] = useState(null) // 16, 18, 20, 22, 24.....


    const onPressNum = (num) => {
        
        // 현재는 입력받은 값만 출력이 되는데,
        // setInput(num)

        // 입력받은 숫자를 계속해서 이어붙이는형태로 보여지려면 어떻게해야할까
        // setInput( input + num ) // ??? 이 형태는 입력받은 값과 입력된 값이 모두 숫자형 타입이기 때문에 연산이되어버림 bad case
        
        // const newInput = `${input}${num}` // 데이터를 숫자형이 아닌 문자열로 인식하게끔 하여 받음 good case // 하지만 초기 값인 0도 string 으로 인식하여 0 뒤에 값들이 이어짐

        const newInput = Number(`${input}${num}`) // 값을 입력할 때 0 이 없어지고 입력받은 값부터 보여지게 Number 로 감싸줌
        setInput(newInput)
    }

    return (
        // 부모 컴포넌트에 속성을 부여해야 자식에도 적용
        <View style={{ flex: 1, width: 250, justifyContent: 'center' }}>
            {/* 결과 */}
            <InputContainer>
                <Text style={{ color: 'white', fontSize: 35, textAlign: 'right' }}>{input}</Text>
            </InputContainer>

            {/* [AC ~ /] */}
            {/* width 를 지정해주지 않으면 화면에 출력되지 않음 */}
            <ButtonContainer>
                <Button
                    type='reset'
                    text='AC'
                    onPress={() => null}
                    // 4칸 중 3칸 차지
                    flex={3}
                />
                <Button
                    type='operator'
                    text='/'
                    onPress={() => null}
                    // 4칸 중 1칸 차지
                    flex={1}
                />
            </ButtonContainer>

            {/* [7 ~ x] */}
            <ButtonContainer>
                {[7, 8, 9].map((num) => (
                    <Button
                        type='num'
                        // 실제로 바뀌는 부분
                        text={`${num}`} // text 는 string 타입이어야 하므로 ``(백틱)으로 감싸줌
                        // text={String(num)} // 이 방법을 사용해도 무관
                        onPress={() => onPressNum(num)}
                        flex={1}
                    />
                ))}

                <Button
                    type='operator'
                    text='X'
                    onPress={() => null}
                    flex={1}
                />
            </ButtonContainer>

            {/* [4 ~ -] */}
            <ButtonContainer>
                {[4, 5, 6].map((num) => (
                    <Button
                        type='num'
                        text={`${num}`}
                        onPress={() => onPressNum(num)}
                        flex={1}
                    />
                ))}
    
                <Button
                    type='operator'
                    text='-'
                    onPress={() => null}
                    flex={1}
                />
            </ButtonContainer>

            {/* [1 ~ +] */}
            <ButtonContainer>
                {[1, 2, 3].map((num) => (
                    <Button
                        type='num'
                        text={`${num}`}
                        onPress={() => onPressNum(num)}
                        flex={1}
                    />
                ))}

                <Button
                    type='operator'
                    text='+'
                    onPress={() => null}
                    flex={1}
                />
            </ButtonContainer>

            {/* [0 ~ =] */}
            <ButtonContainer>
                <Button
                    type='num'
                    text='0'
                    onPress={() => onPressNum(num)}
                    flex={3}
                />
                <Button
                    type='operator'
                    text='='
                    onPress={() => null}
                    flex={1}
                />
            </ButtonContainer>
        </View>
    )
}