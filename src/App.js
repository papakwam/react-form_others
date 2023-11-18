import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Functional from './Components/Functional';
import List from './Components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  createStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };

  handleDelete = (studentId) => {
    // Filter out the student with the specified ID
    const updatedStudents = this.state.students.filter((student) => student.id !== studentId);

    // Update the state with the new student array
    this.setState({
      students: updatedStudents,
    });
  };

  render() {
    console.log(this.state.students);
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Functional newStudent={this.createStudent} />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <List students={this.state.students} onDelete={this.handleDelete} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
