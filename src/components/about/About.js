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
        <Col><p class="about-blocks__content">This app is to make it easier to assume responsibility for paying bills and managing the household when the primary bill payer is unavailable for the task.</p>
        </Col>
       
        <Col> <img class="img-responsive lazyload" itemprop="image" data-image="" role="img" aria-label="" data-original-src="https://cdn.aarp.net/content/dam/aarp/health/caregiving/2018/05/1140-financial-records-mother-daughter.jpg" data-original-ratio=".5746" alt="A daughter helping her elderly mother organize her financial records and legal documents" title="A daughter helping her elderly mother organize her financial records and legal documents" data-width="900" data-src="https://cdn.aarp.net/content/dam/aarp/health/caregiving/2018/05/1140-financial-records-mother-daughter.imgcache.rev.web.900.517.jpg" src="https://cdn.aarp.net/content/dam/aarp/health/caregiving/2018/05/1140-financial-records-mother-daughter.imgcache.rev.web.900.517.jpg" width="400" height="200"></img><caption>Getty Images</caption>
        </Col>
        </Row>
        
        
        </div>
        </div>
        <div class="about-blocks__container container container--lg">

        </div>
        </>
    )
}