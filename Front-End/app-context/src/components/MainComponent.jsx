import React, { useEffect, useState } from 'react'
import FormComponent from './FormComponent'
import ListComponent from './ListComponent'

/* const users = [
  {name: 'John', lastName: 'Smith', phone: '123', email: 'johnsmith@example.com'},
  {name: 'Maggie', lastName: 'Dhoe', phone: '456',  email: 'maggiedhoe@example.com'},
  {name: 'Mario', lastName: 'Rossi', phone: '',  email: 'mariorossi@example.com'},
] */

const UrlUsersAPI = 'https://jsonplaceholder.typicode.com/users/';

export default function MainComponent({theme}) {

  const [userlist, setUserList] = useState([]);

  useEffect(() => {
   fetch(UrlUsersAPI)
    .then(response => response.json())
    .then(json => setUserList(json))
  }, [])
  

  const addUser = (obj) => {
    //setUserList([...users, obj])
  }

  const removeUser = (obj) => {
    // logica per rimuovere un utente dallo stato
    const userFilter = userlist.filter(user => user.email !== obj.email)
    setUserList(userFilter);
  }

  return (
    <>
        <FormComponent addUser={addUser} theme={theme} />
        <ListComponent userlist={userlist} removeUser={removeUser} theme={theme} />
    </>
  )
}
