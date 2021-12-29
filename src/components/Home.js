import React, { useContext,useEffect } from "react";
import { CustomerContext } from "./customers/CustomerProvider";
import "./Home.css";
import { Accordion, Container, Row, Col } from "react-bootstrap";

function Welcome (props) {
    return <p> Welcome, {props.firstName}</p>
}

export const Home = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    useEffect(() => {
        console.log("users", customers)
        getCustomers()
    
      }, [])
   return ( 
     <Container>
     <Row>
        <Col className="aside-left" sm={4}>
            <Welcome  name={customers.find(user => user.id === +localStorage.activeUser)}/>
        </Col>



     <Accordion as={Col} sm={8} defaultActiveKey="0" flush column>

        <Accordion.Item eventKey="0">
            <Accordion.Header>#1 Short-Term Medical Situation</Accordion.Header>
                <Accordion.Body>
                  List from document API 
                </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
            <Accordion.Header>#2 Long-Term Medical Situation</Accordion.Header>
                <Accordion.Body>
                List from document API 
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>#3 Incapaciated Medical Situation</Accordion.Header>
                <Accordion.Body>
                List from document API 
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
            <Accordion.Header>#4 Other Situation</Accordion.Header>
                <Accordion.Body>
                List from document API 
                </Accordion.Body>
            </Accordion.Item>
    </Accordion> 
    </Row>

    </Container>
   )
}

//above is the same as export const Home = () => (<Welcome name="customer"/>)