import { v4 as uuidv4 } from "uuid";
import { CoffeeMenu } from "../db/models/CoffeeMenu";
import Storage from "../db/Storage";

class CoffeeMenuService {
  storage;
  constructor(storage) {
    this.storage = storage;
  }

  /**
   * @param {string} name
   * @param {number} price
   * @param {boolean} ice
   * @param {boolean} hot
   */
  addCoffeeMenu({ name, price, ice, hot }) {
    // CoffeeMenu 모델 클래스로 객체를 생성하여 
    // storage의 create 메서드를 사용해 객체를 storage에 추가한 후
    // create 메서드의 결과값을 반환해주세요
    // CoffeeMenu의 id는 uuidv4()를 호출한 값을 사용하면 됩니다.
  }

  getMenu(id) {
    // storage의 메서드를 사용해주세요
    return this.storage.get(id);
  }

  getMenus() {
    // storage의 메서드를 사용해주세요
    // 만약 결과값이 빈 배열이라면 `아직 카페가 오픈 전이에요. 잠시 후 다시 주문해주세요.`라는 에러를 throw합니다.
    // 결과값이 빈 배열이 아니라면 storage의 메서드의 결과값을 반환합니다.
  }
}


export const coffeeMenuService = new CoffeeMenuService(new Storage());