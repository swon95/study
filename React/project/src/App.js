import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <Routes>

      {/* LadningPage 컴포넌트 가져오기 */}
      <Route path='/' element={<LandingPage />} />

      {/* LoginPage 컴포넌트 가져오기 */}
      <Route path='/login' element={<LoginPage />} />
      
      {/* RegisterPage 컴포넌트 가져오기 */}
      <Route path='/register' element={<RegisterPage />} />
    
    </Routes>
  );
}

export default App;
