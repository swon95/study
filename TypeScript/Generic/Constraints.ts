// // 제네릭 매개변수 타입이 boolean이 허용되게 수정해주세요.
// const printMessage = <T extends string | number>(message: T): void => {
//     console.log(message)  
// }

// printMessage<boolean>(true)

// ---------------------------------------------------


// 매개변수 printMessage 의 제네릭 T 는 string 과 number 타입만 허용하게 지정 되어있다.
// boolean 타입이 허용되게 수정
const printMessage = <T extends string | number | boolean>(message: T): void => {
    console.log(message)  
}

printMessage<boolean>(true)