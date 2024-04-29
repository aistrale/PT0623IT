import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const usersAPI = 'https://jsonplaceholder.typicode.com/users/';

export default function DetailUserPage() {

   const {id} = useParams();
   const [user, setUser] = useState();

   useEffect(() => {
     fetch(usersAPI+id)
      .then(response => response.json())
      .then(json => setUser(json))
   }, [])
   

  return (
    <div>Hello {user ? user.name : ''}</div>
  )
}
