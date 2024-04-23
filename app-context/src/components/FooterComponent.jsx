import React from 'react'
import { Card } from 'react-bootstrap';

export default function FooterComponent({theme}) {
  return (
    <Card body className="text-center">Copyright &copy;2024 {theme}</Card>
  )
}
