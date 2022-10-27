// Car enum을 이용해서 taxi 변수에 알맞은 값을 할당해서 정상동작할수 있게 수정하기



// enum 선언
enum Car {
    BUS = "bus", 
    TAXI = "taxi", 
    SUV = "suv" 
}

// enum Car를 이용해서 taxi값을 할당해주세요.
const taxi:Car = Car.TAXI

console.log(taxi); // TAXI 출력
