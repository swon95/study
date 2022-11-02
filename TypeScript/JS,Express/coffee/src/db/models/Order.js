export class Order {
    id;
    name;
    price;
    ice;
  
    // 15. order 객체 확인
    constructor({ id, name, price, ice }) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.ice = ice;
    }
  }