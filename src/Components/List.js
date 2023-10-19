import React from "react";
import Student_card from "./Student_card";
import { Row,Col } from "react-bootstrap";

function List({students}) {
    
    return <div>
       <Row>
        {students.map((student,index)=>{
            return (<Col key={index}>
                <Student_card student={ student}/>
                </Col>)
        })}</Row>
    </div>
}

export default List;