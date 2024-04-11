import './App.css';
import ListComponent from './components/ListComponent';
import NavComponent from './components/NavComponent';
/* import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup'; */

import ClassComponent from './components/teoria/ClassComponent';
import FunctionalComponent from './components/teoria/FunctionalComponent';

let users = [
  {name: 'John', lastName: 'Smith', email: 'johnsmith@example.com'},
  {name: 'Maggie', lastName: 'Dhoe', email: 'maggiedhoe@example.com'},
  {name: 'Mario', lastName: 'Rossi', email: 'mariorossi@example.com'},
  {name: 'Mario', lastName: 'verdi', email: 'marioverdi@example.com'}
]

function App() {
  return (
    <>
    <NavComponent />
    <ListComponent title="Lista Utenti" utenti={users} />    

    {/* <ClassComponent />
    <FunctionalComponent /> */}
    </>
  );
}

export default App;
