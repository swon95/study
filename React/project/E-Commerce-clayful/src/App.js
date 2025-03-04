import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage'
import CartPage from './pages/CartPage/CartPage';

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

        {/* Product 하위에서 각각의 상품 고유의 ID 값 Page */}
        <Route path='/product/:productId' element={<DetailProductPage />} />

        <Route path='/user/cart' element={<CartPage />} />

      </Routes>
    </AuthContextProvider>

  );
}

export default App;
