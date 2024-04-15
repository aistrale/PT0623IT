import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';
import NavComponent from './components/NavComponent';
/* import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup'; */

import ClassComponent from './components/teoria/ClassComponent';
import FunctionalComponent from './components/teoria/FunctionalComponent';

let userlist = [
  {name: 'John', lastName: 'Smith', phone: '123', email: 'johnsmith@example.com'},
  {name: 'Maggie', lastName: 'Dhoe', phone: '456',  email: 'maggiedhoe@example.com'},
  {name: 'Mario', lastName: 'Rossi', phone: '',  email: 'mariorossi@example.com'},
]



function App() {

  const [users, setUsers] = useState(userlist);

  const addUser = (obj) => {
    /* users.push(obj);
    console.log(users); */
    setUsers([...users, obj])
  }

  const removeUser = (obj) => {
    // logica per rimuovere un utente dallo stato
    console.log(obj)
  }

  return (
    <>
    <NavComponent />
    <FormComponent insertuser={addUser}  />
    <ListComponent title="Lista Utenti" utenti={users} deleteUser={removeUser} />    

    {/* <ClassComponent />
    <FunctionalComponent /> */}
    </>
  );
}

export default App;
