import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import AuthContextProvider from './context/AuthContext'

function App() {

  return (

    <AuthContextProvider>
      <Header />
      <Routes>

        {/* LadningPage 컴포넌트 가져오기 */}
        <Route path='/' element={<LandingPage />} />

        {/* LoginPage 컴포넌트 가져오기 */}
        <Route path='/login' element={<LoginPage />} />

        {/* RegisterPage 컴포넌트 가져오기 */}
        <Route path='/register' element={<RegisterPage />} />

      </Routes>
    </AuthContextProvider>

  );
}

export default App;
