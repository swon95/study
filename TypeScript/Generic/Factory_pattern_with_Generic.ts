// interface Car {
//     drive(): void
//     park(): void
//   }
  
//   // Bus 클래스와 Taxi 클래스를 생성하세요.
  
  
//   // Factory pattern을 적용하기 위한 서브 클래스입니다.
//   class CarFactory { 
//     static getInstance<T extends Car>(type: { new (): T }): T {
//       return new type()
//     }
//   }
  
//   // CarFactory 클래스의 getInstance메소드를 이용해서 Bus, Taxi 인스턴스를 생성해주세요. 
//   const bus = null;
//   const taxi = null; 
  
//   bus.park();
//   taxi.park();

//   -----------------------------------------------------

interface Car {
    drive(): void
    park(): void
  }
  
  // Bus 클래스와 Taxi 클래스를 생성하세요.

  // Car 인터페이스를 implement 했기 때문에, 선언된 drive 와 park 함수를 구현 해 주어야함
    class Bus implements Car {
        drive() : void {}
        park() : void {
            console.log("버스 주차")
        }
    }  

    class Taxi implements Car {
        drive() : void {}
        park() : void {
            console.log("택시 주차")
        }
    }  
  
  // Factory pattern을 적용하기 위한 서브 클래스입니다.
  class CarFactory { 
    static getInstance<T extends Car>(type: { new (): T }): T {
      return new type()
    }
  }
  
  // CarFactory 클래스의 getInstance메소드를 이용해서 Bus, Taxi 인스턴스를 생성해주세요. 
  const bus = CarFactory.getInstance(Bus);
  const taxi = CarFactory.getInstance(Taxi); 
  
  bus.park();
  taxi.park();
  