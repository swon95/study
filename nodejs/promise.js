// a, b 를 인자로 받고 callback 함수를 전달받음
function adder(a, b, callback) {
    if (a == 0 || b == 0) {
        callback("no zero", null);
        return;
    }
    console.log(`${a}+${b}=${a + b}`);
    
    callback(null, a + b);
}

function handle_error(error) {
    console.log("ERROR: ", error);
}

function adder_promise(a, b) {
    return new Promise((resolve, reject) => {
        adder(a, b, (err, result) => {
            if (err) {
                reject(err);
                /* 1. promise 에서 에러 처리하기 */
                return;
            }
            resolve(result)
            /* 2. promise 에서 결과값 처리하기 */
        });
    });
}

function add_all(a, b, c) {
    adder_promise(a, b)
        .then((result) => {
            return adder_promise(result, c)
        })
        // .then((result)=> adder_promise(result, c))
        /* 3. then 을 활용하여 result 와 c 를 add_promise 하기 */       
        .then(result2 => {
            console.log(`${a}+${b}+${c}=${result2}`);
        })
        .catch((err)=> handle_error(err))
        .catch(handle_error)
        /* 4. catch 를 활용하여 promise 의 에러를 handle_error 함수로 전달하기 */
}
// 여러 함수를 호출할 때
// module.exports = { add_all, adder, adder_promise };
module.exports = add_all;