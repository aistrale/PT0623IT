import React, { useContext } from 'react'

import { Button, Container, ListGroup } from 'react-bootstrap'
import { ThemeContext } from '../App';


export default function ListComponent({userlist, removeUser, theme }) {
  let themeCtx = useContext(ThemeContext);
  console.log(themeCtx)
  return (
    <Container className="my-3">
      {theme} 
      <ListGroup>
        {userlist.map(user =>  <ListGroup.Item>
                                  {user.name} {user.lastName} 
                                  <Button 
                                      variant="danger" className='float-end'
                                      onClick={() => removeUser(user)}>x</Button>
                                </ListGroup.Item>
                      )}
      </ListGroup>
    </Container>
  )
}
