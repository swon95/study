// class Person {
//     name : string
//     constructor(name : string) {
//         this.name = name
//     }

//     // "my name is" + this.name을 출력하는 say() 함수를 완성하세요.
//     say() {

//     }
// }

// // Person 클래스의 인스턴스를 생성하여 "my name is 엘리스"가 출력되도록 say() 함수를 호출하세요.

// -----------------------------------------------------

class Person {
    name: string
    
    constructor(name: string) {
      this.name = name
    }
    
    
    say() {
        console.log("my name is " + this.name)
    }
  }
  
  
  const person = new Person('엘리스')
  person.say()