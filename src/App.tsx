// src/App.tsx
import { Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/Auth/LoginPage';
import AuthLayout from './pages/Layout/AuthLayout';
import RegisterPage from './pages/Auth/RegisterPage';
import HomePage from './pages/Home/HomePage';
import HomeLayout from './pages/Layout/HomeLayout';
import ProductListPage from './pages/Product/ProductListPage';

function App() {
  return (
    <div>
      <Routes>
        <Route Component={AuthLayout}>
          <Route path='login' Component={LoginPage}></Route>
          <Route path='register' Component={RegisterPage}></Route>
        </Route>

        {/* Protected / Home route */}
        <Route Component={HomeLayout}>
          <Route path="home" Component={HomePage} />
          <Route path="product/:slug" Component={ProductListPage} />
        </Route>

        <Route path='*' element={<Navigate to='/login' />}></Route>
      </Routes>
    </div>
  );
}

export default App;
