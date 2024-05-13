import React, { useContext, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';

export default function FormComponent({addUser, theme}) {
    
    const [user, setUser] = useState({});
    let [themeCtx] = useContext(ThemeContext);

    const handleChange = (e) => {
        setUser({
                ...user, 
                [e.target.name]: e.target.value
            })
    }

    const handleClick = (e) => {
        console.log(addUser(user))
    }

  return (
    <Container className="my-3">
    {/* {theme}  */}
        <Form>
            <Row>
                <Col>
                    <Form.Control name="name" placeholder="First name" onChange={handleChange} />
                </Col>
                <Col>
                    <Form.Control name="lastName" placeholder="Last name" onChange={handleChange} />
                </Col>
                <Col> 
                    <Form.Control name="phone" placeholder="Phone" onChange={handleChange} />
                </Col>
                <Col>
                    <Form.Control name="email" placeholder="Email" onChange={handleChange} />
                </Col>
                <Col>
                    <Button variant="dark" className="w-100" onClick={handleClick}>Add User</Button>
                </Col>
            </Row>
        </Form>
        {/* <Alert variant={themeCtx}>
          This is a alert—check it out!
      </Alert> */}
    </Container>
  )
}
