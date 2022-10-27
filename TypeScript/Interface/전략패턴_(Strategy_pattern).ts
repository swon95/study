// interface PaymentStrategy {
//     pay(): void
//   }
  
//   // PaymentStrategy를 상속받는 두 개의 클래스를 구현해주세요.
//   // 각 클래스의 `pay()` 메소드를 호출했을 때 cash pay, card pay가 출력되어야 합니다.
  
//   class VendingMachine {
//     private paymentStrategy: PaymentStrategy
  
//     setPaymentStrategy(paymentStrategy: PaymentStrategy) {
//       this.paymentStrategy = paymentStrategy
//     }
  
//     pay() {
//       this.paymentStrategy.pay()
//     }
//   }
  
//   const vendingMachine = new VendingMachine()
  
//   vendingMachine.setPaymentStrategy(new CashPaymentStrategy())
//   vendingMachine.pay() // cash pay
  
//   vendingMachine.setPaymentStrategy(new CardPaymentStrategy())
//   vendingMachine.pay() // card pay


// ------------------------------------------------------------


interface PaymentStrategy {
    pay(): void
  }
  
  // 인터페이스 PaymentStrategy 를 상속
  class CashPaymentStrategy implements PaymentStrategy {
    // 인터페이스에 pay 메소드가 추상 메소드로 선언되어 있기 때문에
    // CashPaymentStrategy 클래스 내부에서 구현해줘야됨
    pay() : void {
        console.log('cash pay')
    }
  }

  // 인터페이스 PaymentStrategy 를 상속
  class CardPaymentStrategy implements PaymentStrategy {
    pay() : void {
        console.log('card pay')
    }
  }
  
//   VendingMachine 클래스 내부에 PaymentStrategy 필드 선언
  class VendingMachine {
    private paymentStrategy: PaymentStrategy
  
    // 필드 값은 setPaymentStrategy 를 통해 변경 가능
    setPaymentStrategy(paymentStrategy: PaymentStrategy) {
      this.paymentStrategy = paymentStrategy
    }
  
    pay() {
      this.paymentStrategy.pay()
    }
  }
  
  // 클래스 생성
  const vendingMachine = new VendingMachine()
  
  // CashPaymentStrategy 클래스 생성
  vendingMachine.setPaymentStrategy(new CashPaymentStrategy())
  vendingMachine.pay() // cash pay
  
   // CardPaymentStrategy 클래스 생성
  vendingMachine.setPaymentStrategy(new CardPaymentStrategy())
  vendingMachine.pay() // card pay
  