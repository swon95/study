
// const add(a, b) => {
//     return `${a}+${b}=${a+b}`;
// };

// console.log(add);
// module.exports = add;

// 위와 동일한 코드
const add = (a, b) => (`${a}+${b}=${a+b}`);

console.log(add);
module.exports = add;