// purpose: to display documents at the home tab and to display search result
import React, { useContext, useEffect, useState } from "react";
import { DocumentContext } from "./DocumentProvider";
import { DocumentCard } from "./DocumentCard";
import "./Document.css";
import { useNavigate } from "react-router-dom";

export const DocumentList = (props) => {
    console.log(props.id)
    const { documents, getDocuments, searchTerms } = useContext(DocumentContext)

    const [ filteredDocuments, setFiltered ] = useState([])
    const navigate = useNavigate ()

      // Empty dependency array - useEffect only runs after first render
    useEffect (() => {
        // console.log("DocumentList: useEffect - getDocuments")
        getDocuments()
    }, [])

 // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== ""){
      // If the search field is not blank, display matching animals
      const subset = documents.filter(document => document.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
            // If the search field is blank, display all animals
            setFiltered(documents)
    }
  }, [searchTerms, documents])

return (
    <div className="documents">
   
   {
   props.id===undefined ? 
   documents.map(document => {
        return <DocumentCard key={document.id} document={document} />
      }): 
      documents.filter(document => document.situationId === props.id)
      .map(document => {
        return <DocumentCard key={document.id} document={document} />})
    }
  </div> 
)

}


// explanation of the return:This is related to the tab function in the home.js.  In the home.js there are 4 tab plans - one with no id, one with id of 1, to last nab tab with id of 3.When the list function is called at each nab tab, if props.id is undefined, then all docts will display at the first nav tab on the left.  If the props.id is 1, the all document with situationID =1 i.e. short term care will display.  //
