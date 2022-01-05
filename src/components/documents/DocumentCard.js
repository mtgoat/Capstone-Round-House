//purpose: A) to print an indidicual card template for each object at documents array in API B) to delete and to edit indiviual document info
import React, {useContext} from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Document.css';
import { DocumentContext } from "./DocumentProvider";

export const DocumentCard = ({document}) => {
    const navigate = useNavigate()
    const { getDocumentById, releaseDocument } = useContext(DocumentContext)

    const handleRelease = () => {
        releaseDocument(document.id)
          .then(() => {
            navigate("/")
          })
      }
    return (
    <section className="document">
        <h3 className="document__name">Name: {document.name}</h3>
        {document.isPaper? <div className="document__paper">Format: paper copy</div>: <div className="document__digital">Format: digital copy</div>}
        <div className="document__access">Storage Location: {document.access}</div>
        <div className="document__note">Note: {document.note}</div>
        {document.situationId === "" ? <div className="document__situation">Situation: no siguation assigned</div>: <div className="document__situation">Situation: {document.situation.name}</div>}
        {document.categoryId === "" ? <div className="document__category">Category: no category assigned</div>: <div className="document__category">category: {document.category.name}</div>}
        <Button id="edit-button" className=" btn-primary" onClick={()=> {navigate(`/documents/edit/${document.id}`)}}>Edit</Button>{' '}
        <Button id="detele-button" className=" btn-secondary" onClick={handleRelease}>Release</Button>
    </section>
    )
}

export const DocumentCard2 = ({document}) => {
  const navigate = useNavigate()
  const { getDocumentById, releaseDocument } = useContext(DocumentContext)

  const handleRelease = () => {
      releaseDocument(document.id)
        .then(() => {
          navigate("/")
        })
    }
  return (
  <section className="document">
    <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Document name</th>
          <th>Storage location</th>
          <th>Note</th>
          <th>Situation</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
         <tr>
           <tb></tb>
         <tb className="document__name">Name: {document.name}</tb>
      {document.isPaper? <tb className="document__paper">Format: paper copy</tb>: <tb className="document__digital">Format: digital copy</tb>}
      <tb className="document__access">Storage Location: {document.access}</tb>
      <tb className="document__note">Note: {document.note}</tb>
      {document.situationId === "" ? <tb className="document__situation">Situation: no siguation assigned</tb>: <tb className="document__situation">Situation: {document.situation.name}</tb>}
      {document.categoryId === "" ? <tb className="document__category">Category: no category assigned</tb>: <tb className="document__category">category: {document.category.name}</tb>}
      <Button id="edit-button" className=" btn-primary" onClick={()=> {navigate(`/documents/edit/${document.id}`)}}>Edit</Button>{' '}
      <Button id="detele-button" className=" btn-secondary" onClick={handleRelease}>Release</Button>
          </tr>
        </tbody>
      </Table>
  </section>
  )
}