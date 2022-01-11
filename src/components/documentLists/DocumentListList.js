import React, { useContext, useEffect } from "react";
import { DocumentListContext } from "./DocumentListProvider";
import {DocumentListCard, DocumentListCard2} from "./DocumentListCard";
import { Table } from "react-bootstrap";
import { DocumentList } from "../documents/DocumentList";
import { DocumentContext } from "../documents/DocumentProvider";

export const DocumentListList = (props) => {
    const { documentLists, getDocumentLists } = useContext(DocumentListContext)

    // Empty dependency array - useEffect only runs after first render
   // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect (() => {
      // console.log("DocumentList: useEffect - getDocuments")
      getDocumentLists()
  }, [])
    
  
  return (
      <div className="documentLists">
     
     {
     props.id===undefined ? 
     documentLists.map(document => {
          return <DocumentListCard key={document.id} document={document} />
        }): 
        documentLists.filter(document => document.situationId === props.id)
        .map(document => {
          return <DocumentListCard key={document.id} document={document} />})
      }
  
    </div> 
  )
}

export const DocumentListList2 = (props) => {
    const { documentLists, getDocumentLists } = useContext(DocumentListContext)

    const { documents, getDocuments } = useContext(DocumentContext)
    // Empty dependency array - useEffect only runs after first render
   // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect (() => {
      // console.log("DocumentList: useEffect - getDocuments")
      getDocumentLists()
  }, [])
    
    const addedDocuments = documents.filter (document => document.name)

    console.log("addedDocuments", addedDocuments)
  return (
    <div className="documentLists">
        <Table responsive striped bordered className="documentsList__table">
            <thead >
                <tr>
                    <th colSpan={3}><p>Total # of all the suggested docs below: {documentLists.length}</p>

                    <p>Total # of docs added: filter goes here </p>
                    
                    <p>Percentage of the docs added: filter / doc.length goes here </p>

                    </th>
                    
                </tr>
                
                <tr>
                    <th>Document name</th>
                    <th>Already created</th>
                    <th>Situation</th>
                </tr>


            </thead>
            
     {
     props.id===undefined ? 
     documentLists.map(document => {
          return <DocumentListCard2 key={document.id} document={document} />
        }): 
        documentLists.filter(document => document.situationId === props.id)
        .map(document => {
          return <DocumentListCard2 key={document.id} document={document} />})
      }
        </Table>
    </div> 
  )
}