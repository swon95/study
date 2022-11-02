import { v4 as uuidv4 } from "uuid";
import { Order } from "../db/models/Order";
import { coffeeMenuService } from "./CoffeeMenuService";
import Storage from "../db/Storage";

export class OrderService {
  storage;
  coffeeMenuService;
  constructor(storage, coffeeMenuService) {
    this.storage = storage;
    this.coffeeMenuService = coffeeMenuService;
  }

  /**
   * @param {string} name
   * @param {boolean} ice
   * @return { id, name, price, ice } -> Coffee Model
   */
  orderCoffee(name, ice) {
    // coffeeMenuService의 getMenus 메서드를 사용해 모든 커피 메뉴를 구해주세요
    // 11. coffeeMenuService 는 OrderService 의 멤버 이기에 this 로 꺼내올 수 있음
    const menus = this.coffeeMenuService.getMenus

    // 커피 메뉴에서 파라미터로 받은 name과 일치하는 커피를 찾아주세요
    const menu = menus.find(menu => meun.name === name)

    // 손님이 찾는 커피가 메뉴에 없다면 `메뉴에 없는 커피입니다. ${메뉴 이름 리스트}에서 골라주세요.` error를 throw해주세요
    
    // 12. typeof 연산자로 validation
    if (typeof menu === 'undefined') {
      // 13. 템플릿 리터럴 ``
      // map == 반복문 => 메뉴 이름 리스트 반환
      throw new Error(`메뉴에 없는 커피입니다. ${menu.map(menu => menu.name)}에서 골라주세요.`)
    }
    // 만약 손님이 ice를 주문했는데 메뉴가 ice가 안되는 메뉴 또는 hot으로 주문했는데 메뉴가 hot이 안되는 메뉴라면
    // `이 메뉴는 ${ice ? "ice" : "hot"}(으)로 주문하실 수 없어요` error를 throw 해주세요
    // 14. 만약 ice == true 인데 menu.ice 가 false 라면,
    // 또는, ice == false == 손님이 주문한 메뉴가 hot 인데 menu.hot 이 false 라면
    // 템플릿 리터럴 메세지 출력
    if ((ice && !menu.ice) || (!ice && !menu.hot)) {
      throw new Error(`이 메뉴는 ${ice ? "ice" : "hot"}(으)로 주문하실 수 없어요`)
    }

    // Order 모델 클래스로 order 객체를 생성해주세요. id는 uuidv4()를 호출한 값을 사용하면 됩니다.
    // 16. order 객체 생성
    // id 는 파라미터로 받지 않았기 때문에 uuidv4 함수로 랜덤한 id 값을 받음
    // price 는 menu 객체에서 값을 가져옴
    const order = { id: uuidv4(), name, price: meun.price, ice }
    // storage의 create 메서드를 사용해 객체를 storage에 추가해주세요
    // 17. storage 의 item 메서드에 order 객체 추가
    // storage의 create 메서드의 결과값을 반환해주세요
    return this.storage.create(order)
  }

  getCoffee(id) {
    // storage의 메서드를 사용해주세요
    // 18. get 에서 id 를 파라미터로 받는다는 것은 storage 의 매개변수를 보고 파악하기
    return this.storage.create.get(id)
  }

  getAllOrders() {
    // storage의 메서드를 사용해주세요
    const orders = this.storage.getAll()
    // storage의 메서드의 결과값이 빈 배열이라면 "주문 내역이 없습니다"를 반환해주세요 (throw가 아닙니다!)
    if (orders.length === 0) {
      return "주문 내역이 없습니다"
    }
    // 빈 배열이 아니라면 결과값을 그대로 반환해주세요
    return orders
  }
}

// 1. OrderService 의 경우 coffeeMenuService 에 의존하고 있기 때문에, coffeeMenuService 먼저 작성해 줄 예정
export const orderService = new OrderService(new Storage(), coffeeMenuService);