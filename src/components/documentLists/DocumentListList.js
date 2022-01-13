import React, { useContext, useEffect, useState } from "react";
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
     documentLists.map(documentListOb => {
          return <DocumentListCard key={documentListOb.id} documentList={documentListOb} />
        }): 
        documentLists.filter(documentListOb => documentListOb.situationId === props.id)
        .map(documentListOb => {
          return <DocumentListCard key={documentListOb.id} documentList={documentListOb} />})
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
      getDocuments()
  }, [])

    // const { docNumber, setDocNumber } = useState ()
    // const { docListNumber, setDocListNumber } = useState ()
    
    let getDocNum =   props.id===undefined ? documents.length: documents.filter(documentListOb => documentListOb.situationId === props.id).length

    let getDocLstNum = props.id===undefined ? documentLists.length: documentLists.filter(documentListOb => documentListOb.situationId === props.id).length
    
    // setDocNumber(getDocNum)
    // setDocListNumber(getDocLstNum)

    let percent = getDocNum/getDocLstNum * 100

    
  return (
    <div className="documentLists">
        <Table responsive striped bordered className="documentsList__table">
            <thead >
                <tr>
                    <th colSpan={3}><p>Total # of all the suggested docs below: {getDocLstNum}</p>

                    <p>Total # of docs added: {getDocNum} </p>
                    
                    <p>Percentage of the docs added: {percent.toFixed(2)}% </p>

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
     documentLists.map(documentListOb => {
          return <DocumentListCard2 key={documentListOb.id} documentList={documentListOb} />
        }): 
        documentLists.filter(documentListOb => documentListOb.situationId === props.id)
        .map(documentListOb => {
          return <DocumentListCard2 key={documentListOb.id} documentList={documentListOb} />})
      }
        </Table>
    </div> 
  )
}