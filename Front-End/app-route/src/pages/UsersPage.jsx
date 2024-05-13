import React, { useEffect, useState } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SearchComponent from '../components/SearchComponent';

const usersAPI = 'https://jsonplaceholder.typicode.com/users/';

export default function UsersPage() {

    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(usersAPI)
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    const detail = (id) => {
        navigate('/users/'+id);
    }

    const filteredUsers = (data) => {
      setSearchQuery(data.toLowerCase());
    }
   
  return (
    <Container>
        <h1>Users</h1>
        <SearchComponent filteredUsers={filteredUsers} />
        <ListGroup>
            {users
              .filter(user => user.name.toLowerCase().includes(searchQuery))
              .map(user => <ListGroup.Item key={user.id} data-testid="user-element">
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
