import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Join from './pages/Join'
import Login from './pages/Login';
import Main from './pages/Main';
import { clearUser, setUser } from './store/userReducer';

function App() {
  // 유저의 로그인 유무에 대한 인증 상태 구현
  const dispatch = useDispatch()
  const { isLoading, currentUser } = useSelector((state) => state.user)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(getAuth(), ( user ) => {
      if(!!user){ // user 정보가 존재할 경우
        dispatch(setUser(user)) // user 정보 저장
      }else{ // user 정보가 존재하지 않을 경우
        dispatch(clearUser()) // user 정보를 알려주기, 제거
      }
    })
    return () => unsubscribe() // onAuthStateChanged 함수가 계속해서 쌓이는 것을 방지
  },[dispatch])
  return (    
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/login' element={<Login/>} />
      {/* Join 에서 로그인이 된 경우 Main 페이지로 이동 */}
      {/* 아닌 경우 남아있기 */}
      <Route path='/join' element={currentUser ? <Navigate to="/" /> : <Join/>} />
    </Routes>
  );
}

export default App;
