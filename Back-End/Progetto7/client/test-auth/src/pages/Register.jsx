import React from 'react'
import { Container } from 'react-bootstrap'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
  return (
    <Container className='my-5 w-50'>
        <h1 className='text-center'>Register Page</h1>
        <RegisterForm />
    </Container>
  )
}
