import React, { useState, useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Clayful from 'clayful/client-js'
import { AuthContext } from '../../context/AuthContext'


function LoginPage() {

  const [email, setEmail] = useState('') // 초기 값은 빈 문자열
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)

  const handleChange = (event) => {
    // console.log('email', event.target.value) // 확인
    setEmail(event.target.value) // 입력한 값이 동기적으로 변환
  }

  const secretPassword = (event) => {
    // console.log('password', event.target.value)
    setPassword(event.target.value) // 비밀번호 입력시 유효성검사를 거치기 때문에 8 글자 이상 입력. <=> 7글자 입력시 에러 발생
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    var Customer = Clayful.Customer;

    var payload = {
      // userId:   'user_id',
      email,
      password
    };

    Customer.authenticate(payload, function (err, result) {

      if (err) {
        // Error case
        console.log(err.code);
        return
      }

      var data = result.data;
      localStorage.setItem('customerUid', data.Customer) // 유저의 고유 ID
      localStorage.setItem('accessToken', data.token) // 로그인 상태를 확인하기 위한 토큰
      Navigate('/')
      isAuthenticated()

      // console.log(data);

    });
  }

  return (
    <div className='pageWrapper'>
      <div className='auth-wrapper'>
        <h1>로그인</h1>

        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder='Apple ID' type='email' name='email' value={email} />
          <input onChange={secretPassword} placeholder='Password' type='Password' name='password' value={password} />

          <p>Apple ID 는 iTunes, App Store, iCloud 에 로그인 할 때 사용하는 이메일 주소입니다.</p>

          <button type='submit'>로그인</button>

          <Link to='/register' style={{ color: 'gray', textDecoration: 'none' }}>
            Apple ID 가 없으신가요? 지금 생성하기
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
