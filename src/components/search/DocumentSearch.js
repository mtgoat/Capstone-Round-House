import React, {useContext} from "react";
import { DocumentContext } from "../documents/DocumentProvider";
// import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const DocumentSearch = () => {

    const {setSearchTerms} = useContext(DocumentContext)
//react bootstrap classname.my = margin 

    return ( 
      <>
      <div className="search__form">
         <input type="search"
        className="form-control rounded"
        placeholder="Search for an document... " onChange={(event) => {setSearchTerms (event.target.value)
          console.log("search term", event.target.value)}}/>
        <Button  className="btn-danger" onClick={(event) => {setSearchTerms(event.target.value)
       console.log("search term", event.target.value)  }}
        > Search </Button>
      </div>
      </>
        // <Form>
        //       {/* <Row className="align-items-center"> */}
        //       {/* react bootstrap classname.my = margin column size for small pix display*/}
        //         <Col sm="auto" className="my-1 align-items-center">
        //             <Form.Label htmlFor="inlineFormInputName" >Search documents </Form.Label>
        //             <Form.Control id="inlineFormInputName" placeholder="search for a document.." onKeyUp={(event) => setSearchTerms(event.target.value)}></Form.Control>
        //         </Col>

        //         {/* <Col xs="auto" className="my-1">
        //           <Button className=" btn-secondary" onClick={()=> {navigate(`/`)}}>Home</Button>
        //         </Col> */}
        //       {/* </Row> */}
        // </Form>
    )
}