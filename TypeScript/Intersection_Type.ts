// /**
// * develop 메서드 선언: 
// * 1. 매개변수는 없고, 반환 타입은 void 입니다.
// * 2. "I'm programming"이라는 문자열을 출력합니다.
// */
// type Developer = {};

// /**
// * design 메서드 선언
// * 1. 매개변수는 없고, 반환 타입은 void 입니다.
// * 2. "I'm designing"이라는 문자열을 출력합니다.
// */
// type Designer = {};

// // Developer와 Designer 타입을 Intersection 해주세요.
// const 개자이너 = {};

// 개자이너.develop() // I'm programming 출력
// 개자이너.design() // I'm designing 출력

// ----------------------------------------------------------------

/**
* develop 메서드 선언: 
* 1. 매개변수는 없고, 반환 타입은 void 입니다.
* 2. "I'm programming"이라는 문자열을 출력합니다.
*/
type Developer = {

    // 겹치는 프로퍼티를 위해 output 생성
    // 1. 타입이(string) 같은 경우
    output : string
    // 화살표함수로 void 타입 반환
    develop : () => void
};
    

/**
* design 메서드 선언
* 1. 매개변수는 없고, 반환 타입은 void 입니다.
* 2. "I'm designing"이라는 문자열을 출력합니다.
*/
type Designer = {
    // 경우 1
    // output : string

    // 경우 2
    // output : number // 타입이 다를 경우 에러 발생
    
    // 경우 3
    output : string | number // number 타입의 경우 에러 발생 => Type 'number' is not assignable to type 'string'.
    design : () => void
};

// 에러 해결을 위해 type 선언
type Output = string & (number | string) // string 이면서 number 이거나, string 이면서 string 타입

// string 이면서 string 타입은 string 이 되고,
// string 이면 number 타입은 never 타입이 되는데, never 타입은 생략 가능하므로 string 만 작성
// string | never
// string

// Developer와 Designer 타입을 Intersection 해주세요.
// 교차 타입
const 개자이너 : Developer & Designer= {
    
    output : 'output'
    develop() {
        console.log("I'm programming")
    }
    design() {
        console.log("I'm designing")
    }
};

개자이너.develop() // I'm programming 출력
개자이너.design() // I'm designing 출력

// console.log(개자이너.output)