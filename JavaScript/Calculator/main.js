// 왼쪽 피연산자, 오른쪽 피연산자, 연산자, res 가 true 일 때는 = 버튼이 눌린 경우
let left = null, right = null, operator = null, res = false, resValue = null

function save() {
    const inp = document.getElementById('top-inp')
    let value = ""

    if (left === null)
        return

    console.log('버튼 눌렀다2', left)

    value += left + " "
    inp.value = value

    if (operator === null)
        return
    value += operator + " "
    inp.value = value

    if (right === null)
        return
    value += right + " "
    inp.value = value


    // 사칙연산
    if (res) {
        // let resValue = ""
        switch (operator) {
            case "+":
                resValue = parseInt(left) + parseInt(right)
                break
            case "-":
                resValue = parseInt(left) - parseInt(right)
                break
            case "*":
                resValue = parseInt(left) * parseInt(right)
                break
            case "/":
                resValue = parseInt(left) / parseInt(right)
                break
        }
        value += "=" + resValue
        inp.value = value

    }
}

function inputNum(num) {
    if (operator === null) {
        if (left === null) {
            left = `${num}`
        }
        else {
            // 왼쪽 피연산자가 0 이고, num 도 0 이라면 return 으로 아래 명령문 실행 x
            if (num === 0 && parseInt(left) === 0)
                return

            left += `${num}`
        }
        // console.log('버튼 눌렀다1', left)
    }
    // 연산자가 입력되지 않았는데 숫자가 입력된경우 
    else {
        if (right === null) {
            right = `${num}`
        }
        else {
            if (num === 0 && parseInt(right) === 0)
                return

            right += `${num}`
        }
    }
    save()
}

function inputOper(op) {
    if (left === null && op === '-') {
        // 왼쪽 피연산자가 음수인 경우
        left = '-'
        save()
        return
    }
    if (left === '-' && op === '-') {
        return
    }
    // 연산자가 - 인데 기존에 값이 존재하며 오른쪽 피연산자에 값이 입력되지 않았다면
    if (op === '-' && operator !== null && right === null) {
        right = '-'
        save()
        return
    }
    operator = op
    save()
}

function inputEqu(op) {
    // 만약 피연산자와 연산자가 입력되지 않은 경우 아래 로직 실행 x
    if (left === null || right === null || !operator)
        return

    if (res) {
        left = resValue
        right = null
        resValue = null
        operator = null
        res = false
    }
    else {
        res = true
    }
    console.log(res)
    save()
}