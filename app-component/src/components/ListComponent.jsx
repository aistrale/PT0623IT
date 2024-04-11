import React from 'react'

import { Container, ListGroup } from 'react-bootstrap'

export default function ListComponent(props) {
    //console.log(props)
  return (
    <Container className="my-3">
    <h1>{props.title} Tot. {props.utenti.length}</h1>
      <ListGroup>
        {props.utenti.map((u,i) => <ListGroup.Item key={i}>{u.name} {u.lastName}</ListGroup.Item>)}
        
      </ListGroup>
    </Container>
  )
}
