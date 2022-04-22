// Purpose: to add a new document onject at the documents array at API 
import React, { useContext, useEffect, useState } from "react";
import { DocumentContext } from "./DocumentProvider";
import { SituationContext } from "../situations/SituationProvider";
import { CategoryContext } from "../categories/CategoryProvider";
import "./Document.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const DocumentForm = () => {
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    //this is for rating
    const [ratingS, setRatingS] = React.useState(2)

    // this is for uploading image
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const data = new FormData ()
    data.append("file", image)
    data.append("upload_preset", "Roundhouse")
    data.append("cloud_name", "newforce-cohort5")

    //this is for the add document//
    const { addDocument, getDocumentById, updateDocument } = useContext(DocumentContext)
    const { categories, getCategories } = useContext(CategoryContext)
    const { situations, getSituations } = useContext(SituationContext)

    const [document, setDocument] = useState({
        isPaper: false,
        isDigital:false
    })
    const { documentId } = useParams();

    console.log(documentId)
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem('react_Roundhouse_user')).id

    //This is for the scoring
    const handleControlledScoreInputChange = (event) => {
        let copyOfdocument = { ...document }
        setRatingS(event.target.value)
        copyOfdocument.rating = ratingS
        setDocument(copyOfdocument)
    }

    //this is for the loading image 
    
        const uploadImage = () => {
   
            fetch("https://api.cloudinary.com/v1_1/newforce-cohort5/image/upload",
            {
              method:"post",
              body: data
            })
            .then(resp => resp.json())
            .then(data => {
              setUrl(data.url)
              let copyOfdocument = { ...document }
            copyOfdocument.imageURL = data.url
            setDocument(copyOfdocument)
            
            })
            .catch(err => console.log ("this is the error message", err))
            console.log("this is data", data)           
          }

    const handleControlledInputChange = (event) => {

        let newDocument = { ...document }

        newDocument[event.target.id] = event.target.value

        setDocument(newDocument)
    }

    const handleCheckBoxControlledInputChange = (event) => {

        let newDocument = { ...document }

        newDocument[event.target.id] = event.target.checked

        setDocument(newDocument)
    }

    const handeClickNewDocument = () => {

        if (document.name === "" || document.access === "" ) {
            window.alert("Please full out name, access, or/and note section(s) in the form")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);

  
            const situationId = parseInt(document.situationId)
            const categoryId = parseInt(document.categoryId)
            const isPaper = JSON.parse(document.isPaper)
            const isDigital = JSON.parse(document.isDigital)

            console.log(document.isPaper, "document.isPaper")
            document.situationId = situationId
            document.categoryId = categoryId
            document.isPaper = isPaper
            document.isDigital = isDigital

            if (documentId) {
                //PUT - update
                updateDocument({
                    id: document.id,
                    name: document.name,
                    isPaper: document.isPaper,
                    isDigital:document.isDigital,
                    access: document.access,
                    note: document.note,
                    customerId: currentUser,
                    situationId: document.situationId,
                    categoryId: document.categoryId,
                    rating: +ratingS,
                    imageURL:url

                })
                    .then(() => navigate("/"))
            } else {
                 //POST - add 
                 
                addDocument({
                    name: document.name,
                    isPaper: document.isPaper,
                    isDigital:document.isDigital,
                    access: document.access,
                    note: document.note,
                    customerId: currentUser,
                    situationId: document.situationId,
                    categoryId: document.categoryId,
                    rating: +ratingS,
                    imageURL:url
                })
                .then(() => navigate("/"))

            }
        }
    }
    // Get situations and categories. If documentId is in the URL, getDocumentById
    useEffect(() => {
        getSituations()
            .then(getCategories)
            .then(() => {
                if (documentId) {
                    getDocumentById(documentId)
                        .then(document => {
                            setDocument(document)
                            setIsLoading(false)
                        })
                } else {
                    setIsLoading(false)
                }
            })
    }, [])
