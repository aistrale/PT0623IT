import React, { useEffect, useState } from 'react'
import { Container, ListGroup, Spinner, Alert, Form } from 'react-bootstrap'

let userlist = [
    {id: 1, name: 'John Smith', email: 'johnsmith@example.com', phone: '+39123456789'}
]

const UrlUsersAPI = 'https://jsonplaceholder.typicode.com/users/';
const UrlPostsAPI = 'https://jsonplaceholder.typicode.com/posts/';
  
export default function UserList() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [userSelected, setUserSelected] = useState(0);
    const [postSelected, setPostSelected] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // logica da eseguire al montaggio del componente
        // logica da eseguire ad ogni modifica del componente
      return () => {
        // logica da eseguire prima dello smontaggio del componente
      }
    }, [users]) // Dipendeza da ascoltare per eseguire lo useEffect come didupdate
    
    // UseEffect eseguito solo in fase di montaggio
    // Leggo le API Users
    useEffect(() => {
        fetch(UrlUsersAPI)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setLoading(false);
                    setUsers(json);
                }, 3000) // Simulo una connessione lenta
            })
            .catch(error => {
                setLoading(false);
                setError('Caricamento errato... ');
            })
    }, []);

    // Leggo le API Posts
    useEffect(() => {
        //https://jsonplaceholder.typicode.com/users/     8     /posts
        fetch(UrlUsersAPI + userSelected + '/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json);
            })
    }, [userSelected]);

    useEffect(() => {
      //https://jsonplaceholder.typicode.com/posts/     0     /comments
      if(postSelected !== 0) {
        fetch(UrlPostsAPI + postSelected + '/comments')
            .then(response => response.json())
            .then(json => {
                setComments(json);
            })
        }
    }, [postSelected])
    

    const handleChangeUser = (e) => {
        //console.log(e.target.value);
        setUserSelected(e.target.value)
        //setComments([]);
        setPostSelected(0);
    }

    const handleChangePost = (e) => {
        //console.log(e.target.value);
        setPostSelected(e.target.value)
    }

  return (
    <Container>
        <h1>UserList</h1>
        {loading && 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        {error && 
            <Alert variant='danger'>
                {error}
            </Alert>
        }
        {/* <ListGroup>
            {users.map(user => <ListGroup.Item>{user.name}</ListGroup.Item>)}
        </ListGroup> */}
        <Form.Select className='my-3' aria-label="Default select example" name='user' onChange={handleChangeUser}>
            <option>Open this select menu</option>
            {users.map(user => <option value={user.id}>{user.name}</option>)}
        </Form.Select>
        <Form.Select className='my-3' aria-label="Default select example" onChange={handleChangePost}>
            <option>Open this select menu</option>
            {posts.map(post => <option value={post.id}>{post.title}</option>)}
        </Form.Select>
        <ListGroup className='my-3'>
            {comments.map(comment => <ListGroup.Item>{comment.name} - {comment.email}</ListGroup.Item>)}
        </ListGroup>
    </Container>
  )
}

