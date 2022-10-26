class Animal {
    constructor(name, sound) {
        /* constructor 완성하기 */

        // 생성자 생성
        this.name = name
        this.sound = sound
    }
    
    // 생성된 this. 를 사용
    explain() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

// "duck", "quack" 객체 생성 => new
const duck = new Animal("duck","quack")


module.exports = duck;