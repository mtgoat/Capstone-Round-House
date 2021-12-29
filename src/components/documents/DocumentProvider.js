import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const DocumentContext = createContext()

// This component establishes what data can be used.
export const DocumentProvider = (props) => {
    const [documents, setDocuments] = useState([])

    const getDocuments = () => {
        return fetch("http://localhost:8088/documents?_expand=situation&_expand=category")
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

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <DocumentContext.Provider value={{
            documents, getDocuments, addDocument
        }}>
            {props.children}
        </DocumentContext.Provider>
    )
}
