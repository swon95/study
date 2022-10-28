// // string과 number 두 타입이 허용될수 있게 union type을 선언해주세요
// const printMessage = () => {
//     console.log(message)  
// }

// printMessage(1234)
// printMessage("hello")

// ----------------------------------------------------

// Union type은 키워드 | 를 통해 둘 이상의 타입을 선언하는 방식이다.

// printMessage 의 파라미터(매개변수)가 선언되어 있지 않아 숫자와 문자열을 받을 수 있게 수정해줌
const printMessage = (message : number | string) => {
    console.log(message)  
}

printMessage(1234)
printMessage("hello")