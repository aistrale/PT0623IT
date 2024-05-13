import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {

    const navigate = useNavigate();

    const back = () => {
        navigate('/');
    }

  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Error Page</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button onClick={back} variant="primary">Back Home</Button>
      </Card.Body>
    </Card>
  )
}
