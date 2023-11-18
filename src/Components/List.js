import React from "react";
import Student_card from "./Student_card";
import { Row, Col } from "react-bootstrap";

function List({ students, onDelete }) {
  return (
    <div>
      <Row>
        {students.map((student) => (
          <Col key={student.id}>
            <Student_card student={student} onDelete={onDelete} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default List;
