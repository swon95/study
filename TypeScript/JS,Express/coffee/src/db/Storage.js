class Storage {
    items = [];
    create(input) {
      this.items.push(input);
      return input;
    }
    get(id) {
      return this.items.find((item) => item.id === id);
    }
  
    getAll() {
      return this.items;
    }
  }
  
  export default Storage;