const duck = {
    name: "duck",
    sound: "quack",
};

// const name = duck.name;
// const sound = duck.sound;

// 상수로 정의된 name, sound 를 한줄로 정의
// key 값인 name 을 newName 으로,
// sound 를 newSound 로 재 정의
const { name : newName, sound : newSound} = duck;

console.log("name", newName);
console.log("sound", newSound);


const animals = ["duck", "cat", "bear"];

// index 번호로 정의된 상수
// const first = animals[0];
// const second = animals[1];
// const third = animals[2];

// array destructing
const [ one, two, three ] = animals;

console.log("first", one);
console.log("second", two);
console.log("third", three);