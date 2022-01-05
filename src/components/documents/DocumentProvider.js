import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const DocumentContext = createContext()

// This component establishes what data can be used.
export const DocumentProvider = (props) => {
    const [documents, setDocuments] = useState([])
    const currentUser = localStorage.getItem("react_Roundhouse_user")

    const getDocuments = () => {
        return fetch(`http://localhost:8088/documents?customerId=${currentUser}&_expand=situation&_expand=category`)
        .then(res =>  res.json())
        .then(setDocuments)
    }

    const addDocument =  documentObj => {
        return fetch("http://localhost:8088/documents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(documentObj)
        })
        .then(getDocuments)
    }

    const getDocumentById = (id) => {
        return fetch(`http://localhost:8088/documents/${id}?_expand=situation&_expand=category`)
            .then(res => res.json())
    }

    const releaseDocument = documentId => {
        return fetch(`http://localhost:8088/documents/${documentId}`, {
            method: "DELETE"
        })
            .then(getDocuments)
    }

    const updateDocument = documentObj => {
        return fetch(`http://localhost:8088/documents/${documentObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(documentObj)
        })
          .then(getDocuments)
      }

      //this is for search function
      const [ searchTerms, setSearchTerms ] = useState("")
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <DocumentContext.Provider value={{
            documents, getDocuments, addDocument, releaseDocument, getDocumentById, updateDocument, searchTerms, setSearchTerms
        }}>
            {props.children}
        </DocumentContext.Provider>
    )
}
