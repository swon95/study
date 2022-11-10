import React from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className='auth-wrapper'>
      <h1>회원가입</h1>
      
      <form>
        <input placeholder='Apple ID' type='email' name='email' value='' />
        <input placeholder='Password' type='암호' name='password' value='' />
        
        <button type='submit'>로그인</button>
        <Link to = 'login' style={{ color : 'gray', textDecoration : 'none' }}>
          이미 Apple Id 가 있다면? 지금 로그인.
        </Link>
      </form>
    </div>
  )
}

export default RegisterPage
