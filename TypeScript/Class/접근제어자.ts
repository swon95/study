// class Animal {
//     // 코드가 정상 동작 할수 있게 접근제어자를 수정해주세요.
//     private name: string
  
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name: string) {
//       super(name);    
//     }
    
//     makeSound() {
//       console.log(this.name + " 멍멍!!")
//     }
//   }
  
//   const dog = new Dog("진돗개")
//   dog.makeSound() // 진돗개 멍멍!! 출력

// ---------------------------------------------

class Animal {
    
    // private 접근 제어
    protected name: string // 자식 필드에서도 사용할 수 있게 Animal 클래스의 name 필드를 변경
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  // 부모 클래스 Animal
  class Dog extends Animal {
    constructor(name: string) {
      super(name);    
    }
    
    makeSound() {
        // name 필드 호출 불가 => 부모 클래스가 private 이기 때문에
      console.log(this.name + " 멍멍!!")
    }
  }
  
  // dog 클래스 생성
  const dog = new Dog("진돗개")
  dog.makeSound()
  