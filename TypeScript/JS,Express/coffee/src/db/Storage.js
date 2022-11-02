class Storage {
    items = [];
    create(input) {
      // 6. items 을 받으면, 가지고 있는 items 배열에 하나씩 추가하고
      // 받은 items 를 반환해주는 메서드
      this.items.push(input);
      return input;
    }
    get(id) {
      return this.items.find((item) => item.id === id);
    }
  
    // 8. 지금까지 저장된 모든 items 배열을 가져오는 메서드
    getAll() {
      return this.items;
    }
  }
  
  export default Storage;