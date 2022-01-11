// purpose: to display documents at the home tab
import React, { useContext, useEffect } from "react";
import { DocumentContext } from "./DocumentProvider";
import { DocumentCard, DocumentCard2,DocumentCard3 } from "./DocumentCard";
import "./Document.css";
import { Table } from "react-bootstrap";

export const DocumentList = (props) => {
    console.log(props.id)
    const { documents, getDocuments } = useContext(DocumentContext)

  // Empty dependency array - useEffect only runs after first render
 // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
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


// explanation of the return:This is related to the tab function in the home.js.  In the home.js there are 4 tab plans - one with no id, one with id of 1, to last nab tab with id of 3.When the list function is called at each nab tab, if props.id is undefined, then all docts will display at the first nav tab on the left.  If the props.id is 1, the all document with situationID =1 i.e. short term care will display.  //

export const DocumentList2 = (props) => {
  console.log(props.id)
  const { documents, getDocuments } = useContext(DocumentContext)
    // Empty dependency array - useEffect only runs after first render
// useEffect dependency array with dependencies - will run if dependency changes (state)
// searchTerms will cause a change
useEffect (() => {
  // console.log("DocumentList: useEffect - getDocuments")
  getDocuments()
}, [])


return (
  <div className="documents">
    <p>sorted by function?</p>
    <Table responsive striped bordered className="documents__table">
       <thead >
          <tr>
            <th>Document name</th>
            <th>Format</th>
            <th>Access</th>
            <th>Note</th>
            <th>Situation</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Edit/Release</th>
          </tr>
        </thead>
 {
 props.id===undefined ? 
 documents.map(document => {
      return <DocumentCard2 key={document.id} document={document} />
          
 }): 
    documents.filter(document => document.situationId === props.id)
    .map(document => {
      return <DocumentCard2 key={document.id} document={document} />})
  }
  
          <tr>
  <td colSpan={7}> Total number of listed documents above: <b>{documents.length}</b> </td>
          </tr>
</Table>
</div> 
)

}

export const DocumentList3 = (props) => {
  console.log(props.id)
  const { documents, getDocuments } = useContext(DocumentContext)

    // Empty dependency array - useEffect only runs after first render
  useEffect (() => {
      // console.log("DocumentList: useEffect - getDocuments")
      getDocuments()
  }, [])

// useEffect dependency array with dependencies - will run if dependency changes (state)
// searchTerms will cause a change
useEffect (() => {
  // console.log("DocumentList: useEffect - getDocuments")
  getDocuments()
}, [])


return (
  <div className="documents">
 
 {
 props.id===undefined ? 
 documents.map(document => {
      return <DocumentCard3 key={document.id} document={document} />
    }): 
    documents.filter(document => document.situationId === props.id)
    .map(document => {
      return <DocumentCard3 key={document.id} document={document} />})
  }

</div> 
)

}
