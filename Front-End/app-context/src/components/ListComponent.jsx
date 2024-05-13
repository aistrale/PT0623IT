import React, { useContext } from 'react'

import { Alert, Button, Container, ListGroup } from 'react-bootstrap'
import { ThemeContext } from '../modules/Contexts';


export default function ListComponent({userlist, removeUser, theme }) {
  let [themeCtx, setThemeCtx] = useContext(ThemeContext);
  console.log(themeCtx)
  return (
    <Container className="my-3">
      {/* {theme}  */}
      <ListGroup>
        {userlist.map(user =>  <ListGroup.Item key={user.id}>
                                  {user.name}
                                  <Button 
                                      variant="danger" className='float-end'
                                      onClick={() => removeUser(user)}>x</Button>
                                </ListGroup.Item>
                      )}
      </ListGroup>
      {/* <Alert variant={themeCtx}>
          This is a alert—check it out!
      </Alert> */}
    </Container>
  )
}
