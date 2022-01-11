import React, {useContext, useState} from "react";
import { Button, Table, Modal, ModalFooter, Row, Col, Card, CardGroup } from "react-bootstrap";
import { DocumentListContext } from "./DocumentListProvider";

export const DocumentListCard = ({document}) => {


    return (
        <section className="documentList" id={document.id}>
            <h3 className="documentList__name">Name: <b>{document.name}</b></h3>

            <div className="documentList__situation">Situation: <b>{document.situation.name}</b></div>
        </section>
    )
}

export const DocumentListCard2 = ({document}) => {
    const { getDocumentListById } = useContext(DocumentListContext)

    return (
        <tr>
            <td className="documentList__name"> {document.name}</td>
            
            <td className="documentList__done">

                <input type="checkbox" readOnly/>
            </td>
            
            <td className="documentList__situation"> {document.situation.name}</td>
        </tr>
    )
}