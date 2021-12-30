//purpose: to print an indidicual card template for each object at documents array in API
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Document.css';

export const DocumentCard = ({document}) => {
    const navigate = useNavigate()

    return (
    <section className="document">
        <h3 className="document__name">Name: {document.name}</h3>
        {document.isPaper? <div className="document__paper">Format: paper copy</div>: <div className="document__digital">Format: digital copy</div>}
        <div className="document__access">Storage Location: {document.access}</div>
        <div className="document__note">Note: {document.note}</div>
        {document.situationId === "" ? <div className="document__situation">Situation: no siguation assigned</div>: <div className="document__situation">Situation: {document.situation.name}</div>}
        {document.categoryId === "" ? <div className="document__category">Category: no category assigned</div>: <div className="document__category">category: {document.category.name}</div>}
        <Button id="logout-button" className=" btn-secondary" onClick={()=> {navigate(`/events/edit/${document.id}`)}}>Edit</Button>
    </section>
    )
}