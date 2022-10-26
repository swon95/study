// 지시사항
// + 를 사용하여 선언된 문자열을 Template String 형태로 수정해보자.

const animal = 'Cat';
const legs = 4;
const sound = 'meow';

const explain = `${animal} has ${legs} legs.
${animal} says "${sound}".`;
    
    // 주어진 문자열
    // + ' has ' 
    // + legs 
    // + ' legs.\n' 
    // + animal 
    // + ' says \"' 
    // + sound 
    // + '\".';
    
console.log(explain);