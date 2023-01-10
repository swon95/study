function onSubmit(event) {
    event.preventDefault()

    const w = parseFloat(event.target[0].value)
    const h = parseFloat(event.target[1].value)

    console.log(w, h)

    // html 에서의 유저의 수정을 방어하기 위한 로직 => w, h 에 숫자가 아닌 값이 들어가거나 0 보다 작은 숫자가 입력된 경우
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert('입력된 값이 올바르지 않습니다.')
        return
    }
}