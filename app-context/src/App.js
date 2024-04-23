import { useState } from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';
import NavbarComponent from './components/NavbarComponent';
import { createContext } from 'react';


const themesOptions = {
  LightTheme : {backgroundColor: '#FFFFFF', color: '#000000'},
  DarkTheme : {backgroundColor: '#000000', color: '#FFFFFF'}
}


export const ThemeContext = createContext('LightTheme');

function App() {

  const [theme, setTheme] = useState('DarkTheme'); // Metodo senza Context

  // Metodo con context
  const [themes, setThemes] = useState(themesOptions);
  

  return (
    <>
    <ThemeContext.Provider value={[themes, setThemes]} >
      <NavbarComponent theme={theme}/>
      <MainComponent theme={theme} />
      <FooterComponent theme={theme} />
    </ThemeContext.Provider>
    </>
  );
}

export default App;
