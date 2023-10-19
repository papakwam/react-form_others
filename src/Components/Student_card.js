import React  from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Student_card({student}) {
    return(
        <div> 
            <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Text>Email:{student.email}</Card.Text>
          <Card.Text>Contact:{student.Contact}</Card.Text>
          <Card.Text>Gen:{student.Gen}</Card.Text>

          <Button variant="primary">Update</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
            </Card>
        </div>
    )
}

export default Student_card