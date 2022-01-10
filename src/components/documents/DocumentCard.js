//purpose: A) to print an indidicual card template for each object at documents array in API B) to delete and to edit indiviual document info
import { Rating } from "@mui/material";
import React, {useContext, useState} from "react";
import { Button, Table, Modal, ModalFooter, Row, Col, Card, CardGroup } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useNavigate } from "react-router-dom";
import './Document.css';
import { DocumentContext } from "./DocumentProvider";

export const DocumentCard = ({document}) => {
    const navigate = useNavigate()
    const { getDocumentById, releaseDocument } = useContext(DocumentContext)

    //this is for rating
  const [ratingS, setRatingS] = React.useState(document.rating)

    //this is for the modal to see the image
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  //this is to dete the doc
    const handleRelease = () => {
        releaseDocument(document.id)
          .then(() => {
            navigate("/")
          })
      }
    return (
    <section className="document">
        <h3 className="document__name">Name: <b>{document.name}</b></h3>

        {document.isPaper? <div className="document__paper">Format: <b>paper copy</b></div>: <div className="document__digital">Format: <b>digital copy</b></div>}

        <div className="document__access">Storage Location: <b>{document.access}</b></div>
        <div className="document__note">Note: <b>{document.note}</b></div>

        {document.situationId === "" ? <div className="document__situation">Situation: no siguation assigned</div>: <div className="document__situation">Situation: <b>{document.situation.name}</b></div>}

        {document.categoryId === "" ? <div className="document__category">Category: no category assigned</div>: <div className="document__category">Category: <b>{document.category.name}</b></div>}
        
        <div>Uploaded image: </div>
        <Button id="image-button" className="btn-warning" onClick={handleShow}> See the image</Button>

        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton>
              The uploaded image: {document.name}
          </ModalHeader>
          <Modal.Body>
          {document.imageURL=== ""? <p>No image</p>:<img src={document.imageURL} alt="uploaded" width="400px"/>}
          {document.imageURL=== ""? <></>:<a href={document.imageURL} download target="_blank" rel="noopener noreferrer">Downloand</a>}
          </Modal.Body>
          <ModalFooter>
            <Button className="btn-secondary" onClick={handleClose}>Close</Button>
          </ModalFooter>
        </Modal>

        <div>Rating: <Rating value={ratingS} name="read-only" readOnly></Rating></div>
        
        <Button id="edit-button" className=" btn-primary" onClick={()=> {navigate(`/documents/edit/${document.id}`)}}>Edit</Button>{' '}

        <Button id="detele-button" className=" btn-secondary" onClick={handleRelease}>Release</Button>
    </section>
    )
}

export const DocumentCard2 = ({document}) => {
  const navigate = useNavigate()
  const { getDocumentById, releaseDocument } = useContext(DocumentContext)

  //this is for rating
  const [ratingS, setRatingS] = React.useState(document.rating)

  const handleRelease = () => {
      releaseDocument(document.id)
        .then(() => {
          navigate("/")
        })
    }
  return (
    <tr key={document.id}>

      <td> {document.name}</td>

      <td className="document__format">
      {document.isPaper? <p className="document__format__paper">Paper Copy</p>: <></>}
      {document.isDigital? <p className="document__format__digital">Digital Copy</p>: <></>}
      </td>

      <td> {document.access}</td>

      <td>{document.note}</td>

      {document.situationId === "" ? <td className="document__situation">no siguation assigned</td>: <td className="document__situation">{document.situation.name}</td>}

      {document.categoryId === "" ? <td className="document__category">no category assigned</td>: <td className="document__category">{document.category.name}</td>}

      <td><Rating value={ratingS} name="read-only" readOnly></Rating></td>

      <td><Button id="edit-button" className=" btn-primary" onClick={()=> {navigate(`/documents/edit/${document.id}`)}}>Edit</Button>{' '}
      <Button id="detele-button" className=" btn-secondary" onClick={handleRelease}>Release</Button></td>

    </tr>
  
  )
}

export const DocumentCard3 = ({document}) => {
  const navigate = useNavigate()
  const { getDocumentById, releaseDocument } = useContext(DocumentContext)

  //this is for rating
  const [ratingS, setRatingS] = React.useState(document.rating)

  const handleRelease = () => {
      releaseDocument(document.id)
        .then(() => {
          navigate("/")
        })
    }

    return (
      <CardGroup>
        <Card>
           {document.imageURL === ""? <></>:<Card> <Card.Title>{document.name}</Card.Title>
              <Card.Img variant="top" src={document.imageURL} className="card__images" /></Card> }
        </Card>
      </CardGroup>
    )
}

// version 2 in the return       
//<Row xs={1} md={2} className="g-4">
// <Col>
//    {document.imageURL === ""? <></>:<Card> <Card.Title>{document.name}</Card.Title>
//       <Card.Img variant="top" src={document.imageURL} /></Card> }
// </Col>
// </Row>