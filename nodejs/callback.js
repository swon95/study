// countDown(count, callback) 함수는 count 값을 초 단위로 카운트 다운한 후 callback 함수를 실행하는 함수입니다.


// const countDown = require('./countdown');

// countDown(3, );

const countDown = require('./countdown');

// 5초 후
countDown(5, () => {
    // setTimeout 이 아닌 callback
    console.log("BOOM!")
});




// countdown.js
function countDown(count, callback) {
    console.log(count);
    
    if (count === 0) {
        callback();
        return;
    }
    
    setTimeout(() => {
        countDown(count - 1, callback);
    }, 1000);
}

module.exports = countDown;