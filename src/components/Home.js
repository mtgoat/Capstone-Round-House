import React from "react";
import "./Home.css";
import { Row, Col, Nav, Tab, Container } from "react-bootstrap";

import { DocumentList } from "./documents/DocumentList";


export const Home = () => {

   return ( 
    <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="all">All Added Documents</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link eventKey="short">Short-Term Medical Care Situation</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link eventKey="long">Long-Term Medical Care Situation</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link eventKey="incapacited">Assisted Living Situation</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                    <Nav.Link eventKey="other">Other Situation</Nav.Link>
                    </Nav.Item>

                </Nav>
                </Col>

                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="all">
                    <DocumentList />
                    </Tab.Pane>

                    <Tab.Pane eventKey="short">
                    <DocumentList id={1}/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="long">
                    <DocumentList id={2}/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="incapacited">
                    <DocumentList id={3}/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="other">
                    <DocumentList id={4}/>
                    </Tab.Pane>

                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>

    </Container>
   )
}

//above is the same as export const Home = () => (<Welcome name="customer"/>)