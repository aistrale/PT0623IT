import React, { Component } from 'react'

export default class UserListClass extends Component {
  
    constructor(props) {
        super(props);
        console.log('Sono una classe!')
    }

    // Metodo invocato dopo il montaggio del componente
    componentDidMount() {
        console.log('Sono il metodo componentDidMount')
    }

    // Metodo invocato ad ogni modifica dello stato del componente
    componentDidUpdate() {
        console.log('Sono il metodo componentDidUpdate')
    }

    // Metodo invocato poco prima dello smontaggio del componente
    componentWillUnmount() {
        console.log('Sono il metodo componentWillUnmount')
    }
  
    render() {
        console.log('Sono il metodo Render')
    return (
      <div>UserListClass</div>
    )
  }
}
