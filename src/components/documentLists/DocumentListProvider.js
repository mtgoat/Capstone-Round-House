import React, { useState, createContext }  from "react";

export const DocumentListContext = createContext()

// This component establishes what data can be used.
export const DocumentListProvider = (props) => {
    const [documentLists, setDocumentLists] = useState([])
//     const currentUser = JSON.parse(localStorage.getItem("react_Roundhouse_user")).id
// console.log(JSON.parse(localStorage.getItem("react_Roundhouse_user")).id)
    const getDocumentLists = () => {
        return fetch(`http://localhost:8088/documentLists?_expand=situation`)
        .then(res =>  res.json())
        .then(setDocumentLists)
    }

    const addDocumentList =  documentObj => {
        return fetch("http://localhost:8088/documentLists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(documentObj)
        })
        .then(getDocumentLists)
    }

    const getDocumentListById = (id) => {
        return fetch(`http://localhost:8088/documentLists/${id}?_expand=situation`)
            .then(res => res.json())
    }

    const updateDocumentList = documentObj => {
        return fetch(`http://localhost:8088/documentLists/${documentObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(documentObj)
        })
          .then(getDocumentLists)
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
        <DocumentListContext.Provider value={{
            documentLists, getDocumentLists, addDocumentList,  getDocumentListById, updateDocumentList, searchTerms, setSearchTerms
        }}>
            {props.children}
        </DocumentListContext.Provider>
    )
}