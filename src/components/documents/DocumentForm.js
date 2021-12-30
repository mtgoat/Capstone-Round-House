// Purpose: to add a new document onject at the documents array at API 
import React, {useContext, useEffect, useState} from "react";
import { DocumentContext } from "./DocumentProvider";
import { SituationContext } from "../locations/LocationDataProvider";
import { CategoryContext } from "../categories/CategoryProvider";
import "./Document.css";
import { useNavigate } from 'react-router-dom';

 export const DocumentForm = () => {
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

    const handleCheckBoxControlledInputChange = (event) => {

        let newDocument = { ...document }

        newDocument[event.target.id] = event.target.checked
        setDocument(newDocument)
    }
    
    const handeClickRegisterDocument = (event) => {
        event.preventDefault()

        const situationId = parseInt (document.situationId)
        const categoryId = parseInt (document.categoryId)

        if (situationId === 0 || categoryId === 0 ){
            window.alert("Please full out all information in the form")
        }else {
            
         addDocument(document)
         .then(() => navigate("/home"))
        }
    }

return (
<form className="employeeForm">
    <h2 className="employeeForm__title">New Employee Register</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="firstName">Employee First Name:</label>
            <input type="text" id="firstName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee First Name" value={employee.firstName}/>
        </div>
    </fieldset>

    <fieldset>
        <div className="form-group">
            <label htmlFor="lastName">Employee Last Name:</label>
            <input type="text" id="lastName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Last Name" value={employee.lastName}/>
        </div>
    </fieldset>

    <fieldset>
            <div className="form-group">
                <label htmlFor="location">Choose a location: </label>
                <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control">
                    <option  value="0">Select a location</option>
                    {locations.map(l => (
                        <option key={l.id} value={l.id} >
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>
    </fieldset>

    <fieldset>
                <div className="form-group">
                     <label htmlfor="manager">If you are a manager, please check the box here: </label>
                     <input onChange={ handleCheckBoxControlledInputChange} type="checkbox" id="manager" name="manager" value={employee.manager}></input>
                   
                </div>
    </fieldset>
    <fieldset>
                <div className="form-group">
                     <label htmlfor="fullTime">If you work full time, please check the box here: </label>
                     <input onChange={ handleCheckBoxControlledInputChange} type="checkbox" id="fullTime" name="fullTime" value={employee.fullTime}></input>
                </div>
    </fieldset>

    <fieldset>
        <div className="form-group">
            <label htmlFor="lastName">Current Hourly Rate:</label>
            <input type="number" id="hourlyRate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Last Name" value={employee.hourlyRate}/>
        </div>
    </fieldset>

          <button className="btn btn-primary"
            onClick={handeClickRegisterEmployee}>
            Save New Employee Registration
          </button>
</form>

)
}

