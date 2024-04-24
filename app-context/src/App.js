import { useState } from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';
import NavbarComponent from './components/NavbarComponent';
import { ThemeContext, AuthContext } from './modules/Contexts';

function App() {

  const [theme, setTheme] = useState('DarkTheme'); // Metodo senza Context

  // Metodo con context
  const [themes, setThemes] = useState('dark');
  const [AuthUser, setTAuthUser] = useState('Mario Rossi');
  
  return (
    <>
    <ThemeContext.Provider value={[themes, setThemes]} >
      <AuthContext.Provider value={[AuthUser, setTAuthUser]}>
        <NavbarComponent theme={theme}/>
        <MainComponent theme={theme} />
        <FooterComponent theme={theme} />
      </AuthContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
