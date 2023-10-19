import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Functional(props) {


    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [Contact,setContact] =useState('')
    const [Gen,setGen] =useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const student = {
            name,
            email,
            Contact,
            Gen,
        }

        props.newStudent(student);
        

        
    }
    
    return <div>
        <Form onSubmit={handleSubmit}> 

        <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => {setName(e.target.value)}} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value);
    }} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Contact</Form.Label>
      <Form.Control type="tell" placeholder="Enter active number" value={Contact} onChange={(e) => {setContact(e.target.value)}} />
    </Form.Group>


    <Form.Group className="mb-3" >
      <Form.Label>Gen</Form.Label>
      <Form.Control type="Number" placeholder="Gen" value={Gen} onChange={(e) => {setGen(e.target.value)}} />
    </Form.Group>

    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
}

export default Functional;