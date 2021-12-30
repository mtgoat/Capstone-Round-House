// Purpose: to add a new document onject at the documents array at API 
import React, {useContext, useEffect, useState} from "react";
import { DocumentContext } from "./DocumentProvider";
import { SituationContext } from "../situations/SituationProvider";
import { CategoryContext } from "../categories/CategoryProvider";
import "./Document.css";
import { useNavigate } from 'react-router-dom';

 export const DocumentForm = () => {


     //this is for the add document//
     const { addDocument } = useContext(DocumentContext)
     const { categories, getCategories } = useContext(CategoryContext)
     const { situations, getSituations } = useContext(SituationContext)

     const [document, setDocument] = useState ({
        name:"",
        isPaper: true,
        access: "",
        note: "",
        customerId: +localStorage.activeUser,
        situationId: 0,
        categoryId: 0
    });

     const navigate = useNavigate ();

     useEffect (() => {
         getSituations()
         .then(getCategories)
         .then()
     }, [])

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
    
    const handeClickNewDocument = (event) => {
        event.preventDefault()

        const situationId = parseInt(document.situationId)
        const categoryId = parseInt(document.categoryId)

        // if (situationId === 0 || categoryId === 0 ){
        //     window.alert("Please full out all information in the form")
        // }else {
         document.situationId = situationId
         document.categoryId = categoryId
         addDocument(document)
         .then(() => navigate("/"))
        // }
    }

return (
    
<form className="documentForm">
    <h2 className="documentForm__title">New Document Register</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="Name">Document Name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Document Name" value={document.name}/>
        </div>
    </fieldset>

    {/* this is for Ispaper*/}
     <fieldset>
                <div className="form-group">
                     <label htmlfor="isPaper">Type of Document Format </label>
                     <select name="isPaper" id="isPaper">
                     <option onChange={ handleControlledInputChange}  id="isPaper" name="isPaper" value="true">Paper format</option>
                     <option onChange={ handleControlledInputChange}  id="isPaper" name="isPaper" value="false">Digital format</option>
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
                     <label htmlfor="manager">If you are a manager, please check the box here: </label>
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

          <button className="btn btn-primary"
            onClick={handeClickNewDocument} preventDefault>
            Save New Document Information
          </button>
</form>

)
}

console.log("hello")
