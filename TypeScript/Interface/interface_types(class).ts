// interface Animal {
//     makeSound(): void
//   }
  
//   // Dog class에 Animal interface를 implements합니다.
//   // 따라서 interface가 가지고 있는 함수를 class에서 구현해야 합니다.
//   class Dog {
//       // makeSound() 함수를 구현해주세요.
//       // 함수 호출 시, "멍멍" 콘솔이 나타날수 있게 cosole.log()를 구현해주세요
//   }
  
//   const dog = new Dog();
//   dog.makeSound(); // 멍멍 출력

// ----------------------------------------------------------------------


// makeSound 는 Animal 인터페이스의 추상 메소드로써
// implements 한 클래스에는 강제적으로 구현이 명시 되어야 한다.
interface Animal {
    makeSound(): void
  }
  
  
  // Animal 을 implements 한 Dog 클래스에서 makeSound 가 구현되어있지 않아 에러 발생
  class Dog implements Animal {
      makeSound() : void {
        console.log('멍멍')
      }
  }
  
  const dog = new Dog();
  dog.makeSound(); // 멍멍 출력