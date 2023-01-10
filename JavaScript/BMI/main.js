function onSubmit(event) {
    event.preventDefault()

    const w = parseFloat(event.target[0].value)
    const h = parseFloat(event.target[1].value)

    // console.log(w, h)

    // html 에서의 유저의 수정을 방어하기 위한 로직 => w, h 에 숫자가 아닌 값이 들어가거나 0 보다 작은 숫자가 입력된 경우
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert('입력된 값이 올바르지 않습니다.')
        return
    }
    const bmi = w / (h * h)
    // 소숫점 n 번째 자리의 값을 구하기 위해서 .toFixed() 함수 사용
    console.log(bmi.toFixed(2))

    const res = document.getElementById('res')
    res.style.display = 'flex'

    document.getElementById('meter').value = bmi
    document.getElementById('bmi').innerText = bmi.toFixed(2)

    let state = '정상'
    let common = true

    if (bmi < 18.5) {
        state = '저체중'
        common = false
    }
    if (bmi >= 25) {
        state = '과체중'
        common = false
    }
    const stateElement = document.getElementById('state');
    stateElement.innerText = state
    stateElement.style.color = common ? '#29FF21' : '#FF3A3A' // common 이 true 일때 : false 일때

}