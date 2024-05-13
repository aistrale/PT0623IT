import React from 'react'
import Form from 'react-bootstrap/Form';

export default function SearchComponent({filteredUsers}) {
  return (
    <Form.Control
        type="search"
        placeholder='Search User'
        className='my-3'
        onChange={(e) => filteredUsers(e.target.value)}
    />
  )
}
