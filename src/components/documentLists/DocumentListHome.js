import React from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { DocumentListList, DocumentListList2 } from './DocumentListList';

export const DocumentListHome = () => {

    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <AccordionItem eventKey="0">
                <AccordionHeader>Suggested documents for all the situations</AccordionHeader>
                <AccordionBody>
                    <DocumentListList2 />
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="1">
                <AccordionHeader>Short-Term Medical Care Situation</AccordionHeader>
                <AccordionBody>
                    <DocumentListList2 id={1}/>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="2">
                <AccordionHeader>Long-Term Medical Care Situation</AccordionHeader>
                <AccordionBody>
                    <DocumentListList2 id={2}/>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="3">
                <AccordionHeader>Assisted Living</AccordionHeader>
                <AccordionBody>
                    <DocumentListList2 id={3}/>
                </AccordionBody>
            </AccordionItem>

            
            <AccordionItem eventKey="4">
                <AccordionHeader>Other Situations(i.e. traveling etc.)</AccordionHeader>
                <AccordionBody>
                    <DocumentListList2 id={4}/>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}