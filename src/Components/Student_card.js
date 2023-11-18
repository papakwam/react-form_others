import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Student_card({ student, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(student.name);
  const [updatedEmail, setUpdatedEmail] = useState(student.email);
  const [updatedContact, setUpdatedContact] = useState(student.Contact);
  const [updatedGen, setUpdatedGen] = useState(student.Gen);

  const handleUpdate = () => {
    // Implement your update logic here
    const updatedStudent = {
      ...student,
      name: updatedName,
      email: updatedEmail,
      Contact: updatedContact,
      Gen: updatedGen,
    };

    // Call the onUpdate function with the updated student
    onUpdate(updatedStudent);

    // After handling the update, you can exit the edit mode
    setIsEditing(false);
  };

  const handleCancelUpdate = () => {
    // If the user cancels the update, reset the form fields and exit edit mode
    setUpdatedName(student.name);
    setUpdatedEmail(student.email);
    setUpdatedContact(student.Contact);
    setUpdatedGen(student.Gen);
    setIsEditing(false);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          {isEditing ? (
            // Render the form fields in edit mode
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="tel"
                  value={updatedContact}
                  onChange={(e) => setUpdatedContact(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicGen">
                <Form.Label>Gen</Form.Label>
                <Form.Control
                  type="Number"
                  value={updatedGen}
                  onChange={(e) => setUpdatedGen(e.target.value)}
                />
              </Form.Group>

              <Button variant="success" onClick={handleUpdate}>
                Save
              </Button>{" "}
              <Button variant="secondary" onClick={handleCancelUpdate}>
                Cancel
              </Button>
            </Form>
          ) : (
            // Render the card details in non-edit mode
            <>
              <Card.Title>{student.name}</Card.Title>
              <Card.Text>Email: {student.email}</Card.Text>
              <Card.Text>Contact: {student.Contact}</Card.Text>
              <Card.Text>Gen: {student.Gen}</Card.Text>
              
              <Button variant="primary" onClick={() => setIsEditing(true)}>
                Update
              </Button>
              <Button variant="danger" onClick={() => onDelete(student.id)}>
                Delete
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Student_card;

