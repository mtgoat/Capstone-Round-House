import React, {useContext, useState} from "react";
import { Button, Table, Modal, ModalFooter, Row, Col, Card, CardGroup } from "react-bootstrap";
import { DocumentListContext } from "./DocumentListProvider";
import { DocumentContext } from "../documents/DocumentProvider"


export const DocumentListCard = ({documentList}) => {


    return (
        <section className="documentList" id={documentList.id}>
            <h3 className="documentList__name">Name: <b>{documentList.name}</b></h3>

            <div className="documentList__situation">Situation: <b>{documentList.situation.name}</b></div>
        </section>
    )
}
//this is for the list of suggested documents for all the situations
export const DocumentListCard2 = ({documentList}) => {
    const { documentLists, getDocumentListById } = useContext(DocumentListContext)
    const { documents, setDocuments, getDocuments} = useContext(DocumentContext)

//this is an empty array: documents.filter( doc => doc.name === documentList.name)

console.log(documents,"documentList")
    return (
        <tr>
            <td className="documentList__name"> {documentList.name}</td>
            
            <td className="documentList__done">

                {documents.filter( doc => doc.name === documentList.name)
                .map( doc =>{
                   return <div> {doc.name} added to your account</div>
                }) }

            </td>
            
            <td className="documentList__situation"> {documentList.situation.name}</td>
        </tr>
    )
}