// purpose: to display  search results
import React, { useContext, useEffect, useState } from "react";
import { DocumentContext } from "../documents/DocumentProvider";
import { DocumentCard } from "../documents/DocumentCard";
import "../documents/Document.css";
import { Button, Table, Modal, ModalFooter, Row, Col, Card, CardGroup } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./modal.css" 
//to do - edit line 
export const DocumentSearchList = () => {
    const { documents, getDocuments, searchTerms } = useContext(DocumentContext)

    const [ filteredDocuments, setFiltered ] = useState([])

    //this is for thank you
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      // Empty dependency array - useEffect only runs after first render
    useEffect (() => {
        // console.log("DocumentList: useEffect - getDocuments")
        getDocuments()
    }, [])


 // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "" && searchTerms !== "NewForce"){
      // If the search field is not blank, display matching animals
      const subset = documents.filter(document => 
        document.name.toLowerCase().includes(searchTerms.toLowerCase()) || 
        document.access.toLowerCase().includes(searchTerms.toLowerCase()) ||
        document.note.toLowerCase().includes(searchTerms.toLowerCase()) ||
        document.imageURL.toLowerCase().includes(searchTerms.toLowerCase())
        )
      setFiltered(subset)
    } else if (searchTerms === "NewForce") {
      handleShow()
    } else {
            // If the search field is blank, display all animals
            setFiltered(undefined)
            
    }
  }, [searchTerms, documents])
  console.log("this is filteredDocuments", filteredDocuments)
return (
  <>
    <div className="documents">

   {filteredDocuments === undefined ? <></> : filteredDocuments.map(document => {
        return <DocumentCard key={document.id} document={document} />
      })
    }
  </div> 
      <Modal show={show} onHide={handleClose} portalClassName="modal" className="modal__style" size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
        <Modal.Body closeButton className="modal__style__body">
          <h2 className="names">Sarah, Jordan, Heaven, Steven, Andy, Cameron, Tommy and everyone</h2>
          
          <h2 className="message">Thank you!!!!! ありがとう!!!!! for all your help! </h2> 
          <Button className="btn-secondary" onClick={handleClose}centered >Close</Button>
              
        </Modal.Body>
      
      </Modal>
  </>
)

}



// explanation of the return:This is related to the tab function in the home.js.  In the home.js there are 4 tab plans - one with no id, one with id of 1, to last nab tab with id of 3.When the list function is called at each nab tab, if props.id is undefined, then all docts will display at the first nav tab on the left.  If the props.id is 1, the all document with situationID =1 i.e. short term care will display.  //
