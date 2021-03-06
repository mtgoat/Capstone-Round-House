// Purpose: to add a new document onject at the documents array at API 
import React, { useContext, useEffect, useState } from "react";
import { DocumentContext } from "./DocumentProvider";
import { SituationContext } from "../situations/SituationProvider";
import { CategoryContext } from "../categories/CategoryProvider";
import "./Document.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Table } from "react-bootstrap";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

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

        <form className="documentForm">
            {documentId ? <h2 className="documentForm__title">Edit document information</h2> : <h2 className="documentForm__title">New Document Register</h2>}

            <fieldset>
                <div className="form-group">
                    <label htmlFor="Name">Document Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document Name" value={document.name} />
                </div>
            </fieldset>

            {/* this is for Ispaper*/}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="isPaper">Do you have a paper copy? If yes, check this box </label>
                    <input onChange={handleCheckBoxControlledInputChange} type="checkbox" id="isPaper" name="isPaper" value={document.isPaper}></input>
                    </div>
            </fieldset>  

            <fieldset>
                <div className="form-group">
                    <label htmlFor="isPaper">Do you have a digital copy? If yes, check this box </label>
                    <input onChange={handleCheckBoxControlledInputChange} type="checkbox" id="isDigital" name="isDigital" value={document.isDigital}></input>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="Name">Document access:</label>
                    <input type="text" id="access" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document access" value={document.access} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="Name">Document note:</label>
                    <input type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document note" value={document.note} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="situation">Choose a situation: </label>
                    <select onChange={handleControlledInputChange} value={document.situationId} name="situationId" id="situationId" className="form-control">
                        <option value="0">Select a situation</option>
                        {situations.map(l => (
                            <option key={l.id} value={l.id} >
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
   
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Choose a category: </label>
                    <select onChange={handleControlledInputChange} value={document.categoryId} name="categoryId" id="categoryId" className="form-control">
                        <option value="0">Select a category</option>
                        {categories.map(l => (
                            <option key={l.id} value={l.id} >
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div>

                    <input type="file" id="imageURL"  onChange ={(e)=> setImage(e.target.files[0])}></input>
                    <Button id="upload-button" className="btn-success" onClick={uploadImage} >Upload an image</Button>
                    
                </div>
            </fieldset>

            <fieldset>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Importace Rating</Typography>
                    <Rating
                        name="Importace Rating"
                        value={ratingS}
                        onChange={handleControlledScoreInputChange}
                    />
                </Box>
            </fieldset>


            <Button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handeClickNewDocument()
                }}>
                {documentId ? <> Update information</> : <>Save New Document Information</>}
            </Button>
        </form>
    )
}


//disabled={isLoading}