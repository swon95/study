// abstract class Animal {
//     protected name: string
  
//     constructor(name: string) {
//       this.name = name
//     }
  
//     abstract makeSound(): void
//   }
  
//   class Dog extends Animal {
//     // constructor를 구현해주세요
      
//     // 추상메소드 makeSound()를 Dog 클래스 내부에서 구현해주세요
//     // makeSound() 메소드에 console.log를 구현해주세요.
//   }
  
//   // 클래스 name필드에 값 "진돗개"를 할당해주세요
//   const dog = new Dog()
//   dog.makeSound() // 진돗개 멍멍!!

// ---------------------------------------------------------------

abstract class Animal {
    protected name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    // Animal 클래스에서 선언되어있는 추상 메소드 makeSound를 아래 Dog 클래스에서 구현해야함
    abstract makeSound(): void
  }
  
  // Dog 클래스는 Animal 클래스를 상속받음
  class Dog extends Animal {

    constructor(name : string) {
        // 부모 클래스를 호출하기 위해 super
        super(name)
    }
    
    makeSound() : void {
        console.log(this.name + ' 멍멍!!')
    }
  }
  
 
  const dog = new Dog('진돗개')
  dog.makeSound()
  