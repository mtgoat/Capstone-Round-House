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
      const subset = documents.filter(document => document.name.toLowerCase().includes(searchTerms))
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



