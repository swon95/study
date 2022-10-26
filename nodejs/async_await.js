// adder_promise == 두 값을 더한 결과를 promise 로 전달하는 함수
const adder_promise = require('./promise');

function main_promise(a, b, c, d) {
    Promise.all([
        adder_promise(a, b),
        adder_promise(c, d),
    ])
    .then(([r1, r2]) => {
        return adder_promise(r1, r2);
    })
    .then((r3) => {
        console.log(`${a}+${b}+${c}+${d}=${r3}`);
    });
}

/* 1. main 을 async 함수로 선언 */
async function main(a, b, c, d) {
    /* 2. 두 promise 함수를 동시에 실행하여 결과를 r1, r2에 저장 */
    const [r1, r2] = 
    
        // 전달된 값을 async 에서 받기위해 await 사용
        await Promise.all([

        // r1
        adder_promise(a, b),
        // r2
        adder_promise(c, d)

    ])
    const r3 = await adder_promise(r1, r2)/*3. r1 과 r2 를 한번 더 adder_promise 로 실행 */
    console.log(`${a}+${b}+${c}+${d}=${r3}`);
}

// 함수 호출
main(1,2,3,4);





// promise.js
function adder_promise(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a+b);
    });
}

module.exports = adder_promise;