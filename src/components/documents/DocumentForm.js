// Purpose: to add a new document onject at the documents array at API 
import React, {useContext, useEffect, useState} from "react";
import { DocumentContext } from "./DocumentProvider";
import { SituationContext } from "../situations/SituationProvider";
import { CategoryContext } from "../categories/CategoryProvider";
import "./Document.css";
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

 export const DocumentForm = () => {
   //wait for data before button is active
   const [isLoading, setIsLoading] = useState(true);

   //this is for rating
   const [ratingS, setRatingS] = React.useState(2)

     //this is for the add document//
     const { addDocument, getDocumentById, updateDocument } = useContext(DocumentContext)
     const { categories, getCategories } = useContext(CategoryContext)
     const { situations, getSituations } = useContext(SituationContext)

     const [document, setDocument] = useState ({})
     const {documentId} = useParams();

     console.log(documentId)
     const navigate = useNavigate ();

//     // const handleFirstNameInput = (event) => {
//     //     let copyOfState = {...employee}

//     //     copyOfState.firstName = event.target.value

//     //     setEmployee(copyOfState)
//     // }


    const handleControlledInputChange = (event) => {

        let newDocument = { ...document }

        newDocument[event.target.id] = event.target.value


        setDocument(newDocument)
    }

    // This is for a checkbok eventhandler const handleCheckBoxControlledInputChange = (event) => {

    //     let newDocument = { ...document }

    //     newDocument[event.target.id] = event.target.checked
    //     setDocument(newDocument)
    // }
    
    const handeClickNewDocument = () => {
       
     if (document.name === "" || document.access === "" || document.note === ""){
             window.alert("Please full out name, access, or/and note section(s) in the form")
         } else {
           //disable the button - no extra clicks
            setIsLoading(true);
        const situationId = parseInt(document.situationId)
        const categoryId = parseInt(document.categoryId)
        const isPaper = JSON.parse(document.isPaper)
        
         document.situationId = situationId
         document.categoryId = categoryId
         document.isPaper = isPaper

            if (documentId){
                //PUT - update
        updateDocument({
            id:document.id,
            name:document.name,
            isPaper: document.isPaper,
            access: document.access,
            note: document.note,
            customerId: +localStorage.react_Roundhouse_user,
            situationId: document.situationId,
            categoryId: document.categoryId,
            rating: ratingS
        })
        .then(() => navigate("/"))
                     }else{
                         //POST - add
         addDocument({
            name:document.name,
            isPaper: document.isPaper,
            access: document.access,
            note: document.note,
            customerId: +localStorage.react_Roundhouse_user,
            situationId: document.situationId,
            categoryId: document.categoryId,
            rating: ratingS
         })
         .then(() => navigate("/"))
            }
         }
    }
    // Get situations and categories. If documentId is in the URL, getDocumentById
    useEffect (() => {
        getSituations()
        .then(getCategories)
        .then( () => {
            if (documentId){
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

return (
    
<form className="documentForm">
{documentId ? <h2 className="documentForm__title">Edit document information</h2>: <h2 className="documentForm__title">New Document Register</h2>}
    
    <fieldset>
        <div className="form-group">
            <label htmlFor="Name">Document Name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document Name" value={document.name}/>
        </div>
    </fieldset>

    {/* this is for Ispaper*/}
     <fieldset>
                <div className="form-group">
                     <label htmlFor="isPaper">Type of Document Format </label>
                     <select name="isPaper" id="isPaper"onChange={ handleControlledInputChange} >
                     <option  id="isPaper" name="isPaper" value="true">Paper format</option>
                     <option  id="isPaper" name="isPaper" value="false">Digital format</option>
                     </select>
                </div>
    </fieldset> 

    <fieldset>
        <div className="form-group">
            <label htmlFor="Name">Document access:</label>
            <input type="text" id="access" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document access" value={document.access}/>
        </div>
    </fieldset>

    <fieldset>
        <div className="form-group">
            <label htmlFor="Name">Document note:</label>
            <input type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document note" value={document.note}/>
        </div>
    </fieldset>

    <fieldset>
            <div className="form-group">
                <label htmlFor="situation">Choose a situation: </label>
                <select onChange={handleControlledInputChange} defaultValue={document.situationId} name="situationId" id="situationId" className="form-control">
                    <option  value="0">Select a situation</option>
                    {situations.map(l => (
                        <option key={l.id} value={l.id} >
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>
    </fieldset>

    {/* checkbox example <fieldset>
                <div className="form-group">
                     <label htmlFor="manager">If you are a manager, please check the box here: </label>
                     <input onChange={ handleCheckBoxControlledInputChange} type="checkbox" id="manager" name="manager" value={employee.manager}></input>
                   
                </div>
    </fieldset> */}
    <fieldset>
            <div className="form-group">
                <label htmlFor="category">Choose a category: </label>
                <select onChange={handleControlledInputChange} defaultValue={document.categoryId} name="categoryId" id="categoryId" className="form-control">
                    <option  value="0">Select a category</option>
                    {categories.map(l => (
                        <option key={l.id} value={l.id} >
                            {l.name}
                        </option>
                    ))}
                </select>
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
        name="simple-controlled"
        value={ratingS}
        onChange={(handleControlledInputChange, newRating) => {
          setRatingS(newRating);
        }}
      />
      </Box>
    </fieldset>


          <button className="btn btn-primary" 
            onClick={ event => {
                event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                handeClickNewDocument()
            }}>
            {documentId ? <> Update information</>: <>Save New Document Information</>}
          </button>
</form>

)
}


//disabled={isLoading}