// interface Animal {
//     makeSound(): void
//   }
  
//   // Dog 인터페이스에 Animal 인터페이스를 확장하세요.
//   interface Dog {  
//     run(): void
//   }
  
//   // BullDog class는 Dog interface를 implements했기 때문에,
//   // interface가 가지고 있는 함수를 class에서 구현시켜야합니다.
//   class BullDog implements Dog {
      
//   }
  
//   const bullDog = new BullDog();
//   bullDog.makeSound(); // 멍멍 출력
//   bullDog.run(); // 달리기 출력

// ------------------------------------------------------------

interface Animal {
    makeSound(): void
        
  }
  
  // Animal 인터페이스로 확장
  interface Dog extends Animal{  
    run(): void         
        
  }
  

  class BullDog implements Dog {
    makeSound() : void {
        console.log('멍멍')
    }
        // run 메소드
        run() : void {
            console.log('달리기')
        }
      
  }
  
  const bullDog = new BullDog();
  bullDog.makeSound(); 
  bullDog.run(); 