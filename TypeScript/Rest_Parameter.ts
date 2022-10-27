// // restOfChar를 rest parameters형식으로 수정해주세요
// function makeWord(firstChar: string, restOfChar: string) {  
//     return firstChar + restOfChar.join("")
//   }
  
//   let word = makeWord("타", "입", "스", "크", "립", "트")
  
//   console.log(word) // 타입스크립트 출력
  
//   ---------------------------------------------------


function makeWord(firstChar: string, ...restOfChar: string[]) {  
    return firstChar + restOfChar.join("")
  }
  
  let word = makeWord("타", "입", "스", "크", "립", "트")
  
  console.log(word)