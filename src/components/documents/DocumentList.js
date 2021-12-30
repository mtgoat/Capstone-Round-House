import React, { useContext, useEffect } from "react";
import { DocumentContext } from "./DocumentProvider";
import { DocumentCard } from "./DocumentCard";
import "./Document.css";
import { useNavigate } from "react-router-dom";

export const DocumentList = (props) => {
    console.log(props.id)
    const { documents, getDocuments } = useContext(DocumentContext)
    const navigate = useNavigate ()

    useEffect (() => {
        // console.log("DocumentList: useEffect - getDocuments")
        getDocuments()
    }, [])

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



