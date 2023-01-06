// 유지보수를 위해 로직과 UI 를 분리

import { useState } from "react"

export const useCalculator = () => {
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

    const [isClickedOperator, setIsClickedOperator] = useState(false)

    const [isClickedEqual, setIsClickedEqual] = useState(false) // Equal == '='

    // const hasInput = input ? true : false // input 이 있으면 true 없으면 false
    const hasInput = !!input // 위 코드와 같은 의미 * input 을 boolean 값으로 변환시키기 위해 !!

    const onPressNum = (num) => {

        // 예외처리
        // 1. 두번째 피 연산자를 입력받을때 한자리수밖에 받아지지 않는 현상
        // - 바로 직전에 연산자를 클릭 했는지에 여부에 따른 로직 작성
        // isClickedOperator State 생성

        // currentOperator 가 있을때와 없을때의 로직

        // 있을때
        if (currentOperator && isClickedOperator) {
            setResult(input) // 새로 넘어온 값 이전의 값을 저장
            setInput(num) // input 값을 새로 넘어온 값으로 변경
            setIsClickedOperator(false) // Operator 를 클릭해 한자리수로 바꿔줄때 isClickedOperator 를 누르는 순간은 연산자가 클릭되지 않았다는 뜻이므로
        } 
        
        // 없을때
        else {
            // 현재는 입력받은 값만 출력이 되는데,
            // setInput(num)

            // 입력받은 숫자를 계속해서 이어붙이는형태로 보여지려면 어떻게해야할까
            // setInput( input + num ) // ??? 이 형태는 입력받은 값과 입력된 값이 모두 숫자형 타입이기 때문에 연산이되어버림 bad case

            // const newInput = `${input}${num}` // 데이터를 숫자형이 아닌 문자열로 인식하게끔 하여 받음 good case // 하지만 초기 값인 0도 string 으로 인식하여 0 뒤에 값들이 이어짐

            const newInput = Number(`${input}${num}`) // 값을 입력할 때 0 이 없어지고 입력받은 값부터 보여지게 Number 로 감싸줌
            setInput(newInput) // 계속해서 num 추가
        }
    }


    const onPressOperator = (operator) => {
        // 예외처리
        // 계산을 처리한 후 =  버튼을 누르게 되면 두번째 피연산자가 직전에 연산자로 계산되어 보여야하는데
        // 두번째 피연산자가 아닌 첫번째 피연산자가 연산자와 계산되는 현상
        // - isClickedEqual State 생성

        // 예외처리
        // operator 가 '=' 이 아닐때만 CurrentOperator 실행
        if (operator !== '=') {
            setCurrentOperator(operator)
            setIsClickedOperator(true)
            setIsClickedEqual(false)
        } else {
            // operator 가 '=' 일때 로직
            var finalResult = result
            // 예외처리
            var finalInput = isClickedEqual ? tempInput : input // 직전에 = 가 클릭이 됬을때와 아닐때
            // 예외처리
            // 직전에 = 을 눌렀는지 아닌지
            var finalOperator = currentOperator ? tempOperator : currentOperator // 직전에 = 를 눌렀으면 tempOperator 를 사용하고, 그렇지 않으면 currentOperator 사용
            
            switch ( currentOperator ) {
                case '+':
                    finalResult = result + finalInput // 현재 result 에 있는 값과 input 에 있는 값을 currentOperator 로 연산
                    break
                case '-':
                    finalResult = result - finalInput
                    break
                case '*':
                    finalResult = result * finalInput
                    break
                case '/':
                    finalResult = result / finalInput
                    break
                default:
                    break
            }
            setResult(finalResult) // 계산 로직을 원래 State 에 세팅
            setInput(finalResult)
            setTempInput(finalInput)
            // 계산 로직 후 = 를 눌렀을 때 연산자의 border 가 없어지게
            setCurrentOperator(null)
            // = 을 누를 때 실행되게
            setTempOperator(finalOperator)
            setIsClickedEqual(true)
        }
    }

    // 초기화 로직
    const onPressReset = () => {
        if (hasInput) { // C 로직
            setInput(0)
        } else { // AC 로직
        setInput(0)
        setCurrentOperator(null)
        setResult(null)
        setTempInput(null)
        setTempOperator(null)
        }
    }
    return {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,

        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset,
    }
}