console.log("document.categoryId",document.categoryId)
    return (
        <>    
       
        <div id="bgGrad">
        <Form className="documentForm" >
        
 {documentId ? <Form.Label><h2 className="documentForm__title">Edit document information</h2></Form.Label> :<Form.Label> <h2 className="documentForm__title">New Document Register</h2></Form.Label>}

            <Form.Group className="mb-3 form-group" controlId="name">

                <Row>
                    <Col xs={3}>
                    <Form.Label htmlFor="Name"><h6>Document Name:</h6></Form.Label>
                    </Col >
                    
                    <Col xs={9}>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document Name" value={document.name} />
                    </Col>
                </Row>
            </Form.Group>           
            
            {/* this is for Ispaper*/}
            <Form.Group className="form-group">
                <Row>
                    <Col xs={4}>
                        <Form.Label htmlFor="isPaper"> <h6>Do you have a paper copy?</h6> </Form.Label>
                    </Col>
                    <Col xs={8} id="inline"> 
                    <h6 > If yes, check this box
                    <input onChange={handleCheckBoxControlledInputChange} type="checkbox" id="isPaper" name="isPaper" value={document.isPaper}></input>   </h6>
                    </Col>

                </Row>
            </Form.Group>

            <Form.Group className="form-group">
                <Row>
                    <Col xs={4}> 
                    <Form.Label htmlFor="isDigital"> <h6>Do you have a digital copy? </h6></Form.Label>
                    </Col>
                    <Col xs={8}>
                    <h6 > If yes, check this box  
                         <input onChange={handleCheckBoxControlledInputChange} type="checkbox" id="isDigital" name="isDigital" value={document.isDigital}></input>  </h6>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="form-group">
                <Row>
                <Col xs={3}><Form.Label htmlFor="access"><h6> Document access:</h6></Form.Label>
                </Col>
                <Col xs={9}>
                <input type="text" id="access" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document access" value={document.access} />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="form-group">
                <Row>
                <Col xs={3}><Form.Label htmlFor="note"><h6> Document note:</h6></Form.Label>
                </Col>
                <Col xs={9}>
                <input type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document note" value={document.note} />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="form-group">
                <Row>
                <Col xs={3}><Form.Label htmlFor="situation"><h6> Choose a situation:</h6></Form.Label>
                </Col>
                <Col xs={9}>
                     <Form.Select onChange={handleControlledInputChange} value={document.situationId} name="situationId" id="situationId" className="form-control">
                        <option value="0">Select a situation by clicking here</option>
                        {situations.map(l => (
                            <option key={l.id} value={l.id} >
                                {l.name}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                </Row>    
            </Form.Group>

            <Form.Group className="form-group">
                <Row>
                <Col xs={3}><Form.Label htmlFor="category"><h6> Choose a category:</h6></Form.Label>
                </Col>
                <Col xs={9}>
                     <Form.Select  onChange={handleControlledInputChange} value={document.categoryId} name="categoryId" id="categoryId" className="form-control">
                     <option value="0">Select a category by clicking here</option>
                        {categories.map(l => (
                            <option key={l.id} value={l.id} >
                                {l.name}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                </Row>    
            </Form.Group>
   
                
            <Form.Group  className="form-group">
                <Row>
                    <Col xs={3}>
                        <Form.Label><h6>Upload an image file</h6></Form.Label>
                    </Col>
                    <Col xs={9}>  <input type="file" id="imageURL"  onChange ={(e)=> setImage(e.target.files[0])}></input>
                    <Button id="upload-button" className="btn-success" onClick={uploadImage} > <h6>Upload an image</h6> </Button>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group  className="form-group2">
                <Row>
                     
                    <Typography component="legend"><h6> Importance Rating</h6></Typography>
                    <Rating
                        name="Importance Rating"
                        value={ratingS}
                        onChange={handleControlledScoreInputChange}
                    />
             
                </Row>
               
            </Form.Group>


            <Button className="btn btn-primary form-group"
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handeClickNewDocument()
                }}>
                {documentId ? <> Update information</> : <>Save New Document Information</>}
            </Button>
        </Form>
        </div> </>
    )
}


//disabled={isLoading}