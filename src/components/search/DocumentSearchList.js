// purpose: to display  search results
import React, { useContext, useEffect, useState } from "react";
import { DocumentContext } from "../documents/DocumentProvider";
import { DocumentCard } from "../documents/DocumentCard";
import "../documents/Document.css";

//to do - edit line 
export const DocumentSearchList = () => {
    const { documents, getDocuments, searchTerms } = useContext(DocumentContext)

    const [ filteredDocuments, setFiltered ] = useState([])
  

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
            setFiltered(undefined)
            
    }
  }, [searchTerms, documents])
  console.log("this is filteredDocuments", filteredDocuments)
return (
    <div className="documents">
   {filteredDocuments === undefined ? <></> : filteredDocuments.map(document => {
        return <DocumentCard key={document.id} document={document} />
      })
    }
  </div> 

)

}



// explanation of the return:This is related to the tab function in the home.js.  In the home.js there are 4 tab plans - one with no id, one with id of 1, to last nab tab with id of 3.When the list function is called at each nab tab, if props.id is undefined, then all docts will display at the first nav tab on the left.  If the props.id is 1, the all document with situationID =1 i.e. short term care will display.  //
