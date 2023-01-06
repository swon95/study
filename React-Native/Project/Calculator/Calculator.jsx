import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Styled from 'styled-components'
import { useState } from 'react'
import { useCalculator } from './use-calculator'

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
const Button = ({ text, onPress, flex, type, isSelected }) => {
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
            // isSelected == 버튼 클릭 시 선택되어있다 라는 지속효과를 주기 위해 사용
            // true(선택됬을때 == 1) : false(선택되지 않았을때 == 0.2)
            // 컴포넌트에 적용할 때 false 는 지정해주지 않아도 됨 
            borderWidth: isSelected ? 1 : 0.2,
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

    const {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,

        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset,
        
    } = useCalculator() // Hooks 사용

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
                    text={hasInput ? 'C' : 'AC'} // Clear : All Clear
                    onPress={() => onPressReset()}
                    // onPress={onPressReset} // 위랑 똑같은 코드임
                    // 4칸 중 3칸 차지
                    flex={3}

                // undefined or false 굳이 해주지 않아도 됨
                // isSelected= {undefined}
                // isSelected= {false}
                />
                <Button
                    type='operator'
                    text='/'
                    onPress={() => onPressOperator('/')}
                    // 4칸 중 1칸 차지
                    flex={1}
                    isSelected={currentOperator === '/'} // true
                />
            </ButtonContainer>

            {/* [7 ~ x] */}
            <ButtonContainer>
                {/* map 함수는 각각의 컴포넌트를 반환할 때 고유한 키 값이 존재해야함 */}
                {[7, 8, 9].map((num) => (
                    <Button
                        key={`num-${num}`} // num-7, num-8, num-9
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
                    text='*'
                    onPress={() => onPressOperator('*')}
                    flex={1}
                    isSelected={currentOperator === '*'}
                />
            </ButtonContainer>

            {/* [4 ~ -] */}
            <ButtonContainer>
                {[4, 5, 6].map((num) => (
                    <Button
                        key={`num-${num}`}
                        type='num'
                        text={`${num}`}
                        onPress={() => onPressNum(num)}
                        flex={1}
                    />
                ))}

                <Button
                    type='operator'
                    text='-'
                    onPress={() => onPressOperator('-')}
                    flex={1}
                    isSelected={currentOperator === '-'}
                />
            </ButtonContainer>

            {/* [1 ~ +] */}
            <ButtonContainer>
                {[1, 2, 3].map((num) => (
                    <Button
                        key={`num-${num}`}
                        type='num'
                        text={`${num}`}
                        onPress={() => onPressNum(num)}
                        flex={1}
                    />
                ))}

                <Button
                    type='operator'
                    text='+'
                    onPress={() => onPressOperator('+')}
                    flex={1}
                    isSelected={currentOperator === '+'}
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
                    onPress={() => onPressOperator('=')}
                    flex={1}
                />
            </ButtonContainer>
        </View>
    )
}