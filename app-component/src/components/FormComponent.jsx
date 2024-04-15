import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default function FormComponent(props) {

    const [user, setUser] = useState({});
    //const [click, setClick] = useState(0);
    /* const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState(''); */

    const handleClick = (e) => {
        //console.log(user)
        //setClick(click + 1);
        //console.log(name, lastname, email)
        console.log(props.insertuser(user))
    }

    const handleChange = (e) => {
        //console.log(e.target.name, e.target.value)
        setUser({
                ...user, 
                [e.target.name]: e.target.value
            })
    }

    const handleNameChange = (e) => {
        //console.dir(e.target.value)
        //setName(e.target.value)
    }

    const handleLastnameChange = (e) => {
        //console.dir(e.target.value)
        //setLastname(e.target.value)
    }

    const handleEmailChange = (e) => {
        //console.dir(e.target.value)
        //setEmail(e.target.value)
    }

  return (
    <Container className="my-3">
  
        <Form>
            <Row>
                <Col>
                    <Form.Control name="name" placeholder="First name" onChange={handleChange} />
                </Col>
                <Col>
                    <Form.Control name="lastName" placeholder="Last name" onChange={handleChange}  />
                </Col>
                <Col>
                    <Form.Control name="phone" placeholder="Phone" onChange={handleChange}  />
                </Col>
                <Col>
                    <Form.Control name="email" placeholder="Email" onChange={handleChange}  />
                </Col>
                <Col>
                    <Button variant="dark" className="w-100" onClick={handleClick}>Add User</Button>
                </Col>
            </Row>
        </Form>
    </Container>
  )
}

