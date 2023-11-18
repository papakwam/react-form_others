import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Functional from './Components/Functional';
import List from './Components/List';
import Student_card from './Components/Student_card';

function App() {
  const [students, setStudents] = useState([]);

  const createStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleDelete = (studentId) => {
    const updatedStudents = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
  };

  const handleUpdate = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Functional newStudent={createStudent} />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <List students={students} onDelete={handleDelete} onUpdate={handleUpdate} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
