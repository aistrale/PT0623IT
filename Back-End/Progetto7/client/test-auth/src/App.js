import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
