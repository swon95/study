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
    // 커피 메뉴에서 파라미터로 받은 name과 일치하는 커피를 찾아주세요
    // 손님이 찾는 커피가 메뉴에 없다면 `메뉴에 없는 커피입니다. ${메뉴 이름 리스트}에서 골라주세요.` error를 throw해주세요
    // 만약 손님이 ice를 주문했는데 메뉴가 ice가 안되는 메뉴 또는 hot으로 주문했는데 메뉴가 hot이 안되는 메뉴라면
    // `이 메뉴는 ${ice ? "ice" : "hot"}(으)로 주문하실 수 없어요` error를 throw 해주세요
    
    // Order 모델 클래스로 order 객체를 생성해주세요. id는 uuidv4()를 호출한 값을 사용하면 됩니다.
    // storage의 create 메서드를 사용해 객체를 storage에 추가해주세요
    // storage의 create 메서드의 결과값을 반환해주세요
  }

  getCoffee(id) {
    // storage의 메서드를 사용해주세요
  }

  getAllOrders() {
    // storage의 메서드를 사용해주세요
    // storage의 메서드의 결과값이 빈 배열이라면 "주문 내역이 없습니다"를 반환해주세요 (throw가 아닙니다!)
    // 빈 배열이 아니라면 결과값을 그대로 반환해주세요
  }
}

export const orderService = new OrderService(new Storage(), coffeeMenuService);