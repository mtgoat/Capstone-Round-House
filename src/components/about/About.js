import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./About.css";

export const About = () => {
    return (
        <>
        <div class="container container--sm" id="bgGrad__about">
            <div class="about-blocks__text">
        <h5>About page</h5>
        
        <h2 class="about-blocks__title">RoundHouse App, digital document file for loved ones</h2>
        <Row>
        <Col><p id="about-blocks__content">This app is to make it easier to assume responsibility for paying bills and managing the household when the primary bill payer is unavailable for the task.</p>
        </Col>
       
        <Col> <img></img>
        </Col>
        </Row>
        
        
        </div>
        </div>
        <div class="about-blocks__container container container--lg">

        </div>
        </>
    )
}