// interface Person {
//     job: string
//   }
  
//   function sayMyJob(obj: Person) {
//     console.log(obj.job)
//   }
  
//   // developer 변수에 interface Person 타입이 선언이 되어있습니다.
//   // 오류가 발생하지 않게, developer 변수에 프로퍼티값을 선언해주세요
//   const developer: Person = {}
  
//   sayMyJob(developer) // 개발자
  
// -------------------------------------------------------------------

// interface Person 에는 job 프로퍼티 선언
interface Person {
    job: string
  }
  
  function sayMyJob(obj: Person) {
    console.log(obj.job)
  }
  

  // developer 변수에 Person 인터페이스의 타입을 선언 해놓고 객체에는 아무런 값도 할당해주지 않아서 오류발생
  const developer: Person = {
    job : '개발자'
  }
  
  sayMyJob(developer)
  