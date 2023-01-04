import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Styled from 'styled-components'

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

export default () => {
    return (
        // 부모 컴포넌트에 속성을 부여해야 자식에도 적용
        <View style={{ flex: 1, width: 250 }}>
            {/* 결과 */}

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
                <Button
                    type='num'
                    text='7'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='num'
                    text='8'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='num'
                    text='9'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='operator'
                    text='X'
                    onPress={() => null}
                    flex={1}
                />
            </ButtonContainer>
            {/* [4 ~ -] */}
            <ButtonContainer>
                <Button
                    type='num'
                    text='4'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='num'
                    text='5'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='num'
                    text='6'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='operator'
                    text='-'
                    onPress={() => null}
                    flex={1}
                />
            </ButtonContainer>
            {/* [1 ~ +] */}
            <ButtonContainer>
                <Button
                    type='num'
                    text='1'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='num'
                    text='2'
                    onPress={() => null}
                    flex={1}
                />
                <Button
                    type='num'
                    text='3'
                    onPress={() => null}
                    flex={1}
                />
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
                    onPress={() => null}
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