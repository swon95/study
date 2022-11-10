import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Clayful from 'clayful/client-js'

function RegisterPage() {
  const [email, setEmail] = useState('') // 초기 값은 빈 문자열
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    // console.log('email', event.target.value) // 확인
    setEmail(event.target.value) // 입력한 값이 동기적으로 변환
  }

  const secretPassword = (event) => {
    // console.log('password', event.target.value)
    setPassword(event.target.value) // 비밀번호 입력시 유효성검사를 거치기 때문에 8 글자 이상 입력. <=> 7글자 입력시 에러 발생
  }

  const handleSubmit = (event) => {
    event.preventDefault() // 페이지가 재 렌더링 되는 현상을 막아주는 부분
    var Customer = Clayful.Customer;

    var payload = {
      email: email, // 이처럼 key 값과 value 값이 같으면
      password, // 이와 같이 생략 가능
    };
    console.log('payload', payload) // 사용자가 입력한 정보를 출력
    

    Customer.createMe(payload, function (err, result) {

      if (err) {
        // Error case
        console.log(err.code);
      }

      var data = result.data;

      console.log(data);

    });
  }

  return (
    <div className='auth-wrapper'>
      <h1>회원가입</h1>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='Apple ID' type='email' name='email' value={email} />
        <input onChange={secretPassword} placeholder='Password' type='Password' name='password' value={password} />

        <button type='submit'>회원가입</button>
        <Link to='login' style={{ color: 'gray', textDecoration: 'none' }}>
          이미 Apple Id 가 있다면? 지금 로그인.
        </Link>
      </form>
    </div>
  )
}

export default RegisterPage
