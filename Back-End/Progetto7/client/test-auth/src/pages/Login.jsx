import React from 'react'
import { Container } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <Container className='my-5 w-50'>
        <h1 className='text-center'>Login Page</h1>
        <LoginForm />
    </Container>
  )
}
