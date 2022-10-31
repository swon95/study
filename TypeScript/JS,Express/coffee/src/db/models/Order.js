export class Order {
    id;
    name;
    price;
    ice;
  
    constructor({ id, name, price, ice }) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.ice = ice;
    }
  }