import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import UsersPage from './pages/UsersPage';
import DetailUserPage from './pages/DetailUserPage';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route index element={<HomePage />} /> {/* Soluzione equivalente */}
          <Route path='/' element={<HomePage />} /> {/* Soluzione equivalente */}
          <Route path='/about' element={<AboutPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<DetailUserPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </>
  );
}

export default App;
