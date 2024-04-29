import React, { useEffect, useState } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const usersAPI = 'https://jsonplaceholder.typicode.com/users/';

export default function UsersPage() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(usersAPI)
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    const detail = (id) => {
        navigate('/users/'+id);
    }
    

  return (
    <Container>
        <h1>Users</h1>
        <ListGroup>
            {users.map(user => <ListGroup.Item key={user.id}>
                                    {user.name}
                                    <Button 
                                      variant="warning" 
                                      className='float-end'
                                      onClick={() => detail(user.id)}
                                      >i</Button>
                                </ListGroup.Item>)}
        </ListGroup>
    </Container>
  )
}
