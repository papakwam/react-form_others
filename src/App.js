import logo from './logo.svg';
import './App.css'
import  Container  from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Functional from './Components/Functional';
import { Component } from 'react';
import List from './Components/List';

class App extends Component {

  constructor(props) {
    super (props)

    this.state = {
      students:[]
    }
  }

  createStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };

  render() {
    console.log(this.state.students)
  return (
  <Container fluid>
    <Row>
    <Col xs={12} md={6} lg={6}><Functional newStudent={this.createStudent} /></Col>
    <Col xs={12} md={6} lg={6}><List students={this.state.students}/></Col>
    </Row>

    
  </Container>
  );
  }
}

export default App;
