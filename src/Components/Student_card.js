import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Student_card({ student, onDelete }) {
    const handleDelete = () => {
      // Call the onDelete function with the student's ID
      onDelete(student.id);
    };
  

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Text>Email: {student.email}</Card.Text>
          <Card.Text>Contact: {student.Contact}</Card.Text>
          <Card.Text>Gen: {student.Gen}</Card.Text>

          {/* Update Button (you can add functionality later) */}
          <Button variant="primary">Update</Button>

          {/* Delete Button with onClick handler */}
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Student_card;
