
// 3. addCoffeeMenu 메서드로 전달받는 객체
export class CoffeeMenu {
    id;
    name;
    price;
    ice;
    hot;
  
    constructor({ id, name, price, ice, hot }) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.ice = ice;
      this.hot = hot;
    }
  }