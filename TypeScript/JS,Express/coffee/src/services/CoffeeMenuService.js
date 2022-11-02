// 5. uuid == 랜덤한 id 값을 생성해주는 라이브러리
import { v4 as uuidv4 } from "uuid";
import { CoffeeMenu } from "../db/models/CoffeeMenu";
import Storage from "../db/Storage";

// 2. coffeeMenuService 클래스 내부에는 addCoffeeMenu, getMenu, getMenus 메서드를 포함하고 있다.
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


  // 4. name, price, ice, hot 의 경우 이미 파라미터로 받고 있지만,
  // id 의 경우 파라미터로 전달받지 않고 있기 때문에 uuidv4() 를 사용해 랜덤한 id 값을 생성함
  addCoffeeMenu({ name, price, ice, hot }) {
    // CoffeeMenu 모델 클래스로 객체를 생성하여
    
    // new CoffeeMenu() // 이렇게 생성해도 됨
    const coffeeMenu = { id: uuidv4(), name, price, ice, hot } // 

    // storage의 create 메서드를 사용해 객체를 storage에 추가한 후
    // create 메서드의 결과값을 반환해주세요
    return this.storage.create(coffeeMenu)

    // CoffeeMenu의 id는 uuidv4()를 호출한 값을 사용하면 됩니다.
  }

  getMenu(id) {
    // storage의 메서드를 사용해주세요
    return this.storage.get(id);
  }

  getMenus() {
    // storage의 메서드를 사용해주세요
    // 7. storage 메서드를 사용해 getMenu 를 가져옴
    const menus = this.storage.getAll()
    // 만약 결과값이 빈 배열이라면 `아직 카페가 오픈 전이에요. 잠시 후 다시 주문해주세요.`라는 에러를 throw합니다.
    // 9. 빈 배열 === 0
    if (menus.length === 0) {
      throw new Error(`아직 카페가 오픈 전이에요. 잠시 후 다시 주문해주세요.`)
    }

    // 결과값이 빈 배열이 아니라면 storage의 메서드의 결과값을 반환합니다.
    return menus
  }
}

// 10. 하나의 인스턴스만 생성하여 사용하는 싱글톤 패턴
export const coffeeMenuService = new CoffeeMenuService(new Storage());