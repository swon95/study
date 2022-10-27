// // lastWord를 Default Parameter 형식으로 수정해주세요.
// function say(firstWord: string, lastWord: string) {  
//     return firstWord + " " + lastWord;
//   }
  
//   console.log(say("엘리스")) // "엘리스 타입스크립트" 출력

// -----------------------------------------------------------

// say 메소드의 두번째 매개변수 lastWord 에 default parameter 추가
function say(firstWord: string, lastWord: string = '타입스크립트') {  
    return firstWord + " " + lastWord;
  }
  
  console.log(say("엘리스"